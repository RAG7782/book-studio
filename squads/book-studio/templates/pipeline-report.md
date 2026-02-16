# Pipeline Report: [TITULO DO LIVRO]

**Gerado por:** Book Studio Orchestrator v2.0.0
**Data de Geracao:** [DATA E HORA]

---

## Informacoes do Projeto

| Campo | Valor |
|-------|-------|
| **Titulo** | [Titulo do livro] |
| **Genero** | [Genero principal] |
| **Subgenero** | [Subgenero, se aplicavel] |
| **Workflow** | [fiction-standard / nonfiction-practical / etc] |
| **Autor** | [Nome do autor] |
| **Data de Inicio** | [DD/MM/YYYY HH:MM] |
| **Data de Conclusao** | [DD/MM/YYYY HH:MM] |
| **Tempo Total** | [Xh XXmin] |
| **Pipeline ID** | [ID unico do pipeline] |

---

## Sumario Executivo

| Metrica | Valor |
|---------|-------|
| **Workflow Utilizado** | [Nome do workflow + adaptacoes] |
| **Total de Stages** | 3 (Extract, Transform, Load) |
| **Gates Avaliados** | [X/3] |
| **Gates Passed** | [X] PASS, [X] REVIEW, [X] BLOCK |
| **Revision Iterations** | [X] loops executados ([X] capitulos revisados) |
| **Final Critic Score** | [X.X/10.0] (media de [X] capitulos) |
| **Capitulos Flagged** | [X] capitulos com score < 7.0 apos 3 iteracoes |
| **Agentes Executados** | [X/8] (Muse, Researcher, Architect, Scribe, Editor, Critic, Formatter, Publisher) |
| **Handoffs Realizados** | [X] handoffs totais |
| **Interrupcoes** | [X] pausas/interrupcoes durante execucao |

**Status Final:** ✅ COMPLETO | ⏸ PAUSADO | 🔴 BLOQUEADO

---

## Timeline

```
EXTRACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [Inicio → Fim] ([Duracao])

@muse           [DD/MM HH:MM] → [DD/MM HH:MM] (+XXmin)
                └─ Premissa enriquecida gerada

@researcher     [DD/MM HH:MM] → [DD/MM HH:MM] (+XXmin)
                └─ [X] research artifacts coletados

GATE: Extract → Transform
                [DD/MM HH:MM] - [PASS/REVIEW/BLOCK] (score X.X/10)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRANSFORM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [Inicio → Fim] ([Duracao])

@architect      [DD/MM HH:MM] → [DD/MM HH:MM] (+XXmin)
                └─ Estrutura criada ([X] capitulos, [X] atos)

@scribe         [DD/MM HH:MM] → [DD/MM HH:MM] (+XXh XXmin)
@editor         └─ [X] capitulos escritos e revisados
@critic         └─ [X] revision loops executados
                └─ [X] capitulos flagged

GATE: Revision Loops
                [X] loops avaliados - [X] approved, [X] flagged

GATE: Transform → Load
                [DD/MM HH:MM] - [PASS/REVIEW/BLOCK] (score X.X/10)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LOAD ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [Inicio → Fim] ([Duracao])

@formatter      [DD/MM HH:MM] → [DD/MM HH:MM] (+XXmin)
                └─ Manuscript, EPUB, Metadata gerados

@publisher      [DD/MM HH:MM] → [DD/MM HH:MM] (+XXmin)
                └─ Synopsis, blurb, marketing copy, cover prompt gerados

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PIPELINE COMPLETO: [DD/MM/YYYY HH:MM]
```

---

## Quality Scores

### Score Geral

**Media Final:** [X.X/10.0]

```
10.0 ┤
 9.0 ┤ ████
 8.0 ┤ ████ ████
 7.0 ┤ ████ ████ ████ ████ ████ <- Threshold
 6.0 ┤ ████ ████ ████ ████ ████ ████
 5.0 ┤
     └─────────────────────────────────
       Cap1 Cap2 Cap3 Cap4 Cap5 ...
```

### Scores por Capitulo

