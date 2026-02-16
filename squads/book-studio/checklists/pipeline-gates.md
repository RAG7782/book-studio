# Pipeline Quality Gates - Checklist

Este checklist guia a verificacao manual dos quality gates do pipeline Book Studio. Use para validar que cada stage atende criterios minimos antes de avancar.

---

## Gate 1: Extract → Transform

**Objetivo:** Garantir que premissa e pesquisa estao suficientes para criar estrutura narrativa solida.

**Responsavel:** @orchestrator (avaliacao automatica) ou Autor (validacao manual)

**Quando avaliar:** Apos @muse e @researcher completarem, antes de @architect executar.

---

### Criterios Obrigatorios

**Premissa:**

- [ ] Premissa esta completa e articulada claramente
- [ ] Protagonista esta definido com nome, motivacao e arco potencial
- [ ] Conflito central esta articulado (externo E interno)
- [ ] Stakes estao claros (o que esta em risco se protagonista falhar)
- [ ] Setting basico esta estabelecido (onde e quando a historia acontece)
- [ ] Tom e voz narrativa estao definidos

**Responsavel:** @muse

**Score minimo:** 7.0/10 para cada item

---

**Pesquisa:**

- [ ] Minimo de 2 research artifacts coletados
- [ ] Research e relevante para o genero e premissa
- [ ] Sources sao confiaveis e bem documentados
- [ ] Research cobre lacunas de conhecimento do autor
- [ ] Contexto historico/cultural adequado (se aplicavel)

**Responsavel:** @researcher

**Score minimo:** 7.0/10 geral

---

### Criterios Opcionais (podem gerar REVIEW)

- [ ] Antagonista esta definido (nome, motivacao, relacao com protagonista)
- [ ] Personagens secundarios principais esbocados
- [ ] World-building detalhado (se fantasia/sci-fi)
  - [ ] Regras do sistema magico/tecnologico
  - [ ] Geografia e sociedade
  - [ ] Historia do mundo
- [ ] Research profundo (5+ artifacts)
- [ ] Temas principais identificados e explorados
- [ ] Subplots potenciais esbocados

**Score desejavel:** 8.0/10 para generos complexos (fantasia, sci-fi, historico)

---

### Criterios Especificos por Genero

**Fantasia/Sci-Fi:**

- [ ] Sistema magico ou tecnologico tem regras claras
- [ ] World-building suficiente para @architect criar estrutura consistente
- [ ] Research sobre mitologia/ciencia relevante coletado

**Romance:**

- [ ] Relacionamento central esta definido
- [ ] Conflito romantico (interno e externo) articulado
- [ ] Love interest caracterizado

**Misterio/Thriller:**

- [ ] Misterio central esta definido
- [ ] Pistas principais identificadas
- [ ] Twist potencial esboçado

**Historico:**

- [ ] Periodo historico bem pesquisado
- [ ] Linguagem e costumes da epoca considerados
- [ ] Eventos historicos relevantes identificados

**Nao-Ficcao:**

- [ ] Tese principal clara
- [ ] Outline de argumentos principais
- [ ] Research de fontes primarias e dados

---

### Decisao Final

**🟢 PASS** (Score >= 7.5, todos obrigatorios OK, pode avancar):
- [ ] Todos criterios obrigatorios atendem score minimo
- [ ] Premissa e pesquisa sao suficientes para Transform
- [ ] Nenhum item critico faltando
- [ ] **Acao:** Avancar automaticamente para @architect

**🟡 REVIEW** (Score 6.5-7.4, obrigatorios OK mas opcionais fracos):
- [ ] Criterios obrigatorios OK mas no limite
- [ ] Criterios opcionais importantes faltando
- [ ] World-building pode ser expandido (fantasia/sci-fi)
- [ ] Research pode ser mais profundo
- [ ] **Acao:** Perguntar ao autor se enriquece Extract ou prossegue

**🔴 BLOCK** (Score < 6.5, criterio obrigatorio faltando):
- [ ] Premissa incompleta ou confusa
- [ ] Protagonista nao definido adequadamente
- [ ] Conflito central ausente ou fraco
- [ ] Research insuficiente ou irrelevante
- [ ] **Acao:** Retornar para @muse/@researcher com feedback especifico

