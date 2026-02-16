# Pipeline Report (Short): [TITULO DA OBRA]

> **Template compacto** para projetos < 10.000 palavras (contos, microcontos, cronicas, poesia).
> Para romances e projetos longos, use `pipeline-report.md`.

**Gerado por:** Book Studio Orchestrator v2.0.0
**Data de Geracao:** [DATA E HORA]

---

## Informacoes do Projeto

| Campo | Valor |
|-------|-------|
| **Titulo** | [Titulo da obra] |
| **Genero** | [Genero principal] |
| **Subgenero** | [Subgenero, se aplicavel] |
| **Formato** | [Conto / Microconto / Cronica / Poesia / Flash Fiction] |
| **Workflow** | [fiction-standard / literary-experimental / poetry / etc] |
| **Autor** | [Nome do autor] |
| **Palavras** | [X.XXX] palavras |
| **Data de Inicio** | [DD/MM/YYYY HH:MM] |
| **Data de Conclusao** | [DD/MM/YYYY HH:MM] |
| **Tempo Total** | [XXmin] |

---

## Sumario Executivo

| Metrica | Valor |
|---------|-------|
| **Workflow** | [Nome do workflow + adaptacoes] |
| **Gates Avaliados** | [X/3] PASS / [X] REVIEW / [X] BLOCK |
| **Revision Iterations** | [X] loops executados |
| **Final Critic Score** | [X.X/10.0] |
| **Agentes Executados** | [X/8] |
| **Handoffs** | [X] handoffs totais |

**Status Final:** ✅ COMPLETO | ⏸ PAUSADO | 🔴 BLOQUEADO

---

## Timeline

```
EXTRACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [XXmin]

@muse           [DD/MM HH:MM] (+XXmin)
                └─ Premissa enriquecida

@researcher     [DD/MM HH:MM] (+XXmin)
                └─ [X] research artifacts

GATE: Extract → Transform - [PASS/REVIEW/BLOCK]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRANSFORM ━━━━━━━━━━━━━━━━━━━━━━━━━━ [XXmin]

@architect      [DD/MM HH:MM] (+XXmin)
                └─ Estrutura criada

@scribe         [DD/MM HH:MM] (+XXmin)
@editor         └─ Draft completo
@critic         └─ [X] revision loops

GATE: Revision Loops - [X] loops, [X] flagged
GATE: Transform → Load - [PASS/REVIEW/BLOCK]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LOAD ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [XXmin]

@formatter      [DD/MM HH:MM] (+XXmin)
                └─ Manuscript finalizado

@publisher      [DD/MM HH:MM] (+XXmin)
                └─ Marketing assets gerados

COMPLETO: [DD/MM/YYYY HH:MM]
```

---

## Quality Assessment

### Overall Score

**Media Final:** [X.X/10.0]

```
10.0 ┤
 9.0 ┤
 8.0 ┤ ████
 7.0 ┤ ████ <- Threshold
 6.0 ┤
 5.0 ┤
     └─────────────────
       Overall
```

### Scores por Dimensao

| Dimensao | Score | Status |
|----------|-------|--------|
| Premissa | [X.X/10] | [✅/⚠/❌] |
| Estrutura | [X.X/10] | [✅/⚠/❌] |
| Personagens | [X.X/10] | [✅/⚠/❌] |
| Prosa | [X.X/10] | [✅/⚠/❌] |
| Dialogo | [X.X/10] | [✅/⚠/❌] |
| Tema | [X.X/10] | [✅/⚠/❌] |
| Engajamento | [X.X/10] | [✅/⚠/❌] |
| Mercado | [X.X/10] | [✅/⚠/❌] |
| **Overall** | **[X.X/10]** | **[✅/⚠/❌]** |

---

## Quality Gates - Summary

### Gate 1: Extract → Transform

| Resultado | Score | Decisao |
|-----------|-------|---------|
| [PASS/REVIEW/BLOCK] | [X.X/10] | [Pipeline prosseguiu / Revisao manual / Bloqueado] |

**Criterios Avaliados:**
- ✅ Premissa completa e original
- ✅ Protagonista/voz definido(a)
- ✅ Conflito/tema central claro
- [✅/⚠/❌] Research coletado (se necessario)

### Gate 2: Revision Loop

| Resultado | Iteracoes | Decisao |
|-----------|-----------|---------|
| [APPROVED/FLAGGED] | [X] loops | [Aprovado / Flagged para revisao manual] |

**Feedback do Critic:**
- Iteracao 1: Score [X.X] - "[Feedback resumido]"
- Iteracao 2: Score [X.X] - "[Feedback resumido]" (se aplicavel)
- Iteracao 3: Score [X.X] - "[Feedback resumido]" (se aplicavel)

