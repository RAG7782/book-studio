# CLAUDE.md

## Project Overview

Squad fullstack para escrita de livros de todos os generos — da ideacao a publicacao. Arquitetura task-first com pipeline ETL (Extract → Transform → Load).

## Structure

```
squads/book-studio/     # Squad principal
  agents/ (8)           # Agentes especializados
  tasks/ (23)           # Tasks por agente
  workflows/ (4)        # Pipelines adaptados por genero
  templates/ (5)        # Templates reutilizaveis
  checklists/ (3)       # Verificacao por fase
  config/ (3)           # Padroes e tech stack
  data/                 # Catalogo de generos
```

## Commands

```bash
yamllint squads/book-studio/squad.yaml            # Validate manifest
yamllint squads/book-studio/data/genres.yaml       # Validate genres
```

## Rules

- Todos os arquivos em Markdown seguem `.markdownlint.json`
- YAML validado com yamllint (relaxed)
- Tasks seguem arquitetura task-first do AIOS
- Agentes tem frontmatter YAML com persona, commands, collaboration
- Dialogo em pt-BR usa travessao (—), nao aspas
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`

## Language

All content in Portuguese (pt-BR).
