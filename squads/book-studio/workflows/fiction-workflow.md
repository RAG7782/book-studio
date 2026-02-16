---
workflow: Ficcao
description: "Workflow otimizado para livros de ficcao (romance, conto, novela)"
type: specialized
base: full-pipeline
genre: fiction
orchestrator_config:
  route: fiction
  stages: [extract, transform, load]
  gates: [gate-extract-to-transform, gate-revision-loop, gate-transform-to-load]
  revision_loop: { max_iterations: 3, exit_score: 7 }
  fiction_adaptations:
    muse: [brainstorm, character, premise]
    researcher: [worldbuild, investigate]
    architect: [outline, timeline, chapter-plan]
    transform_loop: true
---

# Workflow de Ficcao

Workflow especializado para romances, contos, novelas e ficcao em geral.

## Pipeline Adaptado

```
Muse (brainstorm + character + premise)
  ↓
Researcher (worldbuild + investigate)
  ↓
Architect (outline + timeline + chapter-plan)
  ↓
┌─ Loop por capitulo ─────────────────┐
│ Scribe (draft-chapter + write-scene) │
│   ↓                                  │
│ Editor (copy-edit + consistency)     │
│   ↓                                  │
│ Critic (analysis) → feedback loop    │
└─────────────────────────────────────┘
  ↓
Editor (structural-review do todo)
  ↓
Critic (beta-read completo)
  ↓
Formatter (markdown + epub + cover-prompt)
  ↓
Publisher (metadata + sinopse + marketing)
```

## Enfases

- **Character design profundo**: Arcos, motivacoes, vozes distintas
- **Worldbuilding**: Consistencia do universo ficcional
- **Show dont tell**: Prioridade na escrita
- **Dialogo**: Naturalidade e subtexto
- **Pacing**: Mapa de tensao monitorado
- **Beta reading**: Simulacao com perfil do publico-alvo

## Subgeneros com Ajustes

| Subgenero | Ajuste |
|-----------|--------|
| Romance | Enfase em quimica entre personagens, tropes do genero |
| Fantasia | Worldbuilding extenso, sistema de magia documentado |
| Suspense | Pacing acelerado, red herrings, revelacoes cronometradas |
| Infantil | Vocabulario adequado, ilustracoes, ritmo visual |
| Poesia | Pular outline tradicional, foco em forma e imagem |
