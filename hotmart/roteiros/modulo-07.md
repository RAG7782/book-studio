# Módulo 07 — Formatter: Produção Editorial e Formatação

**Duração:** ~10 minutos
**Objetivo:** Dominar o Formatter para transformar seu manuscrito revisado em um produto editorial profissional — com formatação limpa, estrutura EPUB e capa planejada.

---

## Abertura (1 min)

**Hook:**
"Você já leu um e-book com formatação quebrada, margens desalinhadas ou sumário que não funciona? Isso afasta leitores na mesma hora. A diferença entre um manuscrito amador e um livro profissional não está só no texto — está na produção editorial."

**Objetivo do módulo:**
Neste módulo você vai aprender a usar o Formatter, o primeiro agente da fase **Load** (publicação). Ele transforma seu manuscrito revisado em formatos prontos para distribuição: Markdown estruturado, EPUB validado e prompt detalhado para criar a capa do seu livro. Ao final, você terá um produto editorial que compete de igual para igual com livros de editoras tradicionais.

---

## Pontos-Chave (6 min)

### 1. O Papel do Formatter no Pipeline ETL (1 min)

O Formatter é o penúltimo agente do pipeline. Ele fecha a fase **Transform** e inicia a fase **Load**.

- **Input:** Manuscrito final revisado pelo Editor + aprovado pelo Critic
- **Output:** Livro formatado em múltiplos formatos (Markdown, EPUB, prompt de capa)

Pense no Formatter como o designer gráfico de uma editora: ele cuida da tipografia, espaçamento, estrutura e apresentação visual. Sem formatação profissional, até o melhor texto perde credibilidade.

### 2. Comando `*markdown` — Manuscrito Estruturado (1:30 min)

O comando base para limpar e estruturar seu manuscrito.

```
@formatter *markdown

Manuscrito: [colar texto do Editor]
Gênero: Fantasia
Elementos especiais: Epígrafes no início de cada capítulo, citações em itálico
```

**O que ele gera:**
- Markdown estruturado e consistente
- Headers hierárquicos corretos (H1 para título, H2 para capítulos, H3 para seções)
- Formatação de diálogos (travessão em pt-BR)
- Espaçamento entre parágrafos padronizado
- Itálico/negrito aplicado corretamente
- Front matter (página de título, copyright, dedicatória)
- Back matter (sobre o autor, outros livros)

**Dicas de formatação:**
- Use linha em branco entre parágrafos (facilita conversão para EPUB)
- Travessão (—) para diálogos, não hífen (-)
- Itálico para ênfase e pensamentos internos
- Nunca use espaços para alinhar texto (use Markdown nativo)

### 3. Comando `*epub` — Estrutura EPUB Validada (2 min)

Gera a estrutura completa de um EPUB 3 (padrão internacional para e-books).

```
@formatter *epub

Markdown: [colar markdown estruturado]
Metadados básicos:
- Título: O Último Guardião das Sombras
- Autor: Ana Silva
- Idioma: pt-BR
```

**O que ele gera:**
- Estrutura de pastas EPUB (OEBPS, META-INF, mimetype)
- Arquivo `content.opf` com metadados completos
- Arquivo `toc.ncx` (sumário navegável)
- Arquivo `nav.xhtml` (sumário HTML5)
- Capítulos individuais em XHTML
- Stylesheet CSS customizado por gênero
- Validação contra padrões IDPF/W3C

**Como testar:**
- Abra o EPUB no Calibre (desktop)
- Teste em e-reader real (Kindle, Kobo) ou app (Apple Books)
- Verifique sumário clicável, links internos, quebra de página

### 4. Comando `*cover-prompt` — Prompt para Capa Profissional (1:30 min)

Gera um prompt detalhado para criar a capa do livro com IA (DALL-E, Midjourney, Stable Diffusion) ou briefar um designer.

```
@formatter *cover-prompt

Título: O Último Guardião das Sombras
Gênero: Fantasia Brasileira / Urban Fantasy
Tom: Sombrio, místico, esperançoso
Sinopse curta: Último descendente de guardiões ancestrais precisa impedir o retorno de entidade das trevas no centro de São Paulo
Público: Jovem adulto (16-25 anos)
Referências visuais: Cidade de Ossos, Percy Jackson, folclore brasileiro
```

**O que ele gera:**
- Prompt estruturado para IA de imagem (300-500 palavras)
- Descrição de composição visual (primeiro plano, plano médio, background)
- Paleta de cores sugerida por gênero
- Tipografia recomendada para título (serif/sans-serif, peso)
- Elementos visuais obrigatórios do gênero
- Versões: thumbnail (Amazon), e-book, paperback, hardcover

**Exemplo de prompt gerado:**
> "Capa de livro de fantasia urbana brasileira. Primeiro plano: silhueta de jovem adulto segurando lança de luz dourada. Plano médio: skyline de São Paulo ao anoitecer com prédios iluminados. Background: céu roxo-escuro com sombras etéreas em formato de criaturas folclóricas. Paleta: roxo profundo, dourado, preto, azul-petróleo. Tipografia: título em serif bold dourado com efeito de brilho mágico. Estilo: realismo digital, atmosfera mística, contraste alto. Proporção 6:9 vertical."

---

## Demonstração Prática (2 min)

**Cenário:** Vamos formatar o Capítulo 1 de um romance de fantasia brasileira e gerar prompt de capa.

**Passo 1:** Formatar manuscrito com `*markdown`

```
@formatter *markdown

Manuscrito:
[Texto bruto do Editor com 2.500 palavras]

Gênero: Fantasia Brasileira
Elementos especiais: Epígrafe no início do capítulo (Mário de Andrade), flashbacks em itálico
```

**Resultado:**
- Markdown limpo e estruturado
- Front matter adicionado (título, copyright)
- Epígrafe formatada corretamente
- Flashbacks em itálico com marcadores visuais
- Espaçamento consistente entre cenas

**Passo 2:** Gerar prompt de capa com `*cover-prompt`

```
@formatter *cover-prompt

Título: O Último Guardião das Sombras
Gênero: Fantasia Brasileira / Urban Fantasy
Tom: Sombrio, místico, esperançoso
Público: Jovem adulto
```

**Resultado:**
Prompt de 400 palavras pronto para usar no Midjourney ou DALL-E, com descrição detalhada de composição, paleta de cores (roxo, dourado, preto), tipografia (serif bold) e referências visuais (Cidade de Ossos + folclore brasileiro).

---

## Encerramento (1 min)

**Recap:**
Neste módulo você aprendeu os 3 comandos principais do Formatter:
- `*markdown` para limpar e estruturar o manuscrito
- `*epub` para gerar estrutura EPUB validada
- `*cover-prompt` para criar prompt profissional de capa

**Ferramentas complementares:**
- Calibre (desktop) para testar e editar EPUBs
- EPUBCheck (validador online)
- Midjourney ou DALL-E para gerar capa a partir do prompt

**Próximo módulo:**
Agora que seu livro está formatado, é hora de preparar a distribuição. No **Módulo 08** você vai conhecer o Publisher — o agente que gera metadados, sinopse, keywords e kit de marketing completo para o lançamento. Nos vemos lá.

---

**Dica profissional:** Salve o EPUB gerado e teste em pelo menos 2 dispositivos diferentes (celular + e-reader ou tablet). Problemas de formatação aparecem em devices reais, não só no Calibre. Corrija antes de publicar.
