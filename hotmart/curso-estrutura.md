# Book Studio — Escreva Livros com IA

**Curso Online: 11 Modulos + Bonus**

Aprenda a usar um sistema completo de 8 agentes AI para escrever livros de qualquer genero — da ideacao a publicacao. Pipeline ETL profissional: Extract (Muse + Researcher) → Transform (Architect → Scribe → Editor → Critic) → Load (Formatter → Publisher).

**Duracao total estimada:** 120 minutos
**Formato:** Video-aulas + materiais praticos
**Plataforma:** Hotmart
**Nivel:** Iniciante a Avancado

---

## Modulo 00 — Introducao: Escrita de Livros com IA

### Objetivo
Apresentar o conceito do Book Studio, o pipeline ETL de 8 agentes, e o que esperar do curso.

### Duracao estimada
8 minutos

### Roteiro resumido
- O que e o Book Studio e como funciona
- Pipeline ETL: Extract → Transform → Load
- Os 8 agentes e suas especialidades
- Generos suportados: ficcao, nao-ficcao, tecnico, poetico
- O que voce vai conseguir criar ao final do curso

### Materiais do pack
- README.md (visao geral do projeto)
- squad.yaml (manifest completo do squad)

---

## Modulo 01 — Setup: Configurando Seus Agentes

### Objetivo
Passo a passo completo para configurar os 8 agentes no ChatGPT (Custom GPTs) e/ou Tess.ai.

### Duracao estimada
12 minutos

### Roteiro resumido
- Escolher plataforma: ChatGPT vs Tess.ai (comparacao)
- Criar os 8 Custom GPTs no ChatGPT com instrucoes prontas
- Alternativa: Configurar agentes na Tess.ai
- Upload de Knowledge files (templates e checklists)
- Testar cada agente com comandos basicos

### Materiais do pack
- exports/SETUP-GUIDE.md (guia completo de deploy)
- exports/chatgpt/ (8 arquivos de instrucoes para ChatGPT)
- exports/tess-ai/ (8 arquivos de instrucoes para Tess.ai)
- Templates: character-sheet.md, worldbuilding-bible.md, book-proposal.md

---

## Modulo 02 — Muse: Ideacao e Brainstorming Criativo

### Objetivo
Usar o agente Muse para gerar ideias de livros, criar premissas profissionais e desenvolver personagens memoraveis.

### Duracao estimada
12 minutos

### Roteiro resumido
- Comando `*brainstorm`: gerar 5-10 ideias de livros
- Comando `*premise`: transformar ideia em logline + premissa profissional
- Comando `*character`: criar fichas completas de personagens
- Quando usar Muse: bloqueio criativo, novos projetos, exploracao de generos
- Demonstracao pratica: criar premissa + 3 personagens para romance de fantasia

### Materiais do pack
- exports/chatgpt/muse-gpt-instructions.md
- exports/tess-ai/muse-tess-instructions.md
- templates/character-sheet.md
- templates/book-proposal.md

---

## Modulo 03 — Researcher: Pesquisa e Worldbuilding

### Objetivo
Usar o agente Researcher para investigacao tematica, construcao de mundos ficcionais e fact-checking.

### Duracao estimada
10 minutos

### Roteiro resumido
- Comando `*investigate`: pesquisar temas, contextos historicos, referencias
- Comando `*worldbuild`: construir biblia de mundo ficcional (geografia, cultura, magia, tecnologia)
- Comando `*fact-check`: verificar precisao factual em manuscritos de nao-ficcao
- Quando usar Researcher: ficcao especulativa, livros historicos, nao-ficcao baseada em fatos
- Demonstracao pratica: criar worldbuilding completo para fantasia urbana brasileira

### Materiais do pack
- exports/chatgpt/researcher-gpt-instructions.md
- exports/tess-ai/researcher-tess-instructions.md
- templates/worldbuilding-bible.md

---

## Modulo 04 — Architect: Estrutura e Outline do Livro

### Objetivo
Criar outline profissional, planejar capitulos em detalhe e construir timeline de eventos com o agente Architect.

### Duracao estimada
12 minutos

