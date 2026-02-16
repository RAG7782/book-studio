# Módulo 09 — Projeto Completo: Pipeline End-to-End

**Duração:** ~15 minutos
**Objetivo:** Ver o pipeline completo do Book Studio em ação — dos 8 agentes trabalhando em sequência ETL para criar um livro do zero ao vivo.

---

## Abertura (1 min)

**Hook:**
"Você aprendeu cada agente individualmente. Agora é hora de orquestrar todos eles juntos — exatamente como uma editora profissional trabalha. Da ideia ao livro publicável em um único fluxo."

**Objetivo do módulo:**
Este é o módulo culminante do curso. Você vai acompanhar a criação de um livro completo do zero usando TODOS os 8 agentes em sequência: Muse → Researcher → Architect → Scribe → Editor → Critic → Formatter → Publisher. Vamos criar uma novela curta (~15.000 palavras) em tempo real para você ver como os outputs de um agente alimentam o próximo. Ao final, você terá um blueprint completo para replicar em seus próprios projetos.

---

## Pontos-Chave (10 min)

### 1. Escolhendo o Projeto Certo para Demonstração (1 min)

Para este módulo vamos criar uma **novela de suspense policial** (~15.000 palavras, 5 capítulos). Por quê?

- **Escopo viável:** Dá para mostrar o pipeline completo em 15 minutos
- **Estrutura clara:** Suspense segue estrutura de 3 atos bem definida
- **Demonstra todos os agentes:** Precisa de pesquisa (cenas de crime), worldbuilding (cidade), personagens complexos

**Conceito do projeto:**
> "Detetive aposentada recebe carta anônima com detalhes de crime arquivado há 10 anos — mas o remetente é a vítima que deveria estar morta."

### 2. EXTRACT — Fase Criativa (3 min)

#### Step 1: Muse — Brainstorm e Premissa

```
@muse *brainstorm

Tema: suspense policial
Gatilho: carta de pessoa que deveria estar morta
```

**Output:**
- 5 ideias de premissa
- Escolhemos a mais forte: "Detetive aposentada descobre que caso arquivado foi forjado"

```
@muse *premise

Ideia escolhida: Detetive aposentada recebe carta de vítima morta
Gênero: Suspense Policial
```

**Output:**
- Logline: "Quando Laura Mendes recebe uma carta da vítima de um caso arquivado há 10 anos, ela precisa desenterrar a verdade antes que o verdadeiro assassino a enterre de vez."
- Premissa estruturada com protagonista, antagonista, conflito central, stakes

```
@muse *character

Personagem: Laura Mendes (protagonista)
Papel: Ex-detetive aposentada forçadamente
```

**Output:**
- Ficha completa: 52 anos, aposentada após caso mal resolvido, alcoólatra em recuperação, mora sozinha em Curitiba
- Arco de transformação: Da descrença → Obsessão → Redenção

#### Step 2: Researcher — Investigação e Worldbuilding

```
@researcher *investigate

Tópico: Procedimentos de cena de crime em casos arquivados no Brasil
Profundidade: moderada
Foco: Anos 2010-2015, Polícia Civil estadual
```

**Output:**
- Banco de pesquisa com 8 tópicos: cadeia de custódia, prazos de prescrição, acesso a arquivos, DNA forense
- Fontes verificadas (legislação + artigos técnicos)

```
@researcher *worldbuild

Mundo: Curitiba, bairro Santa Felicidade, 2025
Elementos: Delegacia desativada, arquivo morto, bar de aposentados
```

**Output:**
- Mapa de locações (5 lugares principais)
- Atmosfera: cidade chuvosa, cinza, burocrática
- Regras do mundo: Acesso a arquivos requer autorização judicial (cria obstáculo narrativo)

### 3. TRANSFORM — Fase de Produção (4 min)

#### Step 3: Architect — Estrutura

```
@architect *outline

Gênero: Suspense Policial
Estrutura: three-act
Conceito: [colar premissa da Muse]
Extensão: Novela (~15.000 palavras, 5 capítulos)
```

**Output:**
- Ato I (Cap 1-2): Laura recebe carta, visita arquivo morto, descobre inconsistências
- Plot Point I: DNA na carta não bate com corpo do caso original
- Ato II (Cap 3-4): Investigação paralela, ameaças anônimas, flashback do caso original
- Midpoint: Laura descobre que vítima está viva e escondida
- Ato III (Cap 5): Confronto com verdadeiro assassino, redenção de Laura

```
@architect *chapter-plan

Capítulo: 1
Outline: [colar outline acima]
Foco: Laura recebe a carta e decide reabrir o caso mentalmente
```

**Output:**
- 4 cenas planejadas: Carta chega / Laura relembra caso / Visita ao bar / Decisão de investigar
- Gancho final: "A letra da carta era idêntica à caligrafia da vítima no inquérito."

#### Step 4: Scribe — Escrita do Capítulo 1

```
@scribe *draft-chapter

Capítulo: 1
Plano: [colar chapter-plan acima]
Personagem POV: Laura Mendes
Tom: Sombrio, introspectivo, tenso
Meta de palavras: 3.000
```

**Output:**
- Capítulo 1 completo (3.200 palavras)
- Diálogos naturais, descrições atmosféricas, gancho forte no final
- Nota: Vamos escrever só Cap 1 na demo, mas processo se repete para todos os 5 capítulos

#### Step 5: Editor — Revisão

```
@editor *copy-edit

Capítulo: [colar draft do Scribe]
Foco: Diálogos, descrições, ritmo
```

**Output:**
- Texto revisado com 12 correções:
  - Diálogos afinados (remoção de tags desnecessárias)
  - Descrições enxugadas (cortou 200 palavras de gordura)
  - Ritmo ajustado (quebrou parágrafo longo em cena de tensão)