---

### Notas de Avaliacao

**Data:** ________________
**Avaliador:** ________________
**Score Geral:** _____ / 10

**Pontos Fortes:**
-
-

**Pontos Fracos:**
-
-

**Decisao:** PASS / REVIEW / BLOCK

**Proxima Acao:**
-

---

## Gate 2: Revision Loop (por capitulo)

**Objetivo:** Garantir que cada capitulo atinge qualidade minima (score >= 7.0) antes de aprovar.

**Responsavel:** @critic (avaliacao) + @editor (revisao)

**Quando avaliar:** Apos cada iteracao Editor → Critic, antes de aprovar capitulo.

---

### Criterios de Qualidade Narrativa

**Estrutura do Capitulo:**

- [ ] Capitulo tem abertura clara (hook ou continuacao natural)
- [ ] Meio desenvolve acao/conflito de forma coerente
- [ ] Fechamento cria ponte para proximo capitulo ou resolve arco
- [ ] Arco interno do capitulo esta completo (mini-jornada)
- [ ] Ritmo e adequado (nao arrastado, nao apressado)

**Responsavel:** @critic

**Score minimo:** 7.0/10

---

**Escrita e Estilo:**

- [ ] Prosa e clara e legivel
- [ ] Voz narrativa e consistente com capitulos anteriores
- [ ] Show vs tell esta balanceado (mais show que tell)
- [ ] Descricoes sao vivas mas nao excessivas
- [ ] Dialogo e natural e revela personagem/avanca plot
- [ ] Gramatica e pontuacao corretas

**Responsavel:** @editor (melhoria) + @critic (validacao)

**Score minimo:** 7.0/10

---

**Consistencia:**

- [ ] Personagens agem de forma consistente com caracterizacao
- [ ] Continuidade com capitulos anteriores (eventos, detalhes)
- [ ] Tom e mood consistentes com genero
- [ ] World-building consistente (regras, geografia, sociedade)
- [ ] Timeline logica (eventos em ordem plausivel)

**Responsavel:** @critic

**Score minimo:** 8.0/10 (consistencia e critica)

---

**Engajamento:**

- [ ] Capitulo prende atencao do leitor
- [ ] Tension/stakes presentes
- [ ] Emotional engagement com personagens
- [ ] Curiosidade sobre o que vem a seguir (page-turner quality)

**Responsavel:** @critic

**Score desejavel:** 7.5/10

---

### Processo de Revision Loop

**Iteracao 1:**

- [ ] @scribe escreve capitulo draft
- [ ] @editor revisa e melhora (foco: estrutura, prosa, dialogo)
- [ ] @critic avalia e atribui score
- [ ] Se score >= 7.0: APROVAR e avancar
- [ ] Se score < 7.0: Critic fornece feedback especifico

**Iteracao 2:**

- [ ] @editor aplica feedback do Critic
- [ ] Melhorias visiveis em relacao a iteracao 1
- [ ] @critic reavalia
- [ ] Se score >= 7.0: APROVAR e avancar
- [ ] Se score < 7.0: Critic fornece feedback mais detalhado

**Iteracao 3 (ultima chance):**

- [ ] @editor aplica feedback com maxima atencao
- [ ] Todas issues criticas corrigidas
- [ ] @critic reavalia
- [ ] Se score >= 7.0: APROVAR
- [ ] Se score 6.5-6.9: FLAG e permitir autor decidir (aceitar ou reescrever)
- [ ] Se score < 6.5: FLAG critico e BLOQUEAR (exige decisao do autor)

---

### Criterios de Melhoria Entre Iteracoes

- [ ] Score aumentou em relacao a iteracao anterior
- [ ] Feedback do Critic foi incorporado de forma efetiva
- [ ] Nao houve regressao (novos problemas introduzidos)
- [ ] Editor demonstra entendimento do feedback

**Se score nao melhorar entre iteracoes:** Considerar reescrita do zero.

---

### Decisao Final (por capitulo)

**🟢 APROVADO** (Score >= 7.0 em ate 3 iteracoes):
- [ ] Capitulo atinge qualidade minima
- [ ] Todos criterios de narrativa, escrita, consistencia OK
- [ ] **Acao:** Marcar capitulo como APPROVED, prosseguir para proximo

