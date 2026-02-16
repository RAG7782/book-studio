# Orchestrator — Book Studio

> Sistema de orquestração automatizada do pipeline ETL do Book Studio

## Índice

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Quality Gates](#quality-gates)
- [Genre Router](#genre-router)
- [Pipeline State Tracking](#pipeline-state-tracking)
- [Como Usar](#como-usar)
  - [Com AIOS](#com-aios)
  - [Com ChatGPT](#com-chatgpt)
  - [Com Tess.ai](#com-tessai)
- [Configuração](#configuração)
- [Troubleshooting](#troubleshooting)

---

## Visão Geral

O Orchestrator gerencia automaticamente a execução do pipeline ETL de 3 fases do Book Studio:

- **Extract**: Ideação (Muse) → Pesquisa (Researcher)
- **Transform**: Estrutura (Architect) → Escrita (Scribe) → Revisão (Editor ↔ Critic)
- **Load**: Formatação (Formatter) → Publicação (Publisher)

**Principais funcionalidades:**

- Quality Gates entre fases (validação automática)
- Revision Loop automático (Editor ↔ Critic até score ≥ 7)
- Genre Router (adapta pipeline por gênero/subgênero)
- State Tracking (histórico completo da execução)
- Handoff Validation (valida schemas F1)
- Checkpoints automáticos

---

## Arquitetura

```
EXTRACT STAGE
┌─────────────────────────────────────────────┐
│  Muse (ideação)                             │
│    ↓                                        │
│  Researcher (pesquisa/worldbuilding)        │
│    ↓ [conditional: skip para poesia]       │
└─────────────────────────────────────────────┘
            ↓
     ┌──────────────────┐
     │ GATE: Extract →  │  ← Quality Gate
     │    Transform     │
     └──────────────────┘
            ↓
            ├─→ 🟢 AUTO PASS: todos critérios atendidos → prosseguir
            ├─→ 🟡 REVIEW: critérios parciais → revisão do autor
            └─→ 🔴 BLOCK: critérios não atendidos → voltar
            ↓ [se PASS ou REVIEW aprovado]

TRANSFORM STAGE
┌─────────────────────────────────────────────┐
│  Architect (estrutura)                      │
│    ↓                                        │
│  Scribe (escrita — iterativo por cap.)     │
│    ↓                                        │
│  ┌──────────────────────────────────────┐  │
│  │ REVISION LOOP (max 3 iterações)     │  │
│  │                                      │  │
│  │  Editor (revisão)                    │  │
│  │    ↓                                 │  │
│  │  Critic (avaliação — score 1-10)    │  │
│  │    ↓                                 │  │
│  │  ┌──────────────────────────┐       │  │
│  │  │ score >= 7?              │       │  │
│  │  ├─→ SIM: aprovado →        │       │  │
│  │  │           próximo cap.    │       │  │
│  │  └─→ NÃO: feedback →        │       │  │
│  │      Editor (↑ loop)         │       │  │
│  │                              │       │  │
│  │  ⚠️ Se 3 iterações: FORCE   │       │  │
│  │     EXIT com warning         │       │  │
│  └──────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
            ↓
     ┌──────────────────┐
     │ GATE: Transform  │
     │    → Load        │
     └──────────────────┘
            ↓
            ├─→ 🟢 AUTO PASS: manuscrito aprovado
            ├─→ 🟡 REVIEW: aprovação parcial
            └─→ 🔴 BLOCK: pendências críticas
            ↓ [se PASS ou REVIEW aprovado]

LOAD STAGE
┌─────────────────────────────────────────────┐
│  Formatter (Markdown, EPUB, capa)           │
│    ↓                                        │
│  Publisher (metadados, marketing)           │
└─────────────────────────────────────────────┘
            ↓
     📦 OUTPUT FINAL:
        - Manuscrito formatado
        - Kit de publicação
        - Pipeline report
```

---

## Quality Gates

O sistema possui **3 níveis de validação**:

### 🟢 AUTO PASS
- Todos os critérios obrigatórios e recomendados atendidos
- Pipeline prossegue automaticamente
- Não requer intervenção do autor

### 🟡 REVIEW
- Critérios obrigatórios OK, mas alguns recomendados faltando
- Pipeline pausa para revisão do autor
- Autor decide: aprovar e prosseguir OU voltar para completar

### 🔴 BLOCK
- Critérios obrigatórios não atendidos
- Pipeline bloqueado
- Retorna ao agente responsável para correção

### Gates do Pipeline

| Gate | Valida | Arquivo |
|------|--------|---------|
| **Extract → Transform** | Premissa, gênero, pesquisa | `gate-extract-to-transform.yaml` |
| **Revision Loop** | Score do Critic (≥ 7) | `gate-revision-loop.yaml` |
| **Transform → Load** | Manuscrito aprovado, sem issues críticos | `gate-transform-to-load.yaml` |

---

## Genre Router

O sistema adapta o pipeline automaticamente com base no **gênero e subgênero** do livro:

### Adaptações por Gênero

**Ficção (fiction-workflow):**
- Romance → ênfase em química de personagens, arcos emocionais
- Fantasia → worldbuilding profundo, sistemas de magia
- Ficção Científica → pesquisa científica, plausibilidade
- Terror → atmosfera, pacing, dread
- Suspense → reviravoltas, red herrings

**Não-Ficção (nonfiction-workflow):**
- Biografia → linha do tempo, fontes, vozes
- Autoajuda → exercícios, motivação, ação
- Técnico → exemplos, código, step-by-step
- Acadêmico → metodologia, citações, rigor

**Especial:**
- Poesia → pula Researcher, ênfase em forma/imagem/voz

### Adaptações por Subgênero

Exemplo: **Romance**
- Romance Histórico → Researcher obrigatório (período histórico)
- Romance Literário → Scribe em voz literária
- Romance Policial → ênfase adicional em pacing

Ver `route-config.yaml` para mapeamento completo dos 21 gêneros.

---

## Pipeline State Tracking

Cada execução do pipeline gera um arquivo de estado:

**Localização:** `state/pipeline-state.md`

**Conteúdo:**
- Status geral (fase, workflow, progresso)
- Progresso por stage (agentes, tasks, observações)
- Histórico de gates (data, resultado, detalhes)
- Handoffs realizados (schemas validados)
- Bloqueios ativos
- Log de execução

**State Machine:**
- 12 estados possíveis (ver `state-transitions.yaml`)
- Transições válidas entre estados
- Pause/resume em qualquer ponto
- Recovery de erros

---

## Como Usar

### Com AIOS

O Orchestrator é totalmente integrado ao AIOS. Comandos disponíveis:

#### `*run-pipeline`
Inicia o pipeline completo com routing automático.

```bash
# No contexto do AIOS, com @orion ou @dex

Autor: "Quero escrever um romance histórico ambientado no Brasil colonial"

Orion: *run-pipeline
# Sistema detecta: gênero = romance, subgênero = romance-historico
# Carrega fiction-workflow com adaptações:
#   - researcher_required: true
#   - researcher_focus: periodo-historico
#   - emphasis: [character-chemistry, tropes, historical-accuracy]

# Pipeline inicia com Muse...
```

#### `*route`
Mostra o routing para um gênero específico (sem executar).

```bash
Autor: *route fantasia dark-fantasy

# Output:
# Workflow: fiction-workflow
# Adaptações:
#   - researcher_required: true
#   - researcher_focus: worldbuilding
#   - emphasis: [worldbuilding, magic-system, atmosphere]
#   - scribe_voice: literary
```

#### `*check-gate`
Valida critérios de um gate sem executar transição.

```bash
Autor: *check-gate extract-to-transform

# Output:
# 🟢 premissa_defined: PASS
# 🟢 genre_defined: PASS
# 🟢 research_done: PASS
# 🟡 characters_defined: MISSING (3 personagens definidos, recomendado 5+)
# 🟢 theme_defined: PASS
#
# Resultado: 🟡 REVIEW (4/5 critérios OK)
```

#### `*resume`
Retoma pipeline pausado do último checkpoint.

```bash
Autor: *resume

# Pipeline retoma do estado salvo em pipeline-state.md
```

#### `*status`
Mostra status atual do pipeline.

```bash
Autor: *status

# Output:
# Projeto: O Quilombo do Ouro Negro
# Fase: Transform (Scribe)
# Capítulo: 4/12
# Último gate: Extract→Transform (🟢 PASS)
# Próximo gate: Revision Loop (iteração 1/3)
```

---

### Com ChatGPT

Sem AIOS, o Orchestrator funciona como **guia manual** passo a passo:

#### 1. Defina o Gênero

```
Autor → ChatGPT:
"Vou escrever um romance histórico. Qual pipeline devo seguir?"

ChatGPT:
"Baseado em route-config.yaml:
- Workflow: fiction-workflow
- Adaptações: researcher_required=true, researcher_focus=periodo-historico
- Agentes: Muse → Researcher → Architect → Scribe → Editor ↔ Critic → Formatter → Publisher"
```

#### 2. Execute Extract Stage

```
Autor → Muse:
[copia prompt do Muse com contexto do romance histórico]

Muse → Autor:
[output: premissa, personagens, temas]

Autor: salva em book-state.md
```

```
Autor → Researcher:
[copia handoff-muse-to-researcher.yaml + output do Muse]

Researcher → Autor:
[output: pesquisa histórica, worldbuilding]

Autor: salva em book-state.md
```

#### 3. Gate Extract → Transform (Manual)

```
Autor → ChatGPT:
"Valide gate-extract-to-transform.yaml com meu book-state.md"

ChatGPT:
"🟢 Premissa: OK
 🟢 Gênero: OK
 🟢 Pesquisa: OK (15 fontes)
 🟢 Personagens: OK (7 personagens)
 🟢 Tema: OK

 Resultado: 🟢 AUTO PASS — pode prosseguir para Transform"
```

#### 4. Execute Transform Stage

Repita o processo: Architect → Scribe (por capítulo) → Editor ↔ Critic (loop) → gate validation.

**Revision Loop Manual:**
```
# Iteração 1
Scribe → Editor: rascunho cap. 1
Editor → Critic: revisão cap. 1
Critic: score 5/10 (below threshold)
  → feedback para Editor
Editor → Scribe: ajustes

# Iteração 2
Scribe → Editor: rascunho cap. 1 v2
Editor → Critic: revisão cap. 1 v2
Critic: score 8/10 (✓ approved)
  → próximo capítulo
```

#### 5. Execute Load Stage

Formatter → Publisher → output final.

---

### Com Tess.ai

Idêntico ao ChatGPT, mas com copy-paste entre agentes Tess:

1. Abra 8 tabs no navegador (1 por agente)
2. Configure cada agente com seu prompt específico
3. Copie outputs entre agentes manualmente
4. Valide gates com referência aos arquivos YAML

**Vantagem:** cada agente Tess mantém contexto próprio, ideal para pipeline longo.

---

## Configuração

### Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `pipeline-config.yaml` | Config das 3 fases ETL |
| `route-config.yaml` | Mapeamento gênero → workflow |
| `stages/*.yaml` | Detalhes de cada stage |
| `gates/*.yaml` | Critérios dos quality gates |
| `state/*.yaml` | State machine + template |

### Customização

#### Adicionar novo gênero

Edite `route-config.yaml`:

```yaml
routing:
  fiction:
    genres:
      novo-genero:
        adaptations:
          emphasis: [elemento1, elemento2]
          muse_focus: approach
          scribe_voice: style
```

#### Ajustar exit score do Revision Loop

Edite `pipeline-config.yaml`:

```yaml
revision_loop:
  exit_condition: "critic_score >= 7"  # ajuste aqui
```

#### Criar novo gate

1. Adicione em `gates/gate-config.yaml`
2. Crie `gates/gate-[nome].yaml` com critérios
3. Referencie em `pipeline-config.yaml` ou `stages/*.yaml`

---

## Troubleshooting

### Pipeline bloqueado no gate

**Sintoma:** Gate retorna 🔴 BLOCK

**Solução:**
1. Execute `*check-gate [gate-id]` para ver critérios faltantes
2. Volte ao agente responsável
3. Complete os itens obrigatórios
4. Execute `*resume` para reavaliar

### Revision Loop não converge

**Sintoma:** 3 iterações sem atingir score ≥ 7

**Comportamento:** FORCE EXIT automático com warning flag

**Solução:**
1. Revise feedback do Critic nas 3 iterações
2. Identifique dimensões problemáticas (premissa/estrutura/prosa/etc)
3. Decisão do autor:
   - Aceitar manuscrito com score atual E flag de atenção
   - OU voltar manualmente ao Scribe para reescrita profunda

### Handoff validation fail

**Sintoma:** Schema validation error ao passar dados entre agentes

**Solução:**
1. Valide output do agente anterior contra o schema F1 correto
2. Verifique campos obrigatórios
3. Ajuste formato (YAML/JSON) e estrutura
4. Re-execute handoff

### State file corrompido

**Sintoma:** Pipeline não retoma após `*resume`

**Solução:**
1. Restaure último checkpoint: `cp state/pipeline-state.bak.md state/pipeline-state.md`
2. OU reconstrua manualmente usando `state/pipeline-state-template.md`
3. Execute `*resume --force` para ignorar validações

### Gênero não reconhecido

**Sintoma:** Fallback para full-pipeline

**Solução:**
1. Verifique spelling do gênero em `data/genres.yaml`
2. Adicione mapeamento em `route-config.yaml` se novo gênero
3. Execute `*route [genero]` para testar routing

---

## Referências

- **F1 Schemas:** `../schemas/handoffs/`
- **Book State:** `../memory/book-state.md`
- **Entity Model:** `../memory/entity-model.yaml`
- **Workflows:** `../workflows/`
- **Agents:** `../agents/`

---

**Versão:** 2.0.0
**Última atualização:** 2026-02-16
**Compatibilidade:** AIOS v3.10+, ChatGPT, Tess.ai

---

*Orchestrator — automatizando o artesanato digital da escrita*
