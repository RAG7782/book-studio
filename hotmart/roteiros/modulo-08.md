# Módulo 08 — Publisher: Publicação, Metadados e Marketing

**Duração:** ~10 minutos
**Objetivo:** Dominar o Publisher para preparar seu livro para o mundo — metadados otimizados, sinopse profissional e kit completo de lançamento.

---

## Abertura (1 min)

**Hook:**
"Você já escreveu um livro incrível, revisou cada linha, formatou com capricho... e vendeu 12 cópias no primeiro mês? O problema não é a qualidade do seu livro — é a falta de posicionamento. Leitores não descobrem livros por acaso. Eles descobrem por metadados, sinopse e estratégia de lançamento."

**Objetivo do módulo:**
Neste módulo você vai aprender a usar o Publisher, o último agente do pipeline Book Studio. Ele prepara tudo para distribuição e marketing: metadados editoriais (ISBN, BISAC, keywords), sinopse otimizada para vendas, e kit completo de lançamento (press release, posts, emails). Ao final, você terá tudo que precisa para publicar em Amazon KDP, Google Play Books e outras plataformas.

---

## Pontos-Chave (6 min)

### 1. O Papel do Publisher no Pipeline ETL (1 min)

O Publisher é o último agente da fase **Load** — a etapa final do pipeline.

- **Input:** Livro formatado do Formatter + conceito original da Muse
- **Output:** Kit completo de publicação (metadados, sinopse, textos de marketing)

Pense no Publisher como o departamento de marketing de uma editora: ele posiciona seu livro no mercado, escreve os textos que vendem, e prepara o lançamento. Sem Publisher, seu livro é invisível nas lojas.

### 2. Comando `*metadata` — Metadados Editoriais Completos (2 min)

Gera todos os metadados necessários para publicar em plataformas digitais.

```
@publisher *metadata

Livro: O Último Guardião das Sombras
Gênero: Fantasia Brasileira / Urban Fantasy
Público: Jovem adulto (16-25 anos)
Sinopse resumida: Último descendente de guardiões precisa impedir retorno de entidade das trevas em São Paulo
```

**O que ele gera:**
- **Categorias BISAC** (3 categorias): FIC009120 (Fantasy / Urban), FIC043000 (Coming of Age), FIC061000 (Magical Realism)
- **Keywords SEO** (7 keywords para Amazon): fantasia brasileira, urban fantasy, São Paulo, guardiões, folclore, jovem adulto, magia
- **Faixa etária**: 16+ (violência moderada, linguagem)
- **Idioma e edição**: pt-BR, 1ª edição
- **Comparáveis**: Cidade de Ossos + Percy Jackson + O Sétimo Guardião
- **Posicionamento de mercado**: "Para fãs de Percy Jackson que querem ver o folclore brasileiro em ação"

**Por que metadados importam:**
- Amazon usa BISAC + keywords para recomendar seu livro
- Categorias certas = aparecer em listas relevantes
- Keywords SEO = ser encontrado em buscas orgânicas
- Comparáveis = conectar com leitores de autores estabelecidos

### 3. Comando `*sinopse` — Sinopse Profissional + Quarta-Capa (2 min)

Escreve a sinopse que vende o livro (não resume — VENDE).

```
@publisher *sinopse

Livro: O Último Guardião das Sombras
Gênero: Fantasia Brasileira
Metadados: [colar metadados gerados]
Tom da sinopse: Misterioso, urgente, com gancho forte
```

**O que ele gera:**

**1. Tagline** (1 linha para capa):
> "Quando as sombras acordam, só um guardião permanece."

**2. Sinopse curta** (50 palavras para Amazon):
> Lucas é o último descendente dos Guardiões das Sombras. Quando entidades ancestrais retornam ao centro de São Paulo, ele precisa dominar poderes que nunca pediu e enfrentar um inimigo que sua família fracassou em derrotar há 300 anos.

