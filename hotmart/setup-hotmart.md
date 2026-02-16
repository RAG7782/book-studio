# Setup Hotmart — Book Studio

Guia passo a passo para configurar o produto na Hotmart.

---

## Dados do Produto

| Campo | Valor |
|-------|-------|
| **Nome** | Book Studio — Escreva Livros com IA |
| **Tipo** | Curso online + materiais complementares |
| **Formato** | Area de membros Hotmart (Hotmart Club) ou entrega via link |
| **Categoria** | Educacao > Escrita Criativa / Producao de Conteudo |
| **Subcategoria** | Escrita e Publicacao |
| **Preco** | R$ 97,00 |
| **Moeda** | BRL |
| **Garantia** | 7 dias (padrao Hotmart) |
| **Comissao afiliados** | 40% (R$ 38,80) |

---

## 1. Criar Produto na Hotmart

### Passo 1: Acessar painel de produtos
1. Login em https://app.hotmart.com
2. Menu lateral > Produtos > Novo Produto
3. Tipo: "Curso Online"

### Passo 2: Informacoes basicas
```
Nome do produto: Book Studio — Escreva Livros com IA
Categoria: Educacao
Subcategoria: Escrita e Publicacao
Idioma: Portugues
Formato: Digital
```

### Passo 3: Descricao do produto
```
Titulo curto (80 caracteres):
Escreva seu livro com ajuda de 8 agentes de IA treinados para cada etapa do processo

Descricao completa (copiar de hotmart/pagina-vendas.md):
[Colar o conteudo da pagina de vendas formatado para o editor Hotmart]
```

### Passo 4: Tags e palavras-chave
```
Tags: escrita, livros, IA, inteligencia artificial, ChatGPT, autor, publicacao, curso de escrita, como escrever um livro, worldbuilding, narrativa, ficcao, nao-ficcao, self-publishing, Amazon KDP

Palavras-chave (SEO): escrever livro com IA, ChatGPT para autores, agentes IA escrita, curso de escrita criativa, publicar livro Amazon, worldbuilding, outline de livro
```

### Passo 5: Imagem de capa
```
Dimensoes: 1200x628px (formato recomendado Hotmart)
Arquivo: hotmart/assets/capa-produto.png
Formato: PNG ou JPG
Peso max: 2MB
```

---

## 2. Configurar Area de Membros

### Opcao A: Hotmart Club (recomendado)
1. Produtos > Configuracoes > Area de Membros
2. Escolher "Hotmart Club"
3. Criar modulos e aulas (estrutura abaixo)

### Opcao B: Entrega via link
1. Produtos > Configuracoes > Entrega
2. Escolher "Link externo"
3. Inserir link para Google Drive, Notion ou site proprio

---

## 3. Estruturar Modulos

### Modulo 0: Boas-vindas e Setup (15 min)
**Aulas:**
- [ ] Boas-vindas ao Book Studio
- [ ] Como usar este curso
- [ ] Configurar agentes no ChatGPT (passo a passo)
- [ ] Configurar agentes no Tess.ai (passo a passo)

**Materiais para download:**
- `exports/SETUP-GUIDE.md` (PDF)

---

### Modulo 1: Ideacao e Conceito (45 min)
**Aulas:**
- [ ] O processo criativo com IA
- [ ] Usando o agente Muse para brainstorming
- [ ] Validar ideias de livro
- [ ] Preencher a proposta editorial

**Materiais para download:**
- `exports/chatgpt/muse-gpt-instructions.md` (PDF)
- `exports/tess-ai/muse-tess-instructions.md` (PDF)
- `templates/book-proposal.md` (PDF)
- `data/genres.yaml` (PDF)

---

### Modulo 2: Pesquisa e Worldbuilding (60 min)
**Aulas:**
- [ ] Pesquisa profunda com IA
- [ ] Usando o agente Researcher
- [ ] Criar mundos ficcionais
- [ ] Desenvolver personagens complexos

**Materiais para download:**
- `exports/chatgpt/researcher-gpt-instructions.md` (PDF)
- `exports/tess-ai/researcher-tess-instructions.md` (PDF)
- `templates/character-sheet.md` (PDF)
- `templates/worldbuilding-bible.md` (PDF)

---

### Modulo 3: Arquitetura do Livro (60 min)
**Aulas:**
- [ ] Estruturas narrativas que funcionam
- [ ] Usando o agente Architect
- [ ] Criar outline completo
- [ ] Validar estrutura antes de escrever