| Capitulo | Score Final | Iteracoes | Status | Notas |
|----------|-------------|-----------|--------|-------|
| Cap 1 | [X.X/10] | [X] | ✅ Aprovado | Excelente abertura |
| Cap 2 | [X.X/10] | [X] | ✅ Aprovado | - |
| Cap 3 | [X.X/10] | [X] | ⚠ Flagged | Score abaixo de 7.0 apos 3 iteracoes |
| ... | ... | ... | ... | ... |
| Cap N | [X.X/10] | [X] | ✅ Aprovado | Desfecho satisfatorio |

**Distribuicao de Scores:**
- 9.0-10.0: [X] capitulos ([X%])
- 8.0-8.9: [X] capitulos ([X%])
- 7.0-7.9: [X] capitulos ([X%])
- 6.0-6.9: [X] capitulos ([X%]) ⚠ Flagged
- < 6.0: [X] capitulos ([X%]) 🔴 Critico

### Quality Gates - Detalhamento

#### Gate 1: Extract → Transform

**Avaliado em:** [DD/MM/YYYY HH:MM]
**Resultado:** [PASS/REVIEW/BLOCK]
**Score:** [X.X/10]

**Criterios Avaliados:**

| Criterio | Obrigatorio | Status | Score | Evidencia |
|----------|-------------|--------|-------|-----------|
| Premissa completa | Sim | ✅ PASS | [X/10] | [Breve evidencia] |
| Protagonista definido | Sim | ✅ PASS | [X/10] | [Breve evidencia] |
| Conflito central | Sim | ✅ PASS | [X/10] | [Breve evidencia] |
| Research coletado | Sim | ✅ PASS | [X/10] | [X] artifacts coletados |
| World-building | Nao | ⚠ REVIEW | [X/10] | [Breve evidencia] |

**Decisao:** [Pipeline prosseguiu automaticamente / Autor revisou items / Pipeline bloqueado]

---

#### Gate 2: Revision Loops

**Total de Loops:** [X] loops executados em [X] capitulos

**Loops Detalhados:**

**Capitulo [X]:**
- Iteracao 1: Score [X.X] - Feedback: "[Feedback do Critic]"
- Iteracao 2: Score [X.X] - Feedback: "[Feedback do Critic]"
- Iteracao 3: Score [X.X] - Feedback: "[Feedback do Critic]"
- **Resultado:** [Aprovado / Flagged]

[Repetir para cada capitulo que teve revision loop]

**Estatisticas:**
- Media de iteracoes por capitulo: [X.X]
- Capitulos aprovados na 1a iteracao: [X] ([X%])
- Capitulos que precisaram 2 iteracoes: [X] ([X%])
- Capitulos que precisaram 3 iteracoes: [X] ([X%])
- Capitulos flagged apos 3 iteracoes: [X] ([X%])

---

#### Gate 3: Transform → Load

**Avaliado em:** [DD/MM/YYYY HH:MM]
**Resultado:** [PASS/REVIEW/BLOCK]
**Score:** [X.X/10]

**Criterios Avaliados:**

| Criterio | Obrigatorio | Status | Evidencia |
|----------|-------------|--------|-----------|
| Todos capitulos score >= 7.0 | Sim | [✅/⚠/❌] | [X/X] capitulos aprovados, [X] flagged |
| Consistencia narrativa | Sim | [✅/⚠/❌] | [Breve evidencia] |
| Arcos de personagem completos | Sim | [✅/⚠/❌] | [Breve evidencia] |
| Conflito central resolvido | Sim | [✅/⚠/❌] | [Breve evidencia] |
| Voz consistente | Sim | [✅/⚠/❌] | [Breve evidencia] |
| Plot holes resolvidos | Sim | [✅/⚠/❌] | [Breve evidencia] |

**Issues Detectados:**
- [Tipo de issue]: [Descricao e capitulos afetados]
- [Tipo de issue]: [Descricao e capitulos afetados]

**Decisao:** [Pipeline prosseguiu automaticamente / Autor revisou items / Pipeline bloqueado]

---

## Agents Performance

