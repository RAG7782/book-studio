---
workflow: Pipeline Completo
description: "Pipeline end-to-end: da ideia ao livro publicado"
type: etl
stages: [extract, transform, load]
estimated_duration: "Variavel (semanas a meses dependendo do escopo)"
---

# Pipeline Completo — Da Ideia ao Livro

Workflow end-to-end que orquestra todos os 8 agentes do book-studio
em sequencia ETL.

## Visao Geral

```
EXTRACT                    TRANSFORM                           LOAD
┌─────────────────┐  ┌──────────────────────────────┐  ┌──────────────────┐
│ Muse → Researcher│→│ Architect → Scribe → Editor → │→│ Formatter →       │
│ (ideia + pesquisa)│ │ Critic (loop ate aprovado)    │ │ Publisher         │
└─────────────────┘  └──────────────────────────────┘  └──────────────────┘
```

## Etapas

### EXTRACT — Fase Criativa (1-2 sessoes)

| Step | Agent | Task | Output |
|------|-------|------|--------|
| 1 | Muse | *brainstorm | 5-10 ideias |
| 2 | Muse | *premise | Logline + premissa |
| 3 | Muse | *character | Fichas de personagens |
| 4 | Researcher | *investigate | Banco de pesquisa |
| 5 | Researcher | *worldbuild | Biblia do mundo (ficcao) |

**Gate**: Autor aprova conceito antes de prosseguir.

### TRANSFORM — Fase de Producao (iterativa)

| Step | Agent | Task | Output |
|------|-------|------|--------|
| 6 | Architect | *outline | Outline completo |
| 7 | Architect | *chapter-plan | Plano por capitulo |
| 8 | Scribe | *draft-chapter | Rascunho (por capitulo) |
| 9 | Editor | *copy-edit | Texto revisado |
| 10 | Editor | *consistency-check | Relatorio de consistencia |
| 11 | Critic | *analysis | Analise critica |
| 12 | Critic | *beta-read | Experiencia simulada |

**Loop**: Steps 8-12 repetem por capitulo. Steps 9-12 podem retroalimentar step 8.

**Gate**: Manuscrito final aprovado pelo autor.

### LOAD — Fase de Publicacao (1-2 sessoes)

| Step | Agent | Task | Output |
|------|-------|------|--------|
| 13 | Formatter | *markdown | Manuscrito formatado |
| 14 | Formatter | *epub | Estrutura EPUB |
| 15 | Formatter | *cover-prompt | Prompt para capa |
| 16 | Publisher | *metadata | Metadados editoriais |
| 17 | Publisher | *sinopse | Sinopse + quarta-capa |
| 18 | Publisher | *marketing | Kit de lancamento |

**Gate**: Livro pronto para distribuicao.

## Adaptacoes por Genero

- **Ficcao**: Pipeline completo com worldbuilding e character design
- **Nao-ficcao**: Pular worldbuilding, enfatizar pesquisa e estrutura logica
- **Tecnico**: Pular character design, enfatizar pesquisa e exemplos de codigo
- **Poesia**: Pipeline simplificado (Muse → Scribe → Editor → Formatter)
- **Academico**: Enfatizar pesquisa, fact-check, e citacoes

## Checkpoints

Cada gate requer aprovacao explicita do autor antes de prosseguir.
Nenhuma fase avanca automaticamente.