- Sugestão: Flashback no Cap 1 está muito longo, mover parte para Cap 2

```
@editor *consistency-check

Manuscrito: [todos os capítulos quando prontos]
```

**Output (quando houver múltiplos capítulos):**
- Relatório de inconsistências: Laura tinha 52 anos no Cap 1, 51 no Cap 3 (CORRIGIR)
- Timeline verificada: eventos em ordem cronológica correta

#### Step 6: Critic — Análise Crítica

```
@critic *analysis

Manuscrito: [colar capítulo revisado]
Foco: Abertura, gancho, caracterização de Laura
```

**Output:**
- Análise estrutural: Abertura forte, ritmo adequado, Laura bem estabelecida
- Pontos de melhoria: Carta poderia ter detalhe mais perturbador (sugestão: foto recente da vítima)
- Pacing: Cena do bar muito lenta — condensar em 2 parágrafos
- Recomendação: APROVADO com ajustes menores

### 4. LOAD — Fase de Publicação (2 min)

#### Step 7: Formatter — Formatação

```
@formatter *markdown

Manuscrito: [todos os 5 capítulos revisados]
Gênero: Suspense Policial
Elementos especiais: Flashbacks em itálico, cartas em blockquote
```

**Output:**
- Markdown estruturado e limpo
- Front matter (título, copyright)
- Back matter (sobre a autora)
- Formatação especial aplicada (cartas em blockquote destacado)

```
@formatter *cover-prompt

Título: A Carta da Morta
Gênero: Suspense Policial
Tom: Sombrio, misterioso
Público: Adulto (25-55 anos)
```

**Output:**
- Prompt de 350 palavras para capa:
  - Composição: Envelope aberto em primeiro plano, silhueta de mulher de costas ao fundo, cidade chuvosa desfocada
  - Paleta: Cinza, preto, azul-petróleo, branco sujo
  - Tipografia: Sans-serif bold para título, serif para subtítulo
  - Estilo: Fotorealista com atmosfera noir

#### Step 8: Publisher — Publicação e Marketing

```
@publisher *metadata

Livro: A Carta da Morta
Gênero: Suspense Policial / Thriller
Público: Adulto
Extensão: Novela (~15.000 palavras)
```

**Output:**
- BISAC: FIC030000 (Thrillers / Suspense), FIC022090 (Mystery / Police Procedural)
- Keywords: suspense brasileiro, thriller policial, caso arquivado, detetive aposentada, Curitiba, cold case, mistério
- Comparáveis: Tana French + Gillian Flynn + Raphael Montes

```
@publisher *sinopse

Livro: A Carta da Morta
Metadados: [colar metadados acima]
Tom: Misterioso, perturbador
```

**Output:**
- Tagline: "Alguns mortos se recusam a ficar quietos."
- Sinopse curta (50 palavras) pronta para Amazon
- Quarta-capa com gancho emocional forte

---

## Demonstração Prática — Handoffs Entre Agentes (1 min)

**O segredo do pipeline:** O output de um agente é o input do próximo.

```
Muse (premissa)
  ↓ [logline + fichas de personagem]
Researcher (worldbuilding)
  ↓ [banco de pesquisa + mapa de locações]
Architect (outline)
  ↓ [estrutura de 5 capítulos + chapter-plan Cap 1]
Scribe (draft)
  ↓ [capítulo 1 bruto, 3.200 palavras]
Editor (revisão)
  ↓ [capítulo 1 revisado, 3.000 palavras]
Critic (aprovação)
  ↓ [capítulo aprovado com ajustes menores]
  [Loop: repetir Scribe→Editor→Critic para Cap 2-5]
Formatter (formatação)
  ↓ [manuscrito em Markdown + EPUB + prompt de capa]
Publisher (publicação)
  ↓ [metadados + sinopse + kit de marketing]
```

**Dica:** Salve cada output em uma pasta organizada:
```
/meu-livro/
  01-conceito/      (Muse + Researcher)
  02-estrutura/     (Architect)
  03-manuscrito/    (Scribe + Editor + Critic)
  04-producao/      (Formatter + Publisher)
```

---

## Encerramento (2 min)

**Recap:**
Você acabou de ver o pipeline completo em ação:
- **EXTRACT** (Muse + Researcher): Ideia → Conceito estruturado
- **TRANSFORM** (Architect + Scribe + Editor + Critic): Conceito → Manuscrito aprovado
- **LOAD** (Formatter + Publisher): Manuscrito → Livro publicável

**Quando usar o pipeline completo:**
- Projetos longos (romance, não-ficção, técnico)
- Quando você quer resultado profissional
- Quando tem tempo para iterar (não é pipeline de 1 dia)

**Quando adaptar o pipeline:**
- Poesia: Muse → Scribe → Editor → Formatter (pular Researcher, Architect, Critic)
- Manual técnico: Researcher → Architect → Scribe → Editor → Formatter (pular Muse, Critic)
- Conto: Muse → Architect (simplificado) → Scribe → Editor → Formatter (pular Researcher, Critic)

**Referências:**
- `full-pipeline.md` — Workflow completo documentado
- `pre-writing.md` — Checklist antes de começar
- `publication.md` — Checklist antes de publicar

**Próximo passo:**
Agora você tem todas as ferramentas. O **Módulo Bônus** vai mostrar como adaptar o pipeline para os 21 gêneros suportados — de romance a livro técnico, de poesia a jornalismo literário. Nos vemos lá.

---

**Dica profissional:** O pipeline NÃO precisa ser linear. Você pode voltar atrás. Se o Critic reprovar um capítulo, volte para o Scribe. Se o Architect gerar outline fraco, volte para o Muse refinar a premissa. Iteração é parte do processo criativo.
