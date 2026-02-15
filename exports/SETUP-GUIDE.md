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
- **Ambos**: Funcionam bem em qualquer plataforma, a diferenca e marginal