| Agente | Status | Tempo | Tasks Completadas | Handoffs | Notas |
|--------|--------|-------|-------------------|----------|-------|
| @muse | ✅ Executado | [XXmin] | 1 | 1 → @researcher | Premissa enriquecida com [X] elementos |
| @researcher | ✅ Executado | [XXmin] | 1 | 1 → @architect | [X] research artifacts coletados |
| @architect | ✅ Executado | [XXmin] | 1 | 1 → @scribe | Estrutura de [X] capitulos criada |
| @scribe | ✅ Executado | [Xh XXmin] | [X] capitulos | [X] → @editor | [X] capitulos escritos |
| @editor | ✅ Executado | [Xh XXmin] | [X] revisoes | [X] → @critic | [X] capitulos revisados |
| @critic | ✅ Executado | [Xh XXmin] | [X] avaliacoes | [X] → @editor (loops) | [X] loops, [X] aprovados |
| @formatter | ✅ Executado | [XXmin] | 3 outputs | 1 → @publisher | Manuscript, EPUB, Metadata |
| @publisher | ✅ Executado | [XXmin] | 5 assets | 0 (final) | Marketing completo |

**Total de Handoffs:** [X]
**Handoffs com Retry:** [X] (revision loops)

---

## Issues & Flags

### Capitulos Flagged

| Capitulo | Score Final | Iteracoes | Issue Principal | Acao Recomendada |
|----------|-------------|-----------|-----------------|------------------|
| Cap [X] | [X.X/10] | 3 | [Descricao do issue] | [Revisao manual / Aceitar / Reescrever] |
| Cap [X] | [X.X/10] | 3 | [Descricao do issue] | [Revisao manual / Aceitar / Reescrever] |

### Force Exits

| Capitulo | Iteracao | Motivo | Decisao |
|----------|----------|--------|---------|
| [Cap X] | [X/3] | Score nao melhorou apos 3 tentativas | Flagged e avancado |

### Warnings e Alertas

- ⚠ [Tipo de warning]: [Descricao e contexto]
- ⚠ [Tipo de warning]: [Descricao e contexto]

### Errors (se houver)

- ❌ [Tipo de erro]: [Descricao, timestamp, como foi resolvido]

---

## Final Deliverables

Arquivos gerados pelo pipeline:

### Manuscript e Formato

- [x] **Manuscript Final** - `[nome-do-livro]-manuscript.md`
  - Formato: Markdown limpo
  - Palavras: [X.XXX] palavras
  - Capitulos: [X]

- [x] **EPUB Formatado** - `[nome-do-livro].epub`
  - Formato: EPUB 3.0
  - Validado: [Sim/Nao]
  - Pronto para upload: [Sim/Nao]

### Metadata

- [x] **Metadata Completo** - `metadata.yaml`
  - Titulo, autor, genero, categorias
  - ISBN placeholder
  - Keywords SEO-optimized
  - Copyright e publishing info

### Marketing Assets

- [x] **Synopsis Curta** - `synopsis-short.txt`
  - [150] palavras
  - Otimizada para: Amazon description, Goodreads

- [x] **Synopsis Longa** - `synopsis-long.txt`
  - [500] palavras
  - Otimizada para: Press kit, media

- [x] **Blurb de Contracapa** - `blurb.txt`
  - [100-150] palavras
  - Hook + stakes + call-to-action

- [x] **Keywords e Categorias** - `marketing-metadata.yaml`
  - [X] keywords principais
  - [X] categorias Amazon/Goodreads
  - Hashtags para social media

- [x] **Cover Prompt** - `cover-prompt.txt`
  - Descricao detalhada para designer/AI
  - Mood, cores, elementos visuais
  - Referencias de estilo

- [x] **Marketing Copy** - `marketing-copy.md`
  - Email announcement
  - Social media posts (3-5)
  - Press release draft

### Pipeline Artifacts

- [x] **Book State Completo** - `book-state.yaml`
  - Todo estado acumulado do livro
  - Premissa, personagens, estrutura, manuscrito

- [x] **Pipeline State** - `pipeline-state.yaml`
  - Historico completo do pipeline
  - Todos checkpoints, scores, decisoes

- [x] **Este Relatorio** - `pipeline-report-[DATA].md`

---

## Recomendacoes

### Para Este Livro

**Melhorias Sugeridas:**

