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
│       │   └── handoff-output-template.md  # NOVO
│       ├── checklists/
│       │   ├── pre-writing.md
│       │   ├── revision.md
│       │   └── publication.md
│       ├── tools/
│       ├── scripts/
│       │   └── validate-handoff.js  # NOVO
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
│       └── data/
│           └── genres.yaml
└── manuscripts/
```
