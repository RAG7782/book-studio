#!/usr/bin/env node

/**
 * validate-handoff.js
 * Valida a estrutura do squad Book Studio: schemas, handoffs, e referencias.
 *
 * Uso: node scripts/validate-handoff.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SQUAD_ROOT = path.resolve(__dirname, '..');
const SCHEMAS_DIR = path.join(SQUAD_ROOT, 'schemas');
const AGENTS_DIR = path.join(SQUAD_ROOT, 'agents');
const TASKS_DIR = path.join(SQUAD_ROOT, 'tasks');

let errors = 0;
let warnings = 0;

function log(type, msg) {
  const prefix = type === 'error' ? '\x1b[31mERROR\x1b[0m' :
                 type === 'warn' ? '\x1b[33mWARN\x1b[0m' :
                 '\x1b[32mOK\x1b[0m';
  console.log(`  ${prefix}: ${msg}`);
  if (type === 'error') errors++;
  if (type === 'warn') warnings++;
}

function parseYamlFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    return yaml.load(match[1]);
  } catch {
    return null;
  }
}

function validateSchemas() {
  console.log('\n== Validando Schemas ==');
  if (!fs.existsSync(SCHEMAS_DIR)) {
    log('error', 'Diretorio schemas/ nao encontrado');
    return;
  }

  const yamlFiles = fs.readdirSync(SCHEMAS_DIR).filter(f => f.endsWith('.yaml'));
  if (yamlFiles.length === 0) {
    log('error', 'Nenhum schema YAML encontrado');
    return;
  }

  for (const file of yamlFiles) {
    const filePath = path.join(SCHEMAS_DIR, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      yaml.load(content);
      log('ok', `${file} — YAML valido`);
    } catch (e) {
      log('error', `${file} — YAML invalido: ${e.message}`);
    }
  }

  // Verificar entity-model
  if (yamlFiles.includes('entity-model.yaml')) {
    log('ok', 'entity-model.yaml presente');
  } else {
    log('error', 'entity-model.yaml ausente');
  }

  // Verificar handoff schemas
  const handoffs = yamlFiles.filter(f => f.startsWith('handoff-'));
  log('ok', `${handoffs.length} handoff schemas encontrados`);
}

function validateAgents() {
  console.log('\n== Validando Agentes ==');
  const agentFiles = fs.readdirSync(AGENTS_DIR).filter(f => f.endsWith('.md'));

  for (const file of agentFiles) {
    const filePath = path.join(AGENTS_DIR, file);
    const frontmatter = parseYamlFrontmatter(filePath);
    if (!frontmatter) {
      log('error', `${file} — frontmatter YAML ausente ou invalido`);
      continue;
    }

    const collab = frontmatter.collaboration;
    if (!collab) {
      log('warn', `${file} — secao collaboration ausente`);
      continue;
    }

    // Verificar handoff_schemas
    if (collab.handoff_schemas) {
      const outbound = collab.handoff_schemas.outbound || [];
      const inbound = collab.handoff_schemas.inbound || [];

      for (const schema of [...outbound, ...inbound]) {
        const schemaPath = path.join(SQUAD_ROOT, schema);
        if (!fs.existsSync(schemaPath)) {
          log('error', `${file} — schema referenciado nao existe: ${schema}`);
        }
      }
      log('ok', `${file} — ${outbound.length} outbound, ${inbound.length} inbound schemas`);
    } else {
      log('warn', `${file} — handoff_schemas nao definido`);
    }

    // Verificar memory
    if (collab.memory_reads && collab.memory_writes) {
      log('ok', `${file} — memory_reads: [${collab.memory_reads}], memory_writes: [${collab.memory_writes}]`);
    } else {
      log('warn', `${file} — memory_reads/memory_writes nao definido`);
    }
  }
}

function validateTasks() {
  console.log('\n== Validando Tasks ==');
  const taskFiles = fs.readdirSync(TASKS_DIR).filter(f => f.endsWith('.md'));

  for (const file of taskFiles) {
    const filePath = path.join(TASKS_DIR, file);
    const frontmatter = parseYamlFrontmatter(filePath);
    if (!frontmatter) {
      log('error', `${file} — frontmatter YAML ausente ou invalido`);
      continue;
    }

    if (frontmatter.handoff_schema) {
      const schemaPath = path.join(SQUAD_ROOT, frontmatter.handoff_schema);
      if (!fs.existsSync(schemaPath)) {
        log('error', `${file} — handoff_schema nao existe: ${frontmatter.handoff_schema}`);
      } else {
        log('ok', `${file} — handoff_schema: ${frontmatter.handoff_schema}`);
      }
    } else {
      log('warn', `${file} — handoff_schema nao definido`);
    }

    if (frontmatter.memory_sections) {
      log('ok', `${file} — memory_sections: [${frontmatter.memory_sections}]`);
    } else {
      log('warn', `${file} — memory_sections nao definido`);
    }
  }
}

function validateMemory() {
  console.log('\n== Validando Memory ==');
  const memoryDir = path.join(SQUAD_ROOT, 'memory');
  if (!fs.existsSync(memoryDir)) {
    log('error', 'Diretorio memory/ nao encontrado');
    return;
  }

  const templatePath = path.join(memoryDir, 'book-state-template.md');
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath, 'utf8');
    const expectedSections = [
      'Meta', 'Premissa', 'Personagens', 'Mundo', 'Pesquisa',
      'Estrutura', 'Timeline', 'Temas', 'Progresso', 'Feedback',
      'Log de Agentes', 'Memory Updates'
    ];

    for (const section of expectedSections) {
      if (content.includes(`## ${section}`)) {
        log('ok', `book-state-template.md — secao "${section}" presente`);
      } else {
        log('error', `book-state-template.md — secao "${section}" ausente`);
      }
    }
  } else {
    log('error', 'book-state-template.md ausente');
  }
}

// Main
console.log('Book Studio — Validacao de Handoff Schemas\n');
console.log(`Squad root: ${SQUAD_ROOT}`);

validateSchemas();
validateAgents();
validateTasks();
validateMemory();

console.log('\n== Resultado ==');
console.log(`  Erros: ${errors}`);
console.log(`  Avisos: ${warnings}`);
console.log(`  Status: ${errors === 0 ? '\x1b[32mPASSED\x1b[0m' : '\x1b[31mFAILED\x1b[0m'}`);

process.exit(errors > 0 ? 1 : 0);