### Roteiro resumido
- Comando `*outline`: gerar outline completo do livro (three-act, hero's journey, etc.)
- Comando `*chapter-plan`: planejar cada capitulo com objetivos, cenas e arcos
- Comando `*timeline`: mapear cronologia de eventos (essencial para ficcao complexa)
- Estruturas por genero: romance (three-act), suspense (save-the-cat), tecnico (progressive tutorial)
- Demonstracao pratica: outline completo de thriller psicologico

### Materiais do pack
- exports/chatgpt/architect-gpt-instructions.md
- exports/tess-ai/architect-tess-instructions.md
- templates/book-proposal.md
- templates/chapter-template.md

---

## Modulo 05 — Scribe: Escrita de Capitulos e Cenas

### Objetivo
Escrever rascunhos de capitulos, cenas e dialogos com prosa de alta qualidade usando o agente Scribe.

### Duracao estimada
15 minutos

### Roteiro resumido
- Comando `*draft-chapter`: escrever capitulo completo a partir de outline
- Comando `*write-scene`: escrever cenas especificas com beat-by-beat
- Comando `*dialogue`: criar dialogos naturais com subtexto
- Show don't tell: tecnicas de escrita imersiva
- Voz narrativa e POV: adaptar ao genero e estilo
- Demonstracao pratica: escrever capitulo 1 de romance contemporaneo

### Materiais do pack
- exports/chatgpt/scribe-gpt-instructions.md
- exports/tess-ai/scribe-tess-instructions.md
- templates/chapter-template.md

---

## Modulo 06 — Editor + Critic: Revisao e Feedback Critico

### Objetivo
Revisar texto com precisao profissional (Editor) e obter analise critica completa (Critic).

### Duracao estimada
12 minutos

### Roteiro resumido
- **Editor:**
  - `*copy-edit`: gramatica, ortografia, pontuacao, estilo
  - `*structural-review`: pacing, coerencia, transicoes
  - `*consistency-check`: cronologia, personagens, detalhes
- **Critic:**
  - `*analysis`: analise critica completa (tematica, narrativa, mercado)
  - `*beta-read`: simulacao de experiencia de leitura
- Demonstracao pratica: revisar capitulo 1 + receber feedback critico

### Materiais do pack
- exports/chatgpt/editor-gpt-instructions.md
- exports/chatgpt/critic-gpt-instructions.md
- exports/tess-ai/editor-tess-instructions.md
- exports/tess-ai/critic-tess-instructions.md
- checklists/revision.md

---

## Modulo 07 — Formatter: Producao Editorial

### Objetivo
Formatar manuscrito profissionalmente (Markdown, EPUB) e gerar prompt de capa com o agente Formatter.

### Duracao estimada
10 minutos

### Roteiro resumido
- Comando `*markdown`: formatar manuscrito completo em Markdown editorial
- Comando `*epub`: gerar estrutura EPUB 3 completa (metadados, TOC, CSS)
- Comando `*cover-prompt`: criar prompt detalhado para gerar capa com DALL-E/Midjourney
- Padroes editoriais: tipografia, espacamento, elementos pre-textuais
- Demonstracao pratica: formatar romance completo + gerar prompt de capa

### Materiais do pack
- exports/chatgpt/formatter-gpt-instructions.md
- exports/tess-ai/formatter-tess-instructions.md

---

## Modulo 08 — Publisher: Publicacao e Marketing

### Objetivo
Gerar metadados editoriais, sinopses profissionais, quarta-capa e kit de lancamento com o agente Publisher.

### Duracao estimada
10 minutos

### Roteiro resumido
- Comando `*metadata`: gerar metadados completos (BISAC, keywords, categorias)
- Comando `*sinopse`: escrever sinopse + quarta-capa profissional
- Comando `*marketing`: kit de lancamento (pitch, posts, email, press release)
- Posicionamento de mercado e publico-alvo
- Demonstracao pratica: preparar livro completo para Amazon KDP

### Materiais do pack
- exports/chatgpt/publisher-gpt-instructions.md
- exports/tess-ai/publisher-tess-instructions.md
- templates/book-metadata.md
- checklists/publication.md

---

## Modulo 09 — Projeto Completo: Pipeline End-to-End

### Objetivo
Demonstracao pratica completa do pipeline inteiro com um livro real, do conceito ao manuscrito final.

### Duracao estimada
15 minutos

### Roteiro resumido
- Escolher genero e tema (exemplo: novela de suspense)
- **Extract:** Muse (brainstorm + character + premise) → Researcher (investigate)
- **Transform:** Architect (outline) → Scribe (3 capitulos) → Editor (revisao) → Critic (analise)
- **Load:** Formatter (markdown + capa) → Publisher (metadados + marketing)
- Ver o pipeline completo em acao
- Checkpoints e gates de aprovacao entre fases

### Materiais do pack
- workflows/full-pipeline.md
- checklists/pre-writing.md
- checklists/revision.md
- checklists/publication.md

---

## Modulo Bonus — Catalogo de Generos + Dicas Avancadas

### Objetivo
Explorar os 21 generos suportados, adaptacoes de workflow por genero e tecnicas avancadas.

### Duracao estimada
10 minutos

### Roteiro resumido
- Catalogo completo: 21 generos (ficcao, nao-ficcao, tecnico, poetico)
- Workflows especializados: ficcao vs nao-ficcao
- Adaptacoes por subgenero: fantasia (worldbuilding extenso), suspense (pacing rapido), tecnico (exemplos de codigo)
- Quick draft workflow: escrever rapido estilo NaNoWriMo
- Dicas para usar multiplos agentes em paralelo
- Proximos passos: comunidade, atualizacoes, novos generos

### Materiais do pack
- data/genres.yaml (catalogo de 21 generos)
- workflows/fiction-workflow.md
- workflows/nonfiction-workflow.md
- workflows/quick-draft.md

---

## Resumo do Curso

| Modulo | Titulo | Duracao | Materiais |
|--------|--------|---------|-----------|
| 00 | Introducao | 8 min | README, squad.yaml |
| 01 | Setup | 12 min | SETUP-GUIDE, 16 instrucoes, 3 templates |
| 02 | Muse | 12 min | 2 instrucoes, 2 templates |
| 03 | Researcher | 10 min | 2 instrucoes, 1 template |
| 04 | Architect | 12 min | 2 instrucoes, 2 templates |
| 05 | Scribe | 15 min | 2 instrucoes, 1 template |
| 06 | Editor + Critic | 12 min | 4 instrucoes, 1 checklist |
| 07 | Formatter | 10 min | 2 instrucoes |
| 08 | Publisher | 10 min | 2 instrucoes, 1 template, 1 checklist |
| 09 | Pipeline Completo | 15 min | 1 workflow, 3 checklists |
| Bonus | Generos + Avancado | 10 min | 1 catalogo, 3 workflows |
| **TOTAL** | **11 modulos** | **~120 min** | **82 arquivos do Book Studio** |

---

## Materiais Inclusos no Curso

### Instrucoes de Agentes (16 arquivos)
- 8 instrucoes para ChatGPT (Custom GPTs)
- 8 instrucoes para Tess.ai

### Templates (5 arquivos)
- book-proposal.md — Proposta editorial profissional
- chapter-template.md — Estrutura padrao de capitulo
- character-sheet.md — Ficha completa de personagem
- worldbuilding-bible.md — Biblia de mundo ficcional
- book-metadata.md — Metadados para publicacao

### Workflows (4 arquivos)
- full-pipeline.md — Pipeline completo end-to-end
- fiction-workflow.md — Otimizado para ficcao
- nonfiction-workflow.md — Otimizado para nao-ficcao
- quick-draft.md — Rascunho rapido estilo NaNoWriMo

### Checklists (3 arquivos)
- pre-writing.md — Verificacao pre-escrita
- revision.md — Verificacao de revisao
- publication.md — Verificacao de publicacao

### Data (1 arquivo)
- genres.yaml — Catalogo de 21 generos

### Guias (1 arquivo)
- SETUP-GUIDE.md — Deploy completo ChatGPT + Tess.ai

---

## Requisitos

- **Plataforma AI:** ChatGPT Plus ($20/mes) OU Tess.ai (plano pago)
- **Conhecimentos previos:** Nenhum (curso completo desde setup)
- **Generos:** Funciona para qualquer genero (ficcao, nao-ficcao, tecnico, poetico)

---

## O que Voce Vai Conseguir Criar

Ao final do curso voce tera:

- 8 agentes AI configurados e prontos para usar
- 1 livro completo (do conceito ao manuscrito final)
- Outline profissional de qualquer genero
- Manuscrito formatado em Markdown + EPUB
- Kit de lancamento completo (metadados, sinopse, marketing)
- Prompt de capa profissional para DALL-E/Midjourney
- Sistema escalavel para escrever quantos livros quiser

---

## Proximos Passos

1. Assistir Modulo 00 (introducao)
2. Configurar agentes (Modulo 01)
3. Escolher genero do seu primeiro livro
4. Seguir pipeline completo (Modulos 02-09)
5. Publicar seu livro

**Comece agora e escreva seu primeiro livro com IA em semanas, nao meses.**

---

**Licenca:** MIT — Renato Aparecido Gomes
**Repositorio GitHub:** [RAG7782/book-studio](https://github.com/RAG7782/book-studio)
**CI Status:** Passing (4 jobs: lint-markdown, validate-yaml, validate-structure, security)
