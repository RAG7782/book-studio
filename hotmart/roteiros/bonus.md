# Módulo Bônus — Catálogo de Gêneros e Dicas Avançadas

**Duração:** ~10 minutos
**Objetivo:** Dominar a adaptação do pipeline Book Studio para qualquer gênero — dos 21 gêneros suportados, workflows especializados e técnicas avançadas de produção.

---

## Abertura (1 min)

**Hook:**
"O pipeline que você aprendeu funciona para qualquer tipo de livro. Mas cada gênero tem suas particularidades. Romance precisa de worldbuilding complexo. Livro técnico precisa de pesquisa profunda. Poesia dispensa a maioria dos agentes. Saber adaptar o pipeline é o que separa autores iniciantes de autores versáteis."

**Objetivo do módulo:**
Neste módulo bônus você vai aprender a adaptar o pipeline para os 21 gêneros suportados pelo Book Studio — 11 de ficção e 10 de não-ficção. Você vai ver workflows especializados para cada tipo de projeto, dicas avançadas de orquestração, e como produzir múltiplos livros em paralelo. Ao final, você será capaz de escrever qualquer tipo de livro com IA.

---

## Pontos-Chave (7 min)

### 1. Os 21 Gêneros Suportados — Visão Geral (2 min)

O Book Studio cobre todos os grandes gêneros do mercado editorial.

#### Ficção (11 gêneros)

| Gênero | Extensão | Estrutura | Agentes Críticos |
|--------|----------|-----------|------------------|
| **Romance** | 60k-120k | three-act | Muse, Architect, Scribe |
| **Conto** | 1k-15k | single-effect | Muse, Scribe, Editor |
| **Novela** | 15k-60k | three-act | Todos (pipeline completo) |
| **Poesia** | Variável | collection | Muse, Scribe, Editor, Formatter |
| **Fantasia** | 80k-150k | hero-journey | Muse, Researcher (worldbuilding), Architect |
| **Ficção Científica** | 70k-120k | three-act | Researcher (ciência), Architect, Scribe |
| **Terror** | 60k-100k | three-act | Muse (atmosfera), Scribe (tensão) |
| **Suspense** | 70k-100k | save-the-cat | Architect (pacing), Scribe (gancho) |
| **Infantil** | 500-40k | simple-arc | Muse, Scribe (linguagem simples) |
| **Jovem Adulto** | 50k-90k | three-act | Muse (protagonista jovem), Scribe |
| **Roteiro** | Variável | three-act | Architect (beats), Scribe (formato) |

#### Não-Ficção (10 gêneros)

| Gênero | Extensão | Estrutura | Agentes Críticos |
|--------|----------|-----------|------------------|
| **Biografia** | 60k-120k | chronological | Researcher (fatos), Architect (timeline) |
| **Autoajuda** | 40k-70k | problem-solution | Muse (frameworks), Scribe (exemplos) |
| **Ensaio** | 20k-60k | thematic | Muse (tese), Scribe (argumentação) |
| **Técnico** | 40k-100k | tutorial-progressive | Researcher, Scribe (código), Editor |
| **Acadêmico** | Variável | scientific | Researcher (peer-review), Editor (citações) |
| **Manual** | 20k-60k | reference | Architect (índice), Scribe (passo-a-passo) |
| **Jornalismo Literário** | 50k-100k | narrative | Researcher (apuração), Scribe (cenas) |
| **História** | 60k-120k | chronological | Researcher (fontes primárias), Scribe |
| **Filosofia** | 40k-80k | thematic | Muse (conceitos), Scribe (argumentação) |
| **Negócios** | 40k-70k | problem-solution | Muse (frameworks), Scribe (cases) |

**Todos os detalhes:** Veja `data/genres.yaml` para word count, subgêneros e requisitos especiais.

### 2. Adaptando o Pipeline por Tipo de Livro (3 min)

#### Pipeline Completo (Ficção Longa)

**Para:** Romance, Fantasia, Ficção Científica, Suspense, Jovem Adulto

