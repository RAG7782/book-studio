# Schemas — Book Studio

Schemas YAML que definem contratos de dados (handoffs) entre os agentes do pipeline editorial.

## Entity Model

`entity-model.yaml` define os tipos de entidade do dominio:

| Entidade | Descricao |
|----------|-----------|
| `book` | Projeto de livro |
| `character` | Personagem (ficcao) |
| `location` | Local ou cenario |
| `chapter` | Capitulo do livro |
| `theme` | Tema ou motivo |
| `source` | Fonte de pesquisa |
| `timeline_event` | Evento na timeline |
| `world_rule` | Regra do universo |

**10 relacoes:** `part_of`, `relates_to`, `appears_in`, `interacts_with`, `transforms_to`, `conflicts_with`, `located_in`, `references`, `precedes`, `foreshadows`

## Handoff Schemas

Cada arquivo `handoff-{source}-to-{target}.yaml` define o contrato de dados para a passagem de bastao entre agentes.

### Pipeline Flow

```
Muse ──→ Architect ──→ Scribe ──→ Editor ──→ Formatter ──→ Publisher
  │          ↑           ↑    ↗     │  ↕        ↑
  ├──→ Researcher ───────┘   Critic ←┘  │        │
  └──→ Publisher                        └────────┘
```

### Schemas Disponiveis

| Schema | De → Para | Conteudo Principal |
|--------|-----------|-------------------|
| `handoff-muse-to-architect` | Muse → Architect | premissa, personagens, temas |
| `handoff-muse-to-researcher` | Muse → Researcher | genero, escopo de pesquisa |
| `handoff-muse-to-publisher` | Muse → Publisher | premissa para posicionamento |
| `handoff-researcher-to-architect` | Researcher → Architect | descobertas, biblia do mundo |
| `handoff-researcher-to-scribe` | Researcher → Scribe | notas de referencia, terminologia |
| `handoff-architect-to-scribe` | Architect → Scribe | outline, voice profile, cap plan |
| `handoff-scribe-to-editor` | Scribe → Editor | rascunho, notas de escrita |
| `handoff-editor-to-scribe` | Editor → Scribe | revisoes, feedback loop |
| `handoff-editor-to-critic` | Editor → Critic | manuscrito para avaliacao |
| `handoff-editor-to-formatter` | Editor → Formatter | manuscrito final, estrutura |
| `handoff-critic-feedback` | Critic → qualquer | scores, pontos fortes/fracos |
| `handoff-formatter-to-publisher` | Formatter → Publisher | arquivos formatados, TOC |

## Como Usar

### No AIOS (Claude Code)
Os schemas sao referenciados nos frontmatter das tasks (`handoff_schema:`) e nos agents (`handoff_schemas:`).

### No ChatGPT / Tess.ai
O usuario copia a secao `## Handoff` do output de cada agente e cola como input do proximo agente, seguindo o schema correspondente.

## Validacao

```bash
node scripts/validate-handoff.js  # Valida handoff contra schemas
yamllint schemas/*.yaml            # Valida YAML
```
