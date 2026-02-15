# Book Studio

Squad fullstack para escrita de livros de todos os generos — da ideacao a publicacao.

## Pipeline ETL

```
EXTRACT                    TRANSFORM                              LOAD
Muse + Researcher    →    Architect → Scribe → Editor → Critic  →  Formatter → Publisher
(ideia + pesquisa)        (estrutura → escrita → revisao)          (formato → distribuicao)
```

## Agentes

| Agente | Papel | Fase |
|--------|-------|------|
| **Muse** | Ideacao & Conceito | Extract |
| **Researcher** | Pesquisa & Worldbuilding | Extract |
| **Architect** | Estrutura & Outline | Transform |
| **Scribe** | Escrita & Rascunhos | Transform |
| **Editor** | Revisao & Consistencia | Transform |
| **Critic** | Analise Critica & Feedback | Transform |
| **Formatter** | Producao (EPUB/PDF/Layout) | Load |
| **Publisher** | Distribuicao & Marketing | Load |

## Generos Suportados

**Ficcao:** Romance, Conto, Novela, Poesia, Fantasia, Sci-Fi, Terror, Suspense, Infantil, YA, Roteiro

**Nao-ficcao:** Biografia, Autoajuda, Ensaio, Tecnico, Academico, Manual, Jornalismo Literario, Historico, Filosofia, Negocios

## Workflows

| Workflow | Descricao |
|----------|-----------|
| `full-pipeline` | Pipeline completo end-to-end |
| `fiction-workflow` | Otimizado para ficcao |
| `nonfiction-workflow` | Otimizado para nao-ficcao |
| `quick-draft` | Rascunho rapido (NaNoWriMo style) |

## Quick Start

1. Ativar squad: `@muse *brainstorm` (iniciar com ideacao)
2. Pesquisar: `@researcher *investigate` (fundamentar)
3. Estruturar: `@architect *outline` (planejar)
4. Escrever: `@scribe *draft-chapter` (produzir)
5. Revisar: `@editor *copy-edit` (refinar)
6. Avaliar: `@critic *analysis` (feedback)
7. Formatar: `@formatter *epub` (produzir)
8. Publicar: `@publisher *metadata` (distribuir)

## Estrutura

```
squads/book-studio/
├── squad.yaml          # Manifest
├── agents/ (8)         # Agentes especializados
├── tasks/ (~23)        # Tasks por agente
├── workflows/ (4)      # Pipelines adaptados
├── templates/ (5)      # Templates reutilizaveis
├── checklists/ (3)     # Verificacao por fase
├── config/ (3)         # Padroes e tech stack
└── data/               # Catalogo de generos
```

## Autor

Renato Aparecido Gomes

## Licenca

MIT