**🟡 FLAGGED** (Score 6.5-6.9 apos 3 iteracoes):
- [ ] Capitulo proximo do threshold mas nao atinge
- [ ] Issues moderados persistem mas nao sao criticos
- [ ] **Acao:** Marcar FLAG, perguntar ao autor (aceitar ou reescrever)

**🔴 FLAGGED CRITICO** (Score < 6.5 apos 3 iteracoes):
- [ ] Capitulo significativamente abaixo do threshold
- [ ] Issues graves persistem (plot hole, inconsistencia, qualidade baixa)
- [ ] **Acao:** Marcar FLAG critico, BLOQUEAR pipeline, exigir decisao do autor

---

### Tracking de Revision Loop

**Capitulo:** _____ / _____

**Iteracao 1:**
- Score: _____ / 10
- Feedback: _________________________________
- Issues: ___________________________________

**Iteracao 2:**
- Score: _____ / 10
- Feedback: _________________________________
- Melhorias visiveis: [ ] Sim [ ] Nao

**Iteracao 3:**
- Score: _____ / 10
- Feedback: _________________________________
- Melhorias visiveis: [ ] Sim [ ] Nao

**Decisao Final:** APROVADO / FLAGGED / FLAGGED CRITICO

**Acao:**
-

---

## Gate 3: Transform → Load

**Objetivo:** Garantir que manuscrito completo tem qualidade e consistencia para publicacao.

**Responsavel:** @orchestrator (avaliacao automatica) ou Autor (validacao manual)

**Quando avaliar:** Apos todos capitulos aprovados/flagged, antes de @formatter executar.

---

### Criterios Obrigatorios - Completude

**Manuscrito:**

- [ ] Todos capitulos escritos (conforme estrutura do @architect)
- [ ] Todos capitulos com score >= 7.0 OU flagged com justificativa
- [ ] Nenhum capitulo faltando ou incompleto
- [ ] Contagem de palavras adequada ao genero
  - [ ] Novela: 20-50k palavras
  - [ ] Romance: 50-80k palavras
  - [ ] Ficçao geral: 70-100k palavras
  - [ ] Fantasia/Sci-fi: 90-120k palavras

**Responsavel:** @scribe + @editor + @critic (coletivamente)

---

**Estrutura Narrativa:**

- [ ] Todos atos completos (setup, confrontation, resolution)
- [ ] Beats principais presentes (conforme outline do @architect)
- [ ] Arcos narrativos iniciados e concluidos
- [ ] Nenhum plot thread abandonado
- [ ] Climax presente e satisfatorio
- [ ] Resolucao adequada (nao apressada, nao arrastada)

**Responsavel:** @architect (planejamento) + validacao em Transform

**Score minimo:** 7.5/10

---

### Criterios Obrigatorios - Consistencia

**Personagens:**

- [ ] Arco do protagonista completo e satisfatorio
- [ ] Protagonista demonstra crescimento/mudanca
- [ ] Personagens secundarios tem arcos coerentes
- [ ] Caracterizacao consistente ao longo do manuscrito
- [ ] Motivacoes claras e consistentes
- [ ] Nenhuma mudanca de personalidade injustificada

**Score minimo:** 7.5/10

---

**Conflito e Plot:**

- [ ] Conflito central resolvido de forma convincente
- [ ] Subplots principais resolvidos
- [ ] Subplots menores ou deixados em aberto intencionalmente ou resolvidos
- [ ] Nenhum plot hole significativo
- [ ] Causality logica (eventos tem causa e efeito claros)
- [ ] Twists justificados (nao deus ex machina)

**Score minimo:** 8.0/10 (plot e critico)

---

**Voz e Estilo:**

- [ ] Voz narrativa consistente do inicio ao fim
- [ ] Tom consistente com genero
- [ ] POV consistente (nao muda inadvertidamente)
- [ ] Tense consistente (passado/presente)
- [ ] Show vs tell ratio mantido
- [ ] Dialogo consistente por personagem

**Score minimo:** 7.5/10

---

**World-Building (se aplicavel):**