**Materiais para download:**
- `exports/chatgpt/architect-gpt-instructions.md` (PDF)
- `exports/tess-ai/architect-tess-instructions.md` (PDF)
- `checklists/pre-writing.md` (PDF)

---

### Modulo 4: Escrita dos Capitulos (75 min)
**Aulas:**
- [ ] Escrever capitulos com IA
- [ ] Usando o agente Scribe
- [ ] Manter consistencia narrativa
- [ ] Desenvolver cenas impactantes

**Materiais para download:**
- `exports/chatgpt/scribe-gpt-instructions.md` (PDF)
- `exports/tess-ai/scribe-tess-instructions.md` (PDF)
- `templates/chapter-template.md` (PDF)

---

### Modulo 5: Revisao Editorial (60 min)
**Aulas:**
- [ ] As 4 passadas de revisao
- [ ] Usando o agente Editor
- [ ] Melhorar estilo e ritmo
- [ ] Cortar excessos

**Materiais para download:**
- `exports/chatgpt/editor-gpt-instructions.md` (PDF)
- `exports/tess-ai/editor-tess-instructions.md` (PDF)
- `checklists/revision.md` (PDF)

---

### Modulo 6: Analise Critica (45 min)
**Aulas:**
- [ ] Feedback imparcial com IA
- [ ] Usando o agente Critic
- [ ] Identificar furos de roteiro
- [ ] Validar arcos de personagens

**Materiais para download:**
- `exports/chatgpt/critic-gpt-instructions.md` (PDF)
- `exports/tess-ai/critic-tess-instructions.md` (PDF)

---

### Modulo 7: Formatacao e Producao (60 min)
**Aulas:**
- [ ] Formatar para ebook (EPUB/MOBI)
- [ ] Formatar para impressao (PDF)
- [ ] Usando o agente Formatter
- [ ] Ferramentas de producao

**Materiais para download:**
- `exports/chatgpt/formatter-gpt-instructions.md` (PDF)
- `exports/tess-ai/formatter-tess-instructions.md` (PDF)

---

### Modulo 8: Publicacao e Marketing (75 min)
**Aulas:**
- [ ] Publicar na Amazon KDP
- [ ] Usando o agente Publisher
- [ ] Estrategia de lancamento
- [ ] Metadados que vendem

**Materiais para download:**
- `exports/chatgpt/publisher-gpt-instructions.md` (PDF)
- `exports/tess-ai/publisher-tess-instructions.md` (PDF)
- `templates/book-metadata.md` (PDF)
- `checklists/publication.md` (PDF)

---

### Modulo 9: Configuracao no Tess.ai (30 min)
**Aulas:**
- [ ] Diferenca ChatGPT vs Tess.ai
- [ ] Criar agentes no Tess.ai
- [ ] Workflows no Tess.ai
- [ ] Quando usar cada plataforma

**Materiais para download:**
- Todos os 8 arquivos `exports/tess-ai/*.md` (ZIP)

---

### Modulo 10: Projeto Final (90 min)
**Aulas:**
- [ ] Pipeline completo passo a passo
- [ ] Acompanhamento de aluno real
- [ ] Dicas finais
- [ ] Proximos passos

**Materiais para download:**
- `workflows/full-pipeline.md` (PDF)

---

### Modulo Bonus: Workflows Especializados (45 min)
**Aulas:**
- [ ] Workflow para ficcao
- [ ] Workflow para nao-ficcao
- [ ] Rascunho rapido (30-60 dias)

**Materiais para download:**
- `workflows/fiction-workflow.md` (PDF)
- `workflows/nonfiction-workflow.md` (PDF)
- `workflows/quick-draft.md` (PDF)

---

**Total:** 11 modulos, 42 aulas, 630 minutos (10h30min), 30 arquivos para download

---

## 4. Upload dos Materiais do Pack

### Formato de entrega

**Opcao A: Download direto no Hotmart Club**
```
Para cada modulo:
1. Converter arquivos .md para PDF (usando Pandoc ou Typora)
2. Hotmart Club > Modulo > Anexos > Upload PDF
3. Nomear: "M01-material-muse-chatgpt.pdf"
```

