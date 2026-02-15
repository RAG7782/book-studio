# Guia de Deploy — Agentes Book Studio em Plataformas Externas

## ChatGPT (Custom GPT)

### Muse

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Muse - Book Ideation Agent |
| **Description** | Agente de ideacao criativa para livros de qualquer genero. Brainstorming, design de personagens e premissas profissionais. |
| **Instructions** | Copiar conteudo de `chatgpt/muse-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Upload: `character-sheet.md`, `worldbuilding-bible.md`, `book-proposal.md` |
| **Capabilities** | Web Browsing: ON, Code Interpreter: OFF, DALL-E: OFF |

**Conversation starters:**
- `*brainstorm` — Quero gerar ideias para um novo livro
- `*character` — Preciso criar um personagem completo
- `*premise` — Quero desenvolver a premissa do meu livro
- Estou com bloqueio criativo, me ajuda?

3. Publish → Only me (privado) ou Anyone with a link

---

### Researcher

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Researcher - Book Research Agent |
| **Description** | Agente de pesquisa e worldbuilding para livros. Pesquisa tematica, construcao de mundos ficcionais e fact-checking. |
| **Instructions** | Copiar conteudo de `chatgpt/researcher-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Upload: `worldbuilding-bible.md` |
| **Capabilities** | Web Browsing: ON, Code Interpreter: OFF, DALL-E: OFF |

**Conversation starters:**
- `*investigate` — Preciso pesquisar um tema para meu livro
- `*worldbuild` — Quero construir o mundo da minha historia
- `*fact-check` — Preciso verificar fatos no meu manuscrito
- Me ajuda a pesquisar o contexto historico do meu livro

3. Publish → Only me (privado) ou Anyone with a link

---

### Architect

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Architect - Book Structure Agent |
| **Description** | Agente de estruturacao de livros. Outlines, arcos narrativos, planejamento de capitulos e timelines. |
| **Instructions** | Copiar conteudo de `chatgpt/architect-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Upload: `book-proposal.md`, `chapter-template.md` |
| **Capabilities** | Web Browsing: OFF, Code Interpreter: OFF, DALL-E: OFF |

**Conversation starters:**
- `*outline` — Quero criar a estrutura do meu livro
- `*chapter-plan` — Preciso planejar um capitulo em detalhe
- `*timeline` — Quero criar a timeline de eventos
- Me ajuda a escolher a melhor estrutura pro meu genero

3. Publish → Only me (privado) ou Anyone with a link

---

### Scribe

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Scribe - Book Writing Agent |
| **Description** | Escritor AI que produz prosa de alta qualidade em qualquer genero. Capitulos, cenas e dialogos profissionais. |
| **Instructions** | Copiar conteudo de `chatgpt/scribe-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Upload: `chapter-template.md` |
| **Capabilities** | Web Browsing: OFF, Code Interpreter: OFF, DALL-E: OFF |

**Conversation starters:**
- `*draft-chapter` — Quero escrever um capitulo
- `*write-scene` — Preciso escrever uma cena especifica
- `*dialogue` — Quero criar um dialogo entre personagens
- Preciso reescrever um trecho que nao esta funcionando

3. Publish → Only me (privado) ou Anyone with a link

---

### Editor

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Editor - Book Revision Agent |
| **Description** | Editor profissional para revisao de manuscritos. Copy editing, revisao estrutural e verificacao de consistencia. |
| **Instructions** | Copiar conteudo de `chatgpt/editor-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Nenhum necessario |
| **Capabilities** | Web Browsing: OFF, Code Interpreter: OFF, DALL-E: OFF |

**Conversation starters:**
- `*copy-edit` — Preciso revisar gramatica e estilo do meu texto
- `*structural-review` — Quero uma revisao estrutural do manuscrito
- `*consistency-check` — Preciso verificar consistencia interna
- Me ajuda a melhorar a qualidade do meu texto

3. Publish → Only me (privado) ou Anyone with a link

---

### Critic

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Critic - Book Analysis Agent |
| **Description** | Critico literario e simulador de beta reader. Analise critica completa e feedback construtivo para manuscritos. |
| **Instructions** | Copiar conteudo de `chatgpt/critic-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Nenhum necessario |
| **Capabilities** | Web Browsing: OFF, Code Interpreter: OFF, DALL-E: OFF |