- [ ] Regras do mundo estabelecidas e seguidas
- [ ] Sistema magico/tecnologico consistente (se fantasia/sci-fi)
- [ ] Geografia consistente (distancias, localizacoes)
- [ ] Sociedade e cultura coerentes
- [ ] Timeline logica de eventos
- [ ] Detalhes menores consistentes (nomes, datas, descricoes fisicas)

**Score minimo:** 7.5/10 para fantasia/sci-fi

---

### Criterios Opcionais (podem gerar REVIEW)

**Qualidade Geral:**

- [ ] Nenhum capitulo flagged critico
- [ ] Capitulos flagged <= 10% do total
- [ ] Score medio >= 7.5 (nao apenas >= 7.0)
- [ ] Prosa polida e profissional
- [ ] Ritmo bem calibrado ao longo do manuscrito

---

**Elementos Literarios:**

- [ ] Temas sao explorados de forma consistente
- [ ] Simbolismos funcionam (se presentes)
- [ ] Foreshadowing efetivo
- [ ] Setup/payoff balanceados (promessas cumpridas)
- [ ] Emotional payoff satisfatorio
- [ ] Ressonancia emocional no leitor

---

**Preparacao para Publicacao:**

- [ ] Manuscrito pronto para formatacao
- [ ] Nenhuma revisao estrutural grande necessaria
- [ ] Apenas line editing/proofread humano necessario
- [ ] Marketability clara (genero, audiencia, hooks)

---

### Criterios Especificos por Genero

**Fantasia/Sci-Fi:**

- [ ] Regras do sistema magico/tech nunca quebradas
- [ ] World-building coeso e imersivo
- [ ] Nenhuma inconsistencia de mundo flagrante
- [ ] Tech/magic nao resolve plot artificialmente

**Romance:**

- [ ] Relacionamento central satisfatoriamente resolvido
- [ ] Quimica entre love interests evidente
- [ ] Emotional beats do romance presentes
- [ ] HEA ou HFN (Happy Ending ou Happy For Now) alcancado

**Misterio/Thriller:**

- [ ] Todas pistas pagas (nao esquecidas)
- [ ] Solucao justa (leitor poderia descobrir)
- [ ] Plot twists surprendem mas fazem sentido em retrospecto
- [ ] Tension mantida ate final

**Horror:**

- [ ] Atmosfera de dread/medo mantida
- [ ] Escalacao de tension efetiva
- [ ] Payoff de terror satisfatorio
- [ ] Nao depende apenas de jump scares

**Historico:**

- [ ] Precisao historica mantida
- [ ] Anacronismos evitados ou justificados
- [ ] Linguagem apropriada ao periodo
- [ ] Eventos historicos integrados naturalmente

**Nao-Ficcao:**

- [ ] Tese principal claramente argumentada
- [ ] Evidencias e dados bem utilizados
- [ ] Estrutura logica de argumentacao
- [ ] Conclusao solida baseada em conteudo

---

### Checklist de Consistencia Detalhada

**Nomes e Caracteristicas Fisicas:**

- [ ] Nomes de personagens consistentes (sem mudancas inadvertidas)
- [ ] Caracteristicas fisicas consistentes (cor de olhos, cabelo, altura)
- [ ] Idades consistentes (timeline nao quebra)
- [ ] Nomes de lugares consistentes

**Timeline e Causalidade:**

- [ ] Eventos em ordem cronologica logica
- [ ] Duracao de viagens plausivel
- [ ] Estacoes do ano consistentes
- [ ] Passagem de tempo clara e logica

**Regras do Mundo:**

- [ ] Fisica/magia/tech seguem regras estabelecidas
- [ ] Limitacoes de personagens respeitadas
- [ ] Consequencias de acoes sao logicas
- [ ] Poder scaling consistente (personagens nao ficam inexplicavelmente mais fortes)

---

### Analise de Flags

**Total de Capitulos Flagged:** _____ / _____ ( _____ %)

**Distribuicao:**
- Flags moderados (6.5-6.9): _____
- Flags criticos (< 6.5): _____

**Capitulos Flagged:**

