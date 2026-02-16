# Book Studio

[![CI](https://github.com/RAG7782/book-studio/actions/workflows/ci.yml/badge.svg)](https://github.com/RAG7782/book-studio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agents](https://img.shields.io/badge/agents-8-purple)]()
[![Genres](https://img.shields.io/badge/genres-20%2B-orange)]()
[![Language](https://img.shields.io/badge/lang-pt--BR-green)]()

**Squad de 8 agentes AI para escrita de livros — da ideacao a publicacao.**

Pipeline editorial completo que cobre todos os generos: ficcao, nao-ficcao, tecnico, academico, infantil, poesia e mais.

## Pipeline

```
EXTRACT                    TRANSFORM                                    LOAD
Muse + Researcher    ->    Architect -> Scribe -> Editor -> Critic    ->    Formatter -> Publisher
(ideia + pesquisa)         (estrutura -> escrita -> revisao -> analise)     (formato -> distribuicao)
```

## Agentes

| Agente | Papel | Comandos |
|--------|-------|----------|
| **Muse** | Ideacao criativa, brainstorming, premissas | `*brainstorm` `*character` `*premise` |
| **Researcher** | Pesquisa, worldbuilding, fact-checking | `*investigate` `*worldbuild` `*fact-check` |
| **Architect** | Estrutura, outline, timeline | `*outline` `*chapter-plan` `*timeline` |
| **Scribe** | Escrita de capitulos, cenas, dialogos | `*draft-chapter` `*write-scene` `*dialogue` |
| **Editor** | Revisao, copy editing, consistencia | `*copy-edit` `*structural-review` `*consistency-check` |
| **Critic** | Analise critica, beta reading | `*analysis` `*beta-read` |
| **Formatter** | Markdown, EPUB 3, prompts de capa | `*markdown` `*epub` `*cover-prompt` |
| **Publisher** | Metadados, sinopse, marketing | `*metadata` `*sinopse` `*marketing` |

## Generos Suportados

**Ficcao:** Romance, Conto, Novela, Fantasia, Sci-Fi, Terror, Suspense, Infantil, YA, Roteiro

**Nao-ficcao:** Biografia, Autoajuda, Ensaio, Tecnico, Academico, Manual, Jornalismo Literario, Historico, Filosofia, Negocios

**Outros:** Poesia, Cordel, Roteiro, HQ/Graphic Novel

## Como Usar

### Opcao 1: ChatGPT (Custom GPTs)

Crie 8 Custom GPTs usando as instrucoes prontas em `exports/chatgpt/`. Guia completo em [`exports/SETUP-GUIDE.md`](exports/SETUP-GUIDE.md).

### Opcao 2: Tess.ai

Crie 8 agentes na Tess.ai usando as instrucoes condensadas em `exports/tess-ai/`. Guia completo em [`exports/SETUP-GUIDE.md`](exports/SETUP-GUIDE.md).

### Opcao 3: Qualquer LLM

Use os arquivos em `squads/book-studio/agents/` como system prompts em qualquer LLM (Claude, GPT-4, Gemini, Llama, etc.).

### Opcao 4: AIOS (local)

```bash
# Clonar e usar com AIOS
git clone https://github.com/RAG7782/book-studio.git
cd book-studio
# Ativar agentes via AIOS
@muse *brainstorm
```

## Quick Start

```
1. @muse *brainstorm        # Gerar ideias para o livro
2. @researcher *investigate  # Pesquisar e fundamentar
3. @architect *outline       # Criar estrutura/outline
4. @scribe *draft-chapter    # Escrever capitulos
5. @editor *copy-edit        # Revisar e refinar
6. @critic *analysis         # Receber feedback critico
7. @formatter *epub          # Formatar para publicacao
8. @publisher *metadata      # Preparar metadados e marketing
```

## Estrutura do Projeto

```
book-studio/
├── squads/book-studio/
│   ├── squad.yaml              # Manifest do squad
│   ├── agents/ (8)             # Definicoes dos agentes
│   ├── tasks/ (23)             # Tasks por agente
│   ├── workflows/ (4)          # Pipelines por genero
│   ├── templates/ (5)          # Templates reutilizaveis
│   ├── checklists/ (3)         # Verificacao por fase
│   ├── config/ (3)             # Padroes e convencoes
│   └── data/genres.yaml        # Catalogo de 20+ generos
├── exports/
│   ├── chatgpt/ (8)            # Instrucoes para Custom GPTs
│   ├── tess-ai/ (8)            # Instrucoes para Tess.ai
│   └── SETUP-GUIDE.md          # Guia de deploy completo
└── .github/workflows/ci.yml    # CI com 4 jobs
```

## Workflows Disponiveis

| Workflow | Para quem |
|----------|-----------|
| `full-pipeline` | Pipeline completo end-to-end (todos os 8 agentes) |
| `fiction-workflow` | Otimizado para ficcao (foco em personagens e arco narrativo) |
| `nonfiction-workflow` | Otimizado para nao-ficcao (foco em pesquisa e argumentacao) |
| `quick-draft` | Rascunho rapido estilo NaNoWriMo (velocidade sobre perfeicao) |

## Templates Inclusos

- **book-proposal.md** — Proposta editorial profissional
- **chapter-template.md** — Estrutura padrao de capitulo
- **character-sheet.md** — Ficha completa de personagem
- **worldbuilding-bible.md** — Biblia de mundo ficcional
- **book-metadata.md** — Metadados para publicacao

## Contribuindo

Contribuicoes sao bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

Ideias de contribuicao:
- Novos generos/subgeneros em `data/genres.yaml`
- Novos templates (query letter, series bible, etc.)
- Novos workflows (poetry, children, academic)
- Traducoes dos exports para outros idiomas
- Melhorias nos system prompts dos agentes

## Licenca

[MIT](LICENSE) — Renato Aparecido Gomes
