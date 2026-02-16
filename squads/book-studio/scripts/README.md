# Scripts — Book Studio Squad

Scripts de validacao e automacao para o squad Book Studio.

## validate-handoff.js

Valida a estrutura do squad e handoffs individuais contra schemas.

### Uso

#### Modo 1: Validacao completa do squad

Valida toda a estrutura do squad: schemas, agentes, tasks, memory.

```bash
node scripts/validate-handoff.js
# ou
npm run validate
```

**Output:**

- Verifica schemas YAML validos
- Verifica referencias em agentes (handoff_schemas, memory)
- Verifica referencias em tasks (handoff_schema, memory_sections)
- Verifica secoes do book-state-template.md
- Exit 0 se OK, exit 1 se erros

#### Modo 2: Validacao de handoff data

Valida um handoff individual contra seu schema.

```bash
node scripts/validate-handoff.js --validate-data <handoff-file> <schema-file>
# ou
npm run validate-data -- <handoff-file> <schema-file>
```

**Exemplo:**

```bash
node scripts/validate-handoff.js --validate-data \
  examples/conto-test/handoffs/01-muse-to-researcher.md \
  schemas/handoff-muse-to-researcher.yaml
```

**O que valida:**

- Todos campos `required` do schema presentes no handoff
- Todos campos `optional` do schema (aviso se ausentes)
- Busca campos em: frontmatter YAML, secoes markdown (##/###), conteudo raw

**Output:**

- `OK` (verde): Campo encontrado
- `ERROR` (vermelho): Campo requerido ausente
- `WARN` (amarelo): Campo opcional ausente
- Exit 0 se todos required OK, exit 1 se algum required faltando

### Integracao com Quality Gates

O modo `--validate-data` esta integrado ao sistema de gates via `gate-config.yaml`:

```yaml
settings:
  pre_gate_validation:
    enabled: true
    validate_handoffs: true
    validate_book_state: true
    script: "scripts/validate-handoff.js --validate-data"
    on_failure: block
```

**Uso nos gates:**

Antes de processar um quality gate, valide o handoff:

```bash
# Validar handoff antes de passar pelo gate
node scripts/validate-handoff.js --validate-data \
  memory/handoffs/current-handoff.md \
  schemas/handoff-scribe-to-editor.yaml

# Se exit 0, prosseguir com gate
# Se exit 1, bloquear pipeline
```

### Dependencias

- Node.js >= 20.0.0
- js-yaml: 4.1.0

```bash
npm install
```

### Exemplos

**Handoff completo (PASSED):**

```
Book Studio — Validacao de Handoff Data

== Validando Handoff Data ==
Handoff: examples/conto-test/handoffs/01-muse-to-researcher.md
Schema:  schemas/handoff-muse-to-researcher.yaml

Campos requeridos: 2
Campos opcionais:  3

  OK: Campo requerido presente: genre_config
  OK: Campo requerido presente: research_scope
  OK: Campo opcional presente: premise
  OK: Campo opcional presente: world_seed
  OK: Campo opcional presente: constraints

== Resultado ==
  Erros: 0
  Avisos: 0
  Status: PASSED — Todos campos requeridos presentes
```

**Handoff incompleto (FAILED):**

```
Book Studio — Validacao de Handoff Data

== Validando Handoff Data ==
Handoff: memory/handoffs/incomplete.md
Schema:  schemas/handoff-muse-to-researcher.yaml

Campos requeridos: 2
Campos opcionais:  3

  OK: Campo requerido presente: genre_config
  ERROR: Campo requerido ausente: research_scope
  WARN: Campo opcional ausente: premise

== Resultado ==
  Erros: 1
  Avisos: 1
  Status: FAILED — 1 campo(s) requerido(s) ausente(s)

Campos requeridos ausentes:
  - research_scope

Campos opcionais ausentes (avisos):
  - premise
```

### Roadmap

- [ ] Validacao de tipos (string, object, list, enum)
- [ ] Validacao de book-state sections contra entity-model
- [ ] Modo watch para validacao continua
- [ ] Output JSON para integracao CI/CD