**Opcao B: Link para Google Drive**
```
1. Criar pasta no Google Drive: "Book Studio - Pack de Materiais"
2. Organizar subpastas: chatgpt/, tess-ai/, templates/, checklists/, workflows/, data/
3. Upload dos 30 arquivos (converter para PDF)
4. Compartilhar link com "Qualquer pessoa com o link pode visualizar"
5. Adicionar link na aula correspondente: "Baixe os materiais aqui: [link]"
```

**Opcao C: ZIP completo**
```
1. Criar ZIP com estrutura de pastas preservada
2. Upload no Hotmart Club como "Material Complementar"
3. Aluno baixa tudo de uma vez (recomendado para quem quer offline)
```

---

## 5. Configurar Pagina de Vendas

### Passo 1: Acessar editor de pagina
1. Produtos > Pagina de Vendas > Editar
2. Escolher template "Curso Online" (template 3 ou 5)

### Passo 2: Copiar conteudo
```
Abrir: hotmart/pagina-vendas.md
Copiar secoes:
- Headline
- Subheadline
- Bullets de beneficios (8 agentes)
- Estrutura do curso (11 modulos)
- Depoimentos (se houver beta testers)
- FAQ
- Garantia de 7 dias
- CTA final
```

### Passo 3: Elementos visuais
```
- Video de vendas (2-3 min): gravar demonstracao do agente Muse
- Screenshot dos agentes configurados no ChatGPT
- Mockup do pack de materiais (30 arquivos)
- Badge "Satisfacao Garantida 7 Dias"
```

### Passo 4: Configurar checkout
```
Produtos > Checkout > Configurar
- Preco: R$ 97,00
- Parcelas: ate 12x de R$ 9,37 (com juros Hotmart)
- Cupom de desconto: BOOKSTUDIO (10% off nos primeiros 7 dias)
- Bump offer: adicionar "Consultoria 1:1 de 30min" por R$ 147
```

---

## 6. Configurar Checkout

### Passo 1: Preco e parcelas
```
Produtos > Preco > Configurar
- Preco cheio: R$ 97,00
- Preco promocional: R$ 87,30 (com cupom BOOKSTUDIO)
- Parcelamento: ate 12x
- Aceitar PIX: sim (desconto de 5% automatico)
- Aceitar boleto: sim
- Aceitar cartao internacional: sim
```

### Passo 2: Cupom de lancamento
```
Produtos > Cupons > Criar Cupom
Nome: BOOKSTUDIO
Desconto: 10% (R$ 9,70)
Validade: 7 dias apos lancamento
Limite de uso: ilimitado
Tipo: publico
```

### Passo 3: Bump offer (opcional)
```
Produtos > Checkout > Bump Offer
Nome: Consultoria 1:1 — Planejamento do Livro
Preco: R$ 147,00
Descricao: "30 minutos de consultoria personalizada para planejar seu livro comigo"
```

---

## 7. Configurar Programa de Afiliados

### Passo 1: Ativar programa
```
Produtos > Afiliados > Configurar
Status: Ativo
Aprovacao: Automatica (ou Manual se preferir filtrar)
```

### Passo 2: Comissoes
```
Comissao padrao: 40% (R$ 38,80)
Comissao por recorrencia: N/A (produto unico)
Cookie: 30 dias
```

### Passo 3: Regras para afiliados
```
Produtos > Afiliados > Regras
- Proibido spam
- Proibido anuncios enganosos
- Proibido usar nome "ChatGPT" ou "OpenAI" em anuncios pagos (violacao de marca)
- Permitido criar conteudo organico (YouTube, blog, Instagram)
- Material de divulgacao disponivel: banners, scripts, posts prontos
```

### Passo 4: Material para afiliados
```
Produtos > Afiliados > Material de Divulgacao
Upload:
- 5 banners (300x250, 728x90, 160x600, 300x600, 970x250)
- 10 posts prontos para Instagram/Facebook
- 3 scripts para YouTube (30seg, 1min, 2min)
- 5 emails de promocao (sequencia pronta)
- Swipe copy da pagina de vendas
```

---

## 8. Configurar Emails Automaticos

### Email 1: Boas-vindas (imediato apos compra)
```
Assunto: Bem-vindo ao Book Studio! Seu acesso esta liberado
Corpo:
Ola [NOME],

Parabens! Voce acaba de dar o primeiro passo para escrever seu livro com ajuda de IA.

Seu acesso ao curso ja esta liberado. Clique aqui para comecar:
[LINK PARA AREA DE MEMBROS]

Recomendo comecar pelo Modulo 0 (Setup) para configurar os 8 agentes de IA.

Qualquer duvida, responda este email.

Vamos escrever juntos!
Renato Aparecido Gomes
```