**Conversation starters:**
- `*analysis` — Quero uma analise critica completa do meu manuscrito
- `*beta-read` — Simule um beta reader para meu livro
- Me da um feedback honesto sobre o meu texto
- Qual o potencial de mercado do meu livro?

3. Publish → Only me (privado) ou Anyone with a link

---

### Formatter

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Formatter - Book Production Agent |
| **Description** | Especialista em producao editorial. Formatacao Markdown, estrutura EPUB 3, layout profissional e prompts para capas. |
| **Instructions** | Copiar conteudo de `chatgpt/formatter-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Nenhum necessario |
| **Capabilities** | Web Browsing: OFF, Code Interpreter: OFF, DALL-E: ON |

**Conversation starters:**
- `*markdown` — Quero formatar meu manuscrito em Markdown profissional
- `*epub` — Preciso gerar estrutura EPUB 3 do meu livro
- `*cover-prompt` — Quero um prompt para gerar a capa do meu livro
- Me ajuda a preparar o manuscrito para publicacao

3. Publish → Only me (privado) ou Anyone with a link

---

### Publisher

1. Acessar `chatgpt.com` → Explore GPTs → Create
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Name** | Publisher - Book Distribution Agent |
| **Description** | Especialista em distribuicao editorial e marketing. Metadados, sinopses, material de lancamento e posicionamento de mercado. |
| **Instructions** | Copiar conteudo de `chatgpt/publisher-gpt-instructions.md` |
| **Conversation starters** | Ver abaixo |
| **Knowledge** | Upload: `book-metadata.md` |
| **Capabilities** | Web Browsing: ON, Code Interpreter: OFF, DALL-E: OFF |

**Conversation starters:**
- `*metadata` — Preciso gerar metadados editoriais completos
- `*sinopse` — Quero escrever a sinopse do meu livro
- `*marketing` — Preciso de material de marketing para o lancamento
- Me ajuda a posicionar meu livro no mercado

3. Publish → Only me (privado) ou Anyone with a link

---

## Tess.ai

### Muse

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Muse - Ideacao de Livros |
| **Descricao** | Agente de ideacao criativa para livros. Brainstorming, personagens e premissas. |
| **Instrucoes** | Copiar conteudo de `tess-ai/muse-tess-instructions.md` |
| **Modelo** | GPT-4o (recomendado para criatividade) |
| **Temperatura** | 0.8 (alta criatividade) |
| **Ferramentas** | Web Search: ON (para tendencias) |

3. Salvar → Testar com `*brainstorm`

---

### Researcher

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Researcher - Pesquisa e Worldbuilding |
| **Descricao** | Pesquisa tematica, worldbuilding e fact-checking para livros. |
| **Instrucoes** | Copiar conteudo de `tess-ai/researcher-tess-instructions.md` |
| **Modelo** | GPT-4o (recomendado para pesquisa) |
| **Temperatura** | 0.5 (precisao factual) |
| **Ferramentas** | Web Search: ON (para pesquisa) |

3. Salvar → Testar com `*investigate`

---

### Architect

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Architect - Estrutura de Livros |
| **Descricao** | Estruturacao de livros. Outlines, arcos narrativos, capitulos e timelines. |
| **Instrucoes** | Copiar conteudo de `tess-ai/architect-tess-instructions.md` |
| **Modelo** | Claude 3.5 Sonnet (recomendado para analise estrutural) |
| **Temperatura** | 0.6 (equilibrio analitico/criativo) |
| **Ferramentas** | Nenhuma necessaria |

3. Salvar → Testar com `*outline`

---

### Scribe

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Scribe - Escritor de Livros |
| **Descricao** | Escritor AI para prosa profissional em qualquer genero. |
| **Instrucoes** | Copiar conteudo de `tess-ai/scribe-tess-instructions.md` |
| **Modelo** | Claude 3.5 Sonnet (recomendado para prosa longa) ou GPT-4o |
| **Temperatura** | 0.7 (equilibrio criatividade/coerencia) |
| **Ferramentas** | Nenhuma necessaria |

3. Salvar → Testar com `*draft-chapter`

---

### Editor

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Editor - Revisao de Manuscritos |
| **Descricao** | Editor profissional. Copy editing, revisao estrutural e consistencia. |
| **Instrucoes** | Copiar conteudo de `tess-ai/editor-tess-instructions.md` |
| **Modelo** | Claude 3.5 Sonnet (recomendado para revisao precisa) |
| **Temperatura** | 0.4 (alta precisao) |
| **Ferramentas** | Nenhuma necessaria |

3. Salvar → Testar com `*copy-edit`

---

### Critic

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Critic - Analise Critica |
| **Descricao** | Critico literario e beta reader. Feedback honesto e construtivo. |
| **Instrucoes** | Copiar conteudo de `tess-ai/critic-tess-instructions.md` |
| **Modelo** | GPT-4o (recomendado para avaliacao critica) |
| **Temperatura** | 0.5 (equilibrio analitico) |
| **Ferramentas** | Nenhuma necessaria |

3. Salvar → Testar com `*analysis`

---

### Formatter

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Formatter - Producao Editorial |
| **Descricao** | Formatacao profissional. Markdown, EPUB 3, layout e prompts de capa. |
| **Instrucoes** | Copiar conteudo de `tess-ai/formatter-tess-instructions.md` |
| **Modelo** | Claude 3.5 Sonnet (recomendado para precisao tecnica) |
| **Temperatura** | 0.3 (alta precisao tecnica) |
| **Ferramentas** | Nenhuma necessaria |

3. Salvar → Testar com `*markdown`

---

### Publisher

1. Acessar `tess.ai` → Meus Agentes → Criar Agente
2. Preencher:

| Campo | Valor |
|-------|-------|
| **Nome** | Publisher - Distribuicao Editorial |
| **Descricao** | Metadados, sinopses, marketing de lancamento e posicionamento. |
| **Instrucoes** | Copiar conteudo de `tess-ai/publisher-tess-instructions.md` |
| **Modelo** | GPT-4o (recomendado para marketing e SEO) |
| **Temperatura** | 0.6 (equilibrio estrategico/criativo) |
| **Ferramentas** | Web Search: ON (para pesquisa de mercado) |

3. Salvar → Testar com `*metadata`

---

## Dicas

### ChatGPT vs Tess.ai

| Aspecto | ChatGPT GPT | Tess.ai |
|---------|-------------|---------|
| **Knowledge upload** | Sim (PDFs, MD) | Nao |
| **Limite de instrucoes** | ~8.000 palavras | ~4.000 palavras |
| **Modelo** | GPT-4o (fixo) | Escolha (GPT-4o, Claude, etc.) |
| **Temperatura** | Fixa pelo modelo | Configuravel |
| **Compartilhamento** | Link publico ou privado | Workspace |
| **Preco** | ChatGPT Plus ($20/mes) | Plano Tess.ai |

### Quando usar qual

- **Muse no ChatGPT**: Melhor porque pode fazer upload dos templates (character-sheet, worldbuilding-bible) como Knowledge
- **Scribe no Tess.ai com Claude**: Melhor para prosa longa porque Claude tem contexto maior e prosa mais natural em portugues
- **Editor no Tess.ai com Claude**: Revisao mais precisa com temperatura baixa (0.4)
- **Researcher no ChatGPT**: Melhor porque Web Browsing permite pesquisa em tempo real + Knowledge upload
- **Publisher no ChatGPT**: Web Browsing para pesquisa de mercado + Knowledge com template de metadados
- **Formatter no ChatGPT**: DALL-E pode gerar previews de capa diretamente
- **Ambos**: Todos funcionam bem em qualquer plataforma, a diferenca e marginal

### Pipeline recomendado (ordem de uso)

1. **Muse** → Ideacao, brainstorming, premissa
2. **Researcher** → Pesquisa, worldbuilding, referencias
3. **Architect** → Outline, estrutura, timeline
4. **Scribe** → Escrita de capitulos, cenas, dialogos
5. **Editor** → Revisao, copy editing, consistencia
6. **Critic** → Analise critica, beta reading, feedback
7. **Formatter** → Formatacao, EPUB, capa
8. **Publisher** → Metadados, sinopse, marketing, lancamento