**3. Quarta-capa** (150-200 palavras):
Texto completo com gancho emocional, stakes altos, e call-to-action implícito. Estrutura:
- Gancho (primeiro parágrafo chama atenção)
- Contexto (apresenta protagonista e problema)
- Conflito (stakes ficam claros)
- Mistério (deixa perguntas sem resposta)

**4. Descrição Amazon** (até 4000 caracteres):
Versão expandida com formatação HTML, bullets de destaque, e seção "Leitores que amaram X vão devorar este livro".

### 4. Comando `*marketing` — Kit de Lançamento Completo (1 min)

Gera textos de marketing prontos para usar.

```
@publisher *marketing

Livro: O Último Guardião das Sombras
Data de lançamento: 15 de março de 2026
Metadados: [colar metadados]
Sinopse: [colar sinopse]
```

**O que ele gera:**

**1. Press Release** (300 palavras):
- Título chamativo
- Lead com informações principais
- Citação fictícia do autor
- Informações de disponibilidade

**2. Posts para redes sociais** (5 posts prontos):
- Instagram: carrossel de 3 slides
- Twitter/X: thread de 4 tweets
- Facebook: post longo com imagem
- TikTok: script de vídeo de 30s
- LinkedIn: post profissional (para autores de não-ficção)

**3. Email de lançamento** (template completo):
- Subject line otimizado
- Corpo do email com CTA claro
- PS com oferta de lançamento

**4. Bio do autor otimizada** (2 versões):
- Bio curta (50 palavras) para Amazon
- Bio longa (150 palavras) para site/imprensa

---

## Demonstração Prática (2 min)

**Cenário:** Vamos gerar metadados + sinopse para o romance de fantasia brasileira do módulo anterior.

**Passo 1:** Gerar metadados com `*metadata`

```
@publisher *metadata

Livro: O Último Guardião das Sombras
Gênero: Fantasia Brasileira / Urban Fantasy
Público: Jovem adulto (16-25)
```

**Resultado:**
- BISAC: FIC009120, FIC043000, FIC061000
- Keywords: fantasia brasileira, urban fantasy, São Paulo, guardiões, folclore, jovem adulto, magia
- Comparáveis: Percy Jackson + Cidade de Ossos + O Sétimo Guardião
- Posicionamento: "Percy Jackson encontra o folclore brasileiro"

**Passo 2:** Gerar sinopse com `*sinopse`

```
@publisher *sinopse

Livro: O Último Guardião das Sombras
Metadados: [colar metadados acima]
Tom: Misterioso, urgente
```

**Resultado:**
- Tagline: "Quando as sombras acordam, só um guardião permanece."
- Sinopse curta (50 palavras) pronta para Amazon
- Quarta-capa (180 palavras) com gancho emocional
- Descrição Amazon (2.800 caracteres) com formatação HTML

---

## Encerramento (1 min)

**Recap:**
Neste módulo você aprendeu os 3 comandos principais do Publisher:
- `*metadata` para gerar categorias, keywords e posicionamento
- `*sinopse` para escrever textos que vendem (não só resumem)
- `*marketing` para criar kit completo de lançamento

**Templates de apoio:**
- `book-metadata.md` — Template para organizar metadados
- `publication.md` — Checklist final antes de publicar

**Plataformas recomendadas:**
- **Amazon KDP** (obrigatória, maior mercado)
- **Google Play Books** (segunda maior, fácil)
- **Kobo** (mercado internacional)
- **Clube de Autores** (impressão sob demanda no Brasil)

**Próximo módulo:**
No **Módulo 09** você vai ver o pipeline completo em ação — do Muse ao Publisher, criando um livro do zero ao vivo. É o módulo culminante do curso. Nos vemos lá.

---

**Dica profissional:** Teste suas keywords na Amazon antes de publicar. Pesquise cada keyword e veja quantos resultados aparecem. Keywords com 500-5.000 resultados são ideais (competição moderada). Abaixo de 100 = ninguém busca. Acima de 50.000 = impossível ranquear.
