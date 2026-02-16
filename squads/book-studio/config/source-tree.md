# Source Tree — Book Studio

```
book-studio/
├── squads/
│   └── book-studio/
│       ├── squad.yaml
│       ├── README.md
│       ├── config/
│       │   ├── coding-standards.md
│       │   ├── tech-stack.md
│       │   └── source-tree.md
│       ├── agents/                 # 8 agentes
│       │   ├── muse.md
│       │   ├── researcher.md
│       │   ├── architect.md
│       │   ├── scribe.md
│       │   ├── editor.md
│       │   ├── critic.md
│       │   ├── formatter.md
│       │   └── publisher.md
│       ├── tasks/                  # 23 tasks
│       │   ├── muse-*.md
│       │   ├── researcher-*.md
│       │   ├── architect-*.md
│       │   ├── scribe-*.md
│       │   ├── editor-*.md
│       │   ├── critic-*.md
│       │   ├── formatter-*.md
│       │   └── publisher-*.md
│       ├── schemas/                # 14 schemas (NOVO)
│       │   ├── entity-model.yaml
│       │   ├── handoff-muse-to-architect.yaml
│       │   ├── handoff-muse-to-researcher.yaml
│       │   ├── handoff-muse-to-publisher.yaml
│       │   ├── handoff-researcher-to-architect.yaml
│       │   ├── handoff-researcher-to-scribe.yaml
│       │   ├── handoff-architect-to-scribe.yaml
│       │   ├── handoff-scribe-to-editor.yaml
│       │   ├── handoff-editor-to-scribe.yaml
│       │   ├── handoff-editor-to-critic.yaml
│       │   ├── handoff-editor-to-formatter.yaml
│       │   ├── handoff-critic-feedback.yaml
│       │   ├── handoff-formatter-to-publisher.yaml
│       │   └── README.md
│       ├── memory/                 # Memoria compartilhada (NOVO)
│       │   ├── book-state-template.md
│       │   └── README.md
│       ├── workflows/
│       │   ├── full-pipeline.md
│       │   ├── fiction-workflow.md
│       │   ├── nonfiction-workflow.md
│       │   └── quick-draft.md
│       ├── templates/
│       │   ├── book-proposal.md
│       │   ├── chapter-template.md
│       │   ├── character-sheet.md
│       │   ├── worldbuilding-bible.md
│       │   ├── book-metadata.md
│       │   ├── handoff-output-template.md
│       │   └── pipeline-report-short.md    # GAP-006: Template compacto <10k palavras
│       ├── checklists/
│       │   ├── pre-writing.md
│       │   ├── revision.md
│       │   └── publication.md
│       ├── tools/
│       ├── scripts/
│       │   ├── validate-handoff.js         # Validacao squad + handoff data (GAP-007)
│       │   └── README.md                   # Documentacao de uso
│       ├── orchestrator/              # Pipeline orchestrator (NOVO F2)
│       │   ├── README.md
│       │   ├── pipeline-config.yaml
│       │   ├── route-config.yaml
│       │   ├── stages/
│       │   │   ├── extract-stage.yaml
│       │   │   ├── transform-stage.yaml
│       │   │   └── load-stage.yaml
│       │   ├── gates/
│       │   │   ├── gate-config.yaml
│       │   │   ├── gate-extract-to-transform.yaml
│       │   │   ├── gate-transform-to-load.yaml
│       │   │   └── gate-revision-loop.yaml
│       │   └── state/
│       │       ├── pipeline-state-template.md
│       │       └── state-transitions.yaml
│       ├── data/
│       │   ├── genres.yaml
│       │   └── scoring-rubric.yaml         # GAP-005: Rubrica do Critic (10 dimensoes)
│       └── examples/                # Test runs e referências (NOVO F3)
│           └── conto-test/          # F3: Pipeline completo "O Relojoeiro"
│               ├── README.md
│               ├── book-state.md
│               ├── pipeline-state.md
│               ├── pipeline-report.md
│               ├── validation-report.md
│               ├── handoffs/        # 13 handoffs preenchidos (GAP-001/002)
│               │   ├── 01-muse-to-researcher.md
│               │   ├── 02-muse-to-architect.md
│               │   ├── 02b-muse-to-publisher.md    # GAP-002: Marketing paralelo

│               │   ├── 03-researcher-to-architect.md
│               │   ├── 04-researcher-to-scribe.md
│               │   ├── 05-architect-to-scribe.md
│               │   ├── 06-scribe-to-editor.md
│               │   ├── 06b-editor-to-scribe.md     # GAP-001: Rewrite estrutural
│               │   ├── 07-editor-to-critic.md
│               │   ├── 08-critic-feedback.md
│               │   ├── 08b-critic-feedback-r2.md
│               │   ├── 09-editor-to-formatter.md
│               │   └── 10-formatter-to-publisher.md
│               ├── chapters/        # 3 drafts + manuscrito revisado
│               │   ├── cena-01-draft.md
│               │   ├── cena-02-draft.md
│               │   ├── cena-03-draft.md
│               │   └── manuscrito-revisado.md
│               └── deliverables/    # Entregas finais
│                   ├── manuscrito-final.md
│                   ├── cover-prompt.md
│                   ├── metadata.md
│                   └── sinopse-marketing.md
└── manuscripts/
```