### Email 2: Lembrete Day 1
```
Assunto: Ja configurou seus agentes de IA?
Corpo:
Ola [NOME],

Vi que voce se inscreveu ontem, mas ainda nao acessou o curso.

O Modulo 0 tem um passo a passo simples para configurar os 8 agentes. Leva apenas 15 minutos.

Acesse agora: [LINK]

Qualquer dificuldade, me avisa.

Abraco,
Renato
```

### Email 3: Incentivo Day 3
```
Assunto: [NOME], seu livro esta esperando por voce
Corpo:
Ola [NOME],

3 dias se passaram e voce ainda nao comecou o curso.

Sei que a vida e corrida, mas 15 minutos por dia ja fazem diferenca.

Que tal assistir ao Modulo 1 hoje? Voce vai sair com pelo menos 3 ideias de livros.

Acesse agora: [LINK]

Vamos la!
Renato
```

### Email 4: Pergunta Day 5
```
Assunto: Posso te ajudar?
Corpo:
Ola [NOME],

Notei que voce ainda nao progrediu no curso.

Tem alguma dificuldade? Alguma duvida?

Responda este email e vou te ajudar pessoalmente.

Abraco,
Renato
```

### Email 5: Ultimo lembrete Day 6 (antes da garantia expirar)
```
Assunto: Ultima chance de testar sem risco
Corpo:
Ola [NOME],

Amanha termina sua garantia de 7 dias.

Se o curso nao for pra voce, basta pedir reembolso ate amanha. Sem perguntas.

Mas antes de desistir, te convido a assistir pelo menos o Modulo 1.

Tenho certeza que voce vai se surpreender com o que a IA pode fazer.

Acesse agora: [LINK]

Abraco,
Renato
```

---

## 9. Integrar Pixel de Rastreamento

### Facebook Pixel
```
1. Facebook Business Manager > Eventos > Pixels
2. Copiar ID do Pixel: 1234567890123456
3. Hotmart > Produtos > Integracao > Facebook Pixel
4. Colar ID
5. Ativar eventos: PageView, ViewContent, AddToCart, Purchase
```

### Google Analytics
```
1. Google Analytics > Admin > Propriedades > Criar Propriedade
2. Nome: Book Studio - Hotmart
3. Copiar ID de medicao: G-XXXXXXXXXX
4. Hotmart > Produtos > Integracao > Google Analytics
5. Colar ID
```

### Google Tag Manager (opcional)
```
1. Google Tag Manager > Criar Container
2. Nome: Book Studio - Hotmart
3. Copiar ID: GTM-XXXXXXX
4. Hotmart > Produtos > Integracao > Google Tag Manager
5. Colar ID
6. Configurar tags: Facebook Pixel, Google Ads Conversion, LinkedIn Insight
```

---

## 10. Testar Compra (Checkout Sandbox)

### Passo 1: Ativar modo sandbox
```
Hotmart > Produtos > Configuracoes > Modo Teste
Ativar: Sim
```

### Passo 2: Fazer compra teste
```
1. Abrir pagina de vendas em aba anonima
2. Clicar em "Comprar Agora"
3. Preencher dados falsos (CPF: 000.000.000-00)
4. Usar cartao de teste: 4111 1111 1111 1111
5. CVV: 123
6. Validade: qualquer data futura
7. Finalizar compra
```

### Passo 3: Validar fluxo
```
- [ ] Pagina de obrigado apareceu
- [ ] Email de boas-vindas foi enviado
- [ ] Acesso a area de membros foi liberado
- [ ] Todos os modulos estao visiveis
- [ ] Materiais para download estao disponiveis
- [ ] Pixels dispararam (checar no Facebook Pixel Helper)
```

### Passo 4: Desativar modo sandbox
```
Hotmart > Produtos > Configuracoes > Modo Teste
Ativar: Nao
```

---

## Checklist Pre-Lancamento

### Conteudo
- [ ] Videos gravados e editados (42 aulas, ~630 min)
- [ ] Pack de materiais organizado (30 arquivos PDF)
- [ ] Pagina de vendas revisada (copy + design)
- [ ] Thumbnail do curso criado (1200x628px)
- [ ] Video de vendas gravado e editado (2-3 min)