| Capitulo | Score | Issue Principal | Impacto no Manuscrito |
|----------|-------|-----------------|------------------------|
| Cap ___ | ___ | _____________ | [ ] Baixo [ ] Medio [ ] Alto |
| Cap ___ | ___ | _____________ | [ ] Baixo [ ] Medio [ ] Alto |

**Decisao sobre Flags:**
- [ ] Aceitar flags (impacto baixo, nao compromete qualidade geral)
- [ ] Revisar capitulos flagged antes de Load
- [ ] Reescrever capitulos criticos

---

### Decisao Final

**🟢 PASS** (Score >= 7.5, flags <= 10%, pode avancar):
- [ ] Todos criterios obrigatorios atendem score minimo
- [ ] Consistencia narrativa solida
- [ ] Flags baixos e justificados
- [ ] Manuscrito pronto para formatacao
- [ ] **Acao:** Avancar automaticamente para @formatter

**🟡 REVIEW** (Score 7.0-7.4, flags 10-20%, precisa analise):
- [ ] Criterios obrigatorios OK mas no limite
- [ ] Alguns issues de consistencia presentes
- [ ] Flags moderados acima do ideal
- [ ] Pode precisar revisao localizada
- [ ] **Acao:** Apresentar issues ao autor, decidir se revisa ou prossegue

**🔴 BLOCK** (Score < 7.0, flags > 20%, nao pode avancar):
- [ ] Criterios obrigatorios nao atendidos
- [ ] Issues graves de consistencia ou plot holes
- [ ] Muitos flags ou flags criticos
- [ ] Manuscrito nao esta pronto para formatacao
- [ ] **Acao:** BLOQUEAR pipeline, listar correcoes obrigatorias, revisar antes de Load

---

### Notas de Avaliacao Final

**Data:** ________________
**Avaliador:** ________________
**Score Geral do Manuscrito:** _____ / 10

**Estatisticas:**
- Total de palavras: _____________
- Total de capitulos: _____
- Capitulos aprovados (>= 7.0): _____ ( _____ %)
- Capitulos flagged: _____ ( _____ %)
- Score medio: _____ / 10

**Pontos Fortes do Manuscrito:**
-
-
-

**Issues Identificados:**
-
-
-

**Flags Ativos que Precisam Atencao:**
-
-

**Recomendacoes:**
-
-

**Decisao:** PASS / REVIEW / BLOCK

**Proxima Acao:**
-

**Estimativa de Revisao (se necessaria):** _____ horas

---

## Notas Gerais de Uso

### Quando Usar Este Checklist

**Avaliacao Automatica (AIOS):**
- Orchestrator executa gates automaticamente
- Use este checklist como referencia para entender decisoes
- Se gate retornar REVIEW ou BLOCK, consulte checklist para entender criterios

**Validacao Manual (ChatGPT/Tess.ai):**
- Use checklist para avaliar manualmente cada gate
- Marque items conforme avalia
- Use secao de Notas para documentar decisao
- Decisao final (PASS/REVIEW/BLOCK) baseada em checklist completo

### Thresholds Recomendados

**Por Genero:**

| Genero | Gate 1 Min | Gate 3 Min | Flags Max |
|--------|------------|------------|-----------|
| Romance | 7.0 | 7.5 | 10% |
| Fantasia/Sci-fi | 7.5 | 8.0 | 5% |
| Misterio | 7.5 | 8.0 | 5% |
| Literario | 8.0 | 8.5 | 5% |
| YA | 7.0 | 7.5 | 15% |
| Nao-ficcao | 7.0 | 7.5 | 10% |

**Ajuste thresholds conforme objetivos:**
- Publicacao comercial: usar thresholds recomendados ou superiores
- Primeiro draft: aceitar thresholds mais baixos (6.5 min)
- Auto-publicacao rapida: aceitar mais flags (ate 20%)
- Busca de agente/editora: usar thresholds superiores (8.0+)

### Documentacao

Mantenha registro de todas avaliacoes de gates:
- Salve checklists preenchidos com o Book State
- Documente decisoes de REVIEW e razoes de aceitar/rejeitar
- Acompanhe evolucao de scores entre iteracoes
- Use para aprendizado em proximos projetos

---

**Book Studio Orchestrator v2.0.0**
**Quality Gates Checklist**

---