```
Muse (*brainstorm → *premise → *character)
  ↓
Researcher (*investigate → *worldbuild)  ← Worldbuilding obrigatório
  ↓
Architect (*outline → *chapter-plan → *timeline)
  ↓
Scribe (*draft-chapter) → Loop por capítulo
  ↓
Editor (*copy-edit → *consistency-check)
  ↓
Critic (*analysis → *beta-read)  ← Feedback crítico antes de publicar
  ↓
Formatter (*markdown → *epub → *cover-prompt)
  ↓
Publisher (*metadata → *sinopse → *marketing)
```

**Tempo estimado:** 4-12 semanas (dependendo da extensão)

#### Pipeline Simplificado (Poesia)

**Para:** Poesia, Conto Curto (< 5k palavras)

```
Muse (*brainstorm → *premise)  ← Conceito rápido
  ↓
Scribe (*draft-chapter)  ← Escrever direto (pular Architect)
  ↓
Editor (*copy-edit)  ← Polimento
  ↓
Formatter (*markdown)  ← Formatação especial para poesia
  ↓
Publisher (*metadata → *sinopse)
```

**Tempo estimado:** 1-3 semanas

**PULAR:** Researcher (sem worldbuilding), Architect (sem estrutura rígida), Critic (autoavaliação suficiente)

#### Pipeline Técnico (Não-Ficção Especializada)

**Para:** Livro Técnico, Manual, Acadêmico

```
Muse (*brainstorm)  ← Definir escopo e público
  ↓
Researcher (*investigate)  ← FASE CRÍTICA: Pesquisa profunda, validação técnica
  ↓
Architect (*outline)  ← Estrutura tutorial-progressive ou reference
  ↓
Scribe (*draft-chapter)  ← Incluir código, diagramas, exemplos
  ↓
Editor (*copy-edit → *consistency-check)  ← Verificar exemplos de código funcionam
  ↓
Formatter (*markdown)  ← Syntax highlighting, diagramas, referências
  ↓
Publisher (*metadata → *sinopse)
```

**Tempo estimado:** 6-16 semanas (pesquisa consome mais tempo)

**PULAR:** Critic (revisão técnica por humano especialista é mais importante), *character, *worldbuild

#### Pipeline Rápido (Não-Ficção Curta)

**Para:** Ensaio, Autoajuda, Negócios

```
Muse (*brainstorm → *premise)  ← Framework central
  ↓
Architect (*outline)  ← Estrutura problem-solution
  ↓
Scribe (*draft-chapter)  ← Escrita rápida, exemplos práticos
  ↓
Editor (*copy-edit)
  ↓
Formatter (*markdown)
  ↓
Publisher (*metadata → *sinopse → *marketing)
```

**Tempo estimado:** 2-6 semanas

**PULAR:** Researcher (pesquisa leve, autocontida), Critic (público valida rápido)

### 3. Workflows Especializados Disponíveis (1 min)

O Book Studio já tem workflows prontos para casos comuns:

| Workflow | Arquivo | Quando usar |
|----------|---------|-------------|
| **Pipeline Completo** | `full-pipeline.md` | Projetos longos e complexos |
| **Fiction Workflow** | `fiction-workflow.md` | Romance, fantasia, suspense |
| **Nonfiction Workflow** | `nonfiction-workflow.md` | Biografia, autoajuda, negócios |
| **Quick Draft** | `quick-draft.md` | Conto, ensaio, artigo expandido |

Cada workflow já tem:
- Sequência de agentes otimizada
- Gates de aprovação
- Timing estimado
- Dicas de adaptação

### 4. Dicas Avançadas de Orquestração (1 min)

#### Combinar Gêneros

Você pode misturar gêneros e adaptar o pipeline:

```
Projeto: Livro técnico sobre game design com elementos narrativos

Estrutura híbrida:
- Researcher (*investigate) → Pesquisa técnica de game engines
- Muse (*character) → Criar personagens fictícios para exemplos
- Architect (*outline) → Estrutura tutorial-progressive
- Scribe (*draft-chapter) → Capítulos técnicos + sidebars narrativos
- Editor (*copy-edit) → Validar código E narrativa
```

#### Subverter Expectativas de Gênero

```
Projeto: Romance policial (hibridização)

Adaptação:
- Usar estrutura de suspense (save-the-cat) em vez de romance tradicional
- Muse cria DOIS arcos: investigação + romance
- Architect equilibra subplot romântico com plot principal
- Critic verifica se ambos os gêneros entregam satisfação
```

#### Múltiplos Livros Simultaneamente

Você pode produzir vários livros em paralelo usando o pipeline:

```
Projeto A (Fantasia) — Fase Transform (Scribe Cap 5)
Projeto B (Autoajuda) — Fase Extract (Muse + Researcher)
Projeto C (Conto) — Fase Load (Formatter + Publisher)

Rotacionar:
- Segunda: Projeto A (2h escrita)
- Terça: Projeto B (1h pesquisa)
- Quarta: Projeto C (30min formatação)
- Quinta: Projeto A (2h revisão)
- Sexta: Planejamento de todos os projetos
```

**Vantagem:** Evita bloqueio criativo (se travar em A, trabalha em B)

---

## Demonstração Prática — Adaptar Pipeline para Livro Técnico (1 min)

**Cenário:** Vamos criar outline para "Guia Prático de TypeScript para Iniciantes".

```
@muse *brainstorm

Tema: TypeScript para quem vem de JavaScript
Público: Devs júnior com 6 meses de JS
Objetivo: Migrar projetos para TS sem trauma
```

**Output:** 5 ideias (escolhemos "Migração incremental: 10 passos práticos")

```
@researcher *investigate

Tópico: TypeScript 5.x, tsconfig.json, tipos utilitários, migration patterns
Profundidade: tutorial
Foco: Exemplos do mundo real, projetos Next.js e React
```

**Output:** Banco de 15 tópicos técnicos com código validado

```
@architect *outline

Gênero: Técnico
Estrutura: tutorial-progressive
Extensão: 50.000 palavras (10 capítulos)
Conceito: [colar premissa do Muse]
```

**Output:** Outline com progressão lógica:
- Cap 1-3: Fundamentos (tipos básicos, interfaces, generics)
- Cap 4-7: Avançado (utility types, decorators, tsconfig)
- Cap 8-10: Prática (migrar projeto real passo a passo)

**Agentes pulados:** Critic (será substituído por tech reviewers humanos), *character, *worldbuild

---

## Encerramento (1 min)

**Recap:**
Neste módulo bônus você aprendeu:
- **21 gêneros suportados** (11 ficção + 10 não-ficção)
- **Como adaptar o pipeline** por tipo de livro (completo, simplificado, técnico, rápido)
- **Workflows especializados** prontos para usar
- **Técnicas avançadas:** Combinar gêneros, subverter expectativas, múltiplos livros em paralelo

**Recursos:**
- `data/genres.yaml` — Catálogo completo com word count, estruturas, subgêneros
- `workflows/fiction-workflow.md` — Pipeline otimizado para ficção
- `workflows/nonfiction-workflow.md` — Pipeline otimizado para não-ficção
- `workflows/quick-draft.md` — Pipeline rápido para projetos curtos

**Mensagem final:**
Você agora tem o sistema completo para escrever qualquer tipo de livro com IA. O Book Studio não substitui sua criatividade — ele amplifica. Use os agentes como ferramentas, não como substitutos. Escreva, itere, publique. O mercado editorial está aberto para quem domina essas ferramentas.

**Boa escrita, e nos vemos nas livrarias.**

---

**Dica profissional:** Comece pequeno. Seu primeiro projeto com o Book Studio deve ser um conto ou ensaio (~5.000 palavras). Domine o workflow simplificado antes de tentar um romance de 100.000 palavras. Escalabilidade vem com prática.
