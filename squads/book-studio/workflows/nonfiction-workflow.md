---
workflow: Nao-ficcao
description: "Workflow otimizado para livros de nao-ficcao"
type: specialized
base: full-pipeline
genre: nonfiction
orchestrator_config:
  route: nonfiction
  stages: [extract, transform, load]
  gates: [gate-extract-to-transform, gate-revision-loop, gate-transform-to-load]
  revision_loop: { max_iterations: 3, exit_score: 7 }
  nonfiction_adaptations:
    muse: [brainstorm, premise]  # skip character
    researcher: [investigate, fact-check]  # skip worldbuild, add fact-check
    transform_loop: true
    fact_check_per_chapter: true
---

# Workflow de Nao-ficcao

Workflow especializado para biografia, autoajuda, ensaio, tecnico, academico.

## Pipeline Adaptado

```
Muse (brainstorm + premise — sem character design)
  ↓
Researcher (investigate profundo + fact-check continuo)
  ↓
Architect (outline tematico/cronologico + chapter-plan)
  ↓
┌─ Loop por capitulo ──────────────────┐
│ Scribe (draft-chapter — voz tecnica)  │
│   ↓                                   │
│ Researcher (fact-check do capitulo)   │
│   ↓                                   │
│ Editor (copy-edit + structural-review)│
└──────────────────────────────────────┘
  ↓
Critic (analysis — foco em clareza e argumento)
  ↓
Formatter (markdown + epub — com notas e bibliografia)
  ↓
Publisher (metadata + sinopse + marketing)
```

## Enfases

- **Pesquisa solida**: Fontes verificaveis, dados atualizados
- **Estrutura logica**: Argumento progressivo e claro
- **Clareza**: Acessibilidade sem simplificacao excessiva
- **Exemplos**: Casos reais, estudos, anedotas
- **Citacoes**: Bibliografia formatada corretamente
- **Authority**: Credibilidade do autor evidenciada

## Subgeneros com Ajustes

| Subgenero | Ajuste |
|-----------|--------|
| Biografia | Timeline essencial, vozes de terceiros, etica |
| Autoajuda | Exercicios praticos, tom motivacional, estrutura acionavel |
| Tecnico | Exemplos de codigo, passo-a-passo, screenshots |
| Academico | Metodologia, revisao de literatura, rigor formal |
| Ensaio | Voz pessoal forte, argumento original, ritmo literario |
| Negocios | Frameworks, metricas, ROI, case studies |