### Hotmart
- [ ] Produto criado na Hotmart
- [ ] Area de membros configurada (11 modulos, 42 aulas)
- [ ] Checkout testado (sandbox)
- [ ] Emails automaticos configurados (5 emails)
- [ ] Programa de afiliados ativo (40% comissao)
- [ ] Pixel de rastreamento instalado (Facebook + Google)
- [ ] Compra teste realizada com sucesso
- [ ] Modo sandbox desativado

### Marketing
- [ ] Sequencia de lancamento agendada (5 emails)
- [ ] Posts de redes sociais programados (10 posts)
- [ ] Stories do Instagram gravados (7 dias de aquecimento)
- [ ] Grupo exclusivo no Telegram criado
- [ ] Material para afiliados disponibilizado (banners, scripts, emails)

### Legal
- [ ] Termos de uso revisados
- [ ] Politica de privacidade atualizada
- [ ] Aviso de garantia de 7 dias na pagina de vendas
- [ ] Disclaimer sobre IA ("IA e ferramenta, nao substitui o autor")

---

## Configuracoes Recomendadas

### Tags (Hotmart)
```
Tags principais: escrita, livros, IA, inteligencia artificial, ChatGPT, autor, publicacao

Tags secundarias: curso de escrita, como escrever um livro, worldbuilding, narrativa, ficcao, nao-ficcao, self-publishing, Amazon KDP, Tess.ai, agentes de IA, escrita criativa, outline, revisao editorial, formatacao ebook
```

### Idioma
```
Idioma: Portugues (Brasil)
Legendas: Nao aplicavel (curso em portugues)
```

### Parcelas
```
Opcoes recomendadas:
- A vista: R$ 97,00 (PIX com 5% desconto = R$ 92,15)
- 2x de R$ 51,37 (sem juros)
- 3x de R$ 34,80 (sem juros)
- 6x de R$ 18,41 (com juros)
- 12x de R$ 9,37 (com juros)
```

### Cupom de lancamento
```
Nome: BOOKSTUDIO
Desconto: 10% (R$ 9,70)
Preco com cupom: R$ 87,30
Validade: 7 dias apos lancamento (ou primeiras 100 vendas)
Limite de uso: ilimitado (ou 100 usos)
Tipo: publico (divulgar nas redes sociais)
```

### Estrategia de lancamento
```
Dia -7 a -1: Aquecimento (stories, posts organicos, email list)
Dia 0: Lancamento (pagina no ar, cupom ativo, sequencia de emails)
Dia 1-3: Intensificar (depoimentos, FAQ, live no Instagram)
Dia 4-6: Ultima chance (lembrar cupom, scarcity, garantia)
Dia 7: Encerrar cupom (ou prorrogar se vendas baixas)
```

---

## Proximos Passos Apos Lancamento

### Semana 1
- [ ] Monitorar taxa de conversao (meta: 2-5%)
- [ ] Responder duvidas no suporte (meta: SLA 24h)
- [ ] Coletar feedback dos primeiros alunos
- [ ] Ajustar copy da pagina de vendas se necessario

### Semana 2-4
- [ ] Adicionar depoimentos reais de alunos
- [ ] Criar casos de sucesso (alunos que terminaram livros)
- [ ] Gravar aulas extras (modulos bonus)
- [ ] Recrutar afiliados ativos (meta: 10-20 afiliados)

### Mes 2-3
- [ ] Lancar versao 2.0 com melhorias
- [ ] Adicionar certificado de conclusao
- [ ] Criar comunidade ativa (grupo Telegram/Discord)
- [ ] Organizar sessoes de Q&A ao vivo (1x por mes)

---

## Suporte ao Aluno

### Canais de suporte
```
1. Email: suporte@bookstudio.com.br (SLA 24h)
2. Grupo Telegram: t.me/bookstudio (suporte peer-to-peer)
3. FAQ atualizado: hotmart.com/bookstudio/faq
4. Sessoes Q&A ao vivo: 1x por mes (agendar no calendario)
```

### Metricas de sucesso
```
- Taxa de conclusao: meta 30%+
- NPS (Net Promoter Score): meta 50+
- Taxa de reembolso: meta <5%
- Avaliacao media Hotmart: meta 4.5+ estrelas
```

---

**Desenvolvido por:** Renato Aparecido Gomes
**Versao:** 1.0 (2026-02-16)
**Contato:** renato@bookstudio.com.br