### Gate 3: Transform → Load

| Resultado | Score | Decisao |
|-----------|-------|---------|
| [PASS/REVIEW/BLOCK] | [X.X/10] | [Pipeline prosseguiu / Revisao manual / Bloqueado] |

**Criterios Avaliados:**
- [✅/⚠/❌] Score >= 7.0
- [✅/⚠/❌] Consistencia narrativa / tematica
- [✅/⚠/❌] Arco de transformacao completo (se aplicavel)
- [✅/⚠/❌] Resolucao satisfatoria
- [✅/⚠/❌] Voz consistente

---

## Agents Performance

| Agente | Status | Tempo | Handoffs | Notas |
|--------|--------|-------|----------|-------|
| @muse | [✅/⏭] | [XXmin] | 1 → @researcher | [Nota breve] |
| @researcher | [✅/⏭] | [XXmin] | 1 → @architect | [X] artifacts |
| @architect | [✅/⏭] | [XXmin] | 1 → @scribe | Estrutura criada |
| @scribe | [✅/⏭] | [XXmin] | 1 → @editor | Draft completo |
| @editor | [✅/⏭] | [XXmin] | 1 → @critic | [X] revisoes |
| @critic | [✅/⏭] | [XXmin] | [X] loops | [X] iteracoes |
| @formatter | [✅/⏭] | [XXmin] | 1 → @publisher | Manuscript final |
| @publisher | [✅/⏭] | [XXmin] | 0 (final) | Assets completos |

**Total de Handoffs:** [X]

---

## Final Deliverables

### Manuscript

- [x] **Manuscript Final** - `[nome-da-obra]-manuscript.md`
  - Formato: Markdown limpo
  - Palavras: [X.XXX]
  - Pronto para publicacao: [Sim/Nao]

### Metadata

- [x] **Metadata Completo** - `metadata.yaml`
  - Titulo, autor, genero, categorias
  - Keywords SEO-optimized
  - Copyright e publishing info

### Marketing Assets (selecionados para forma curta)

- [x] **Synopsis Curta** - `synopsis-short.txt`
  - [50-100] palavras
  - Hook + tema + chamada
  - Otimizada para: Amazon description, Goodreads, social media

- [x] **Keywords e Categorias** - `marketing-metadata.yaml`
  - [X] keywords principais
  - [X] categorias Amazon/Goodreads
  - Hashtags para social media

- [x] **Cover Prompt** - `cover-prompt.txt` (se aplicavel)
  - Descricao visual para designer/AI
  - Mood, cores, elementos principais

### Pipeline Artifacts

- [x] **Book State** - `book-state.yaml`
  - Estado completo da obra

- [x] **Pipeline State** - `pipeline-state.yaml`
  - Historico do pipeline

- [x] **Este Relatorio** - `pipeline-report-short-[DATA].md`

---

## Recomendacoes

### Para Esta Obra

**Melhorias Sugeridas:**

1. **Quality Score ([X.X/10])**
   - [Se <7.0] Score abaixo do threshold. Recomenda-se: [acao especifica]
   - [Se >=7.0] Score adequado. Polish sugerido em: [dimensoes <8.0]

2. **Polish Final**
   - [Dimensao com score mais baixo]: [Recomendacao especifica]
   - Considere line editing profissional se score < 7.0

3. **Publicacao**
   - **Onde publicar:** [Medium / Wattpad / Literary Magazine / Anthology / Self-pub]
   - **Marketing:** [Estrategia sugerida baseada em genero e score]
   - **Formato:** [Online / Print / EPUB / PDF]

### Para Proximas Obras

**Aprendizados:**

- **Extract:** [O que funcionou / O que melhorar] - Tempo: [XXmin]
- **Transform:** [O que funcionou / O que melhorar] - Loops: [X]
- **Load:** [O que funcionou / O que melhorar] - Deliverables: [completos/faltou X]
- **Workflow:** [Nome] - [Adequado / Precisa ajuste em X]

**Ajustes Recomendados:**

- [ ] [Ajuste especifico baseado em aprendizado]
- [ ] [Ajuste especifico baseado em aprendizado]

---

## Metadata do Report

**Versao do Orchestrator:** 2.0.0
**Workflow Version:** [X.X.X]
**Gerado em:** [DD/MM/YYYY HH:MM:SS]
**Report ID:** [ID unico]
**Template:** pipeline-report-short.md v1.0.0

---

**Gerado por Book Studio Orchestrator v2.0.0**
https://github.com/RAG7782/book-studio

---