1. **Capitulos Flagged ([X] capitulos)**
   - Cap [X]: [Issue especifico] - Recomenda-se [acao]
   - Cap [X]: [Issue especifico] - Recomenda-se [acao]

2. **Consistencia Narrativa**
   - [Issue detectado]: [Descricao e capitulos afetados]
   - Recomendacao: [Como corrigir]

3. **Polish Final**
   - Considere contratar editor humano para:
     - Line editing (capitulos flagged prioritarios)
     - Consistency pass (verificar [issues especificos])
     - Proofread final antes de publicacao

4. **Publicacao**
   - EPUB validado e pronto para: [Plataformas recomendadas]
   - Marketing assets completos para: [Estrategias sugeridas]
   - Cover prompt detalhado - enviar para: [Tipo de designer recomendado]

### Para Proximas Iteracoes

**Aprendizados:**

1. **Extract Stage**
   - [O que funcionou bem]
   - [O que pode melhorar]
   - Tempo gasto: [XXmin] - [Adequado/Rapido/Lento]

2. **Transform Stage**
   - [O que funcionou bem]
   - [O que pode melhorar]
   - Revision loops: [X] loops - [Acima/Na media/Abaixo da media]
   - Capitulos flagged: [X] - [Muito/Normal/Pouco]

3. **Load Stage**
   - [O que funcionou bem]
   - [O que pode melhorar]
   - Deliverables gerados: [Completos/Faltando X]

4. **Routing Decision**
   - Workflow escolhido: [Nome]
   - Adaptacoes aplicadas: [Lista]
   - Avaliacao: [Funcionou bem / Precisa ajuste em X]

5. **Quality Gates**
   - Gate 1: [Score] - [Comentario]
   - Gate 2: [X loops, X flagged] - [Comentario]
   - Gate 3: [Score] - [Comentario]

**Ajustes Recomendados para Proximo Livro:**

- [ ] [Ajuste especifico baseado em aprendizado]
- [ ] [Ajuste especifico baseado em aprendizado]
- [ ] [Ajuste especifico baseado em aprendizado]

---

## Apendice: Estatisticas Completas

### Metricas de Tempo

| Stage | Duracao | % do Total |
|-------|---------|-----------|
| Extract | [Xh XXmin] | [X%] |
| Transform | [Xh XXmin] | [X%] |
| Load | [Xh XXmin] | [X%] |
| Gates | [XXmin] | [X%] |
| **Total** | **[Xh XXmin]** | **100%** |

### Metricas de Qualidade

| Metrica | Valor | Benchmark |
|---------|-------|-----------|
| Score medio geral | [X.X/10] | 7.5+ = bom |
| Score mediano | [X.X/10] | - |
| Desvio padrao scores | [X.X] | < 1.0 = consistente |
| Capitulos >= 8.0 | [X] ([X%]) | - |
| Capitulos 7.0-7.9 | [X] ([X%]) | - |
| Capitulos < 7.0 | [X] ([X%]) | < 10% = bom |

### Metricas de Revisao

| Metrica | Valor | Benchmark |
|---------|-------|-----------|
| Total revision loops | [X] | - |
| Media iteracoes/capitulo | [X.X] | < 1.5 = bom |
| Capitulos 1a iteracao | [X%] | > 60% = bom |
| Capitulos 2 iteracoes | [X%] | - |
| Capitulos 3 iteracoes | [X%] | < 20% = bom |
| Capitulos flagged | [X%] | < 10% = bom |

### Metricas de Estrutura

| Metrica | Valor |
|---------|-------|
| Total de palavras | [XXX.XXX] |
| Palavras por capitulo (media) | [X.XXX] |
| Capitulos planejados | [X] |
| Capitulos produzidos | [X] |
| Atos | [X] |
| Beats principais | [X] |

---

## Metadata do Report

**Versao do Orchestrator:** 2.0.0
**Workflow Version:** [X.X.X]
**Route Config Version:** [X.X.X]
**Gerado em:** [DD/MM/YYYY HH:MM:SS]
**Report ID:** [ID unico]

---

**Gerado por Book Studio Orchestrator v2.0.0**
https://github.com/RAG7782/book-studio

---
