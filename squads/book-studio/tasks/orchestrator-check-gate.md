---
task: Verificar Quality Gate
responsavel: "@orchestrator"
responsavel_type: system
atomic_layer: task
elicit: false
Entrada: "Gate ID (extract-to-transform, revision-loop, transform-to-load)"
Saida: "Resultado do gate (pass/review/block) + detalhes"
orchestrator_command: "*check-gate"
memory_sections:
  reads: [meta, premissa, personagens, pesquisa, estrutura, progresso, feedback]
  writes: [pipeline-state]
---

# Verificar Quality Gate

O Orchestrator avalia quality gates automaticos em pontos criticos do pipeline, garantindo qualidade minima antes de avancar para proxima fase.

## Flow

1. **Identificar Gate**
   - Receber gate_id: `extract-to-transform`, `revision-loop`, ou `transform-to-load`
   - Carregar criterios especificos do gate do configs
   - Identificar qual Book State sections verificar
   - Carregar thresholds de qualidade (podem variar por genero)

2. **Carregar Book State Relevante**
   - Para extract-to-transform: carregar premissa, personagens, pesquisa
   - Para revision-loop: carregar capitulo atual, feedback do Critic, historico de revisoes
   - Para transform-to-load: carregar estrutura, todos capitulos, scores, arcos narrativos
   - Consolidar dados necessarios para avaliacao

3. **Avaliar Criterios**
   - Para cada criterio do gate:
     - Verificar se dado necessario existe
     - Validar qualidade contra threshold
     - Classificar como PASS, REVIEW ou BLOCK
     - Registrar evidencia (por que passou/falhou)
   - Consolidar resultados parciais

4. **Classificar Resultado Geral**
   - 🟢 **PASS** - Todos criterios obrigatorios atendem threshold, pode avancar automaticamente
   - 🟡 **REVIEW** - Criterios obrigatorios OK, mas items opcionais faltam ou estao no limite
   - 🔴 **BLOCK** - Um ou mais criterios obrigatorios falharam, nao pode avancar

5. **Gerar Detalhamento**
   - Para PASS: listar criterios aprovados, confirmar avanco
   - Para REVIEW: listar items para decisao do autor, permitir override
   - Para BLOCK: listar items obrigatorios faltantes, impedir avanco ate correcao

6. **Registrar no Pipeline State**
   - Salvar resultado do gate com timestamp
   - Registrar criterios avaliados e scores
   - Se BLOCK: registrar bloqueio ativo
   - Se REVIEW: registrar items pendentes de decisao
   - Atualizar status do pipeline

7. **Retornar Resultado**
   - Apresentar resultado visual claro
   - Para REVIEW e BLOCK: listar acoes necessarias
   - Para PASS: confirmar que pipeline pode prosseguir

## Output

### Formato do Resultado

```yaml
gate_result:
  gate_id: "extract-to-transform"
  timestamp: "2026-02-16T14:30:00Z"
  status: "PASS"  # ou REVIEW ou BLOCK

  criteria_evaluated:
    - criterion: "premissa-completa"
      required: true
      status: "PASS"
      evidence: "Premissa contem protagonista, conflito, stakes e setting"
      score: 9/10

    - criterion: "protagonista-definido"
      required: true
      status: "PASS"
      evidence: "Protagonista tem nome, motivacao, falha tragica e arco"
      score: 8/10

    - criterion: "conflito-central"
      required: true
      status: "PASS"
      evidence: "Conflito externo e interno articulados claramente"
      score: 9/10

    - criterion: "research-coletado"
      required: true
      status: "PASS"
      evidence: "3 research artifacts relevantes coletados"
      score: 7/10

    - criterion: "world-building"
      required: false  # opcional para alguns generos
      status: "REVIEW"
      evidence: "World-building basico presente, mas pode ser expandido"
      score: 6/10

  overall_score: 8.2/10

  decision: "PASS"
  can_proceed: true

  recommendations:
    - "Considere expandir world-building antes de Architect"
    - "Research artifacts estao no minimo, mais pesquisa pode enriquecer"
```

### Apresentacao Visual ao Autor

```
🔍 QUALITY GATE: Extract → Transform

Status: 🟢 PASS

Criterios Obrigatorios:
✓ Premissa completa (9/10)
✓ Protagonista definido (8/10)
✓ Conflito central articulado (9/10)
✓ Research coletado (7/10)

Criterios Opcionais:
⚠ World-building basico (6/10) - pode ser expandido

Score Geral: 8.2/10

Decisao: Pipeline pode prosseguir para Transform stage

Recomendacoes:
• Considere expandir world-building antes de Architect executar
• Research artifacts estao no minimo, mais pesquisa pode enriquecer narrativa

Prosseguir automaticamente? [s/n]
```

## Gates Especificos

### Gate 1: Extract → Transform

**Objetivo:** Garantir que premissa e pesquisa estao suficientes para criar estrutura narrativa solida.

**Criterios Obrigatorios:**
- ✅ Premissa completa e clara
- ✅ Protagonista definido (nome, motivacao, arco)
- ✅ Conflito central articulado (externo e interno)
- ✅ Stakes claros (o que esta em risco)
- ✅ Setting basico estabelecido
- ✅ Research artifacts coletados (minimo 2)

**Criterios Opcionais (podem gerar REVIEW):**
- ⚠ Antagonista definido
- ⚠ Personagens secundarios esbocados
- ⚠ World-building detalhado (se fantasia/sci-fi)
- ⚠ Research profundo (5+ artifacts)
- ⚠ Temas explorados

**Thresholds:**
- PASS: Todos obrigatorios OK + score >= 7.0
- REVIEW: Todos obrigatorios OK + score 6.0-6.9 OU opcionais fracos
- BLOCK: Qualquer obrigatorio faltando OU score < 6.0

**Acoes:**
- PASS: Avancar para Architect
- REVIEW: Perguntar ao autor se deseja enriquecer Extract ou prosseguir
- BLOCK: Retornar para Muse/Researcher com feedback especifico

---

### Gate 2: Revision Loop (por capitulo)

**Objetivo:** Garantir que cada capitulo atinge qualidade minima antes de aprovar.

**Criterios Obrigatorios:**
- ✅ Score do Critic >= 7.0
- ✅ Maximo 3 iteracoes Editor ↔ Critic
- ✅ Feedback do Critic especifico e acionavel
- ✅ Melhorias visiveis entre revisoes

**Criterios de Qualidade (avaliados pelo Critic):**
- ✅ Narrativa clara e envolvente
- ✅ Dialogo natural
- ✅ Ritmo adequado
- ✅ Show vs tell balanceado
- ✅ Consistencia com capitulos anteriores
- ✅ Arco do capitulo completo

**Thresholds:**
- PASS: Score >= 7.0 dentro de 3 iteracoes
- REVIEW: Score 6.5-6.9 na 3a iteracao (permitir FLAG e avancar)
- BLOCK: Score < 6.5 na 3a iteracao (FLAG obrigatorio, decidir se avanca ou reescreve)

**Acoes:**
- PASS: Aprovar capitulo, prosseguir para proximo
- REVIEW: Marcar FLAG, perguntar ao autor (aceitar 6.5+ ou reescrever)
- BLOCK: Marcar FLAG critico, exigir decisao do autor antes de prosseguir

**Tracking:**
```yaml
revision_loop:
  chapter: 5
  iterations:
    - iteration: 1
      editor_changes: "Melhorou dialogo, expandiu cena de acao"
      critic_score: 6.3
      critic_feedback: "Dialogo melhor, mas ritmo ainda lento"

    - iteration: 2
      editor_changes: "Acelerou ritmo, cortou descricao excessiva"
      critic_score: 6.9
      critic_feedback: "Muito melhor, mas transicao final abrupta"

    - iteration: 3
      editor_changes: "Suavizou transicao, adicionou foreshadowing"
      critic_score: 7.2
      critic_feedback: "Aprovado! Transicao funciona bem agora"

  final_status: "PASS"
  final_score: 7.2
```

---

### Gate 3: Transform → Load

**Objetivo:** Garantir que manuscrito completo tem qualidade e consistencia para publicacao.

**Criterios Obrigatorios:**
- ✅ Todos capitulos com score >= 7.0 (ou FLAGGEDs justificados)
- ✅ Consistencia narrativa entre capitulos
- ✅ Arcos de personagem completos e satisfatorios
- ✅ Conflito central resolvido de forma convincente
- ✅ Voz consistente ao longo do manuscrito
- ✅ Plot holes resolvidos
- ✅ Setup/payoff balanceados

**Criterios Opcionais (podem gerar REVIEW):**
- ⚠ Subplots resolvidos
- ⚠ Simbolismos e temas consistentes
- ⚠ Foreshadowing efetivo
- ⚠ Emotional payoff satisfatorio
- ⚠ Nenhum FLAG critico pendente

**Criterios Especificos por Genero:**
- Fantasia/Sci-fi: Regras do sistema magico/tech consistentes
- Romance: Relacionamento central satisfatorio
- Misterio: Todas pistas resolvidas, plot twists justos
- Horror: Atmosfera mantida, escalacao de tensao

**Thresholds:**
- PASS: Todos obrigatorios OK + score geral >= 7.5 + FLAGs <= 2
- REVIEW: Todos obrigatorios OK + score 7.0-7.4 OU FLAGs 3-5
- BLOCK: Qualquer obrigatorio faltando OU score < 7.0 OU FLAGs criticos > 5

**Acoes:**
- PASS: Avancar para Load stage (Formatter + Publisher)
- REVIEW: Apresentar resumo de issues, permitir autor decidir
- BLOCK: Listar items criticos, exigir revisao antes de Load

**Analise de Consistencia:**
```yaml
consistency_check:
  narrative_arcs:
    protagonist: "COMPLETE - Arco de transformacao claro"
    antagonist: "COMPLETE - Motivacao consistente"
    romantic_subplot: "INCOMPLETE - Relacionamento nao resolvido"

  plot_threads:
    main_conflict: "RESOLVED - Satisfatorio"
    mystery_subplot: "RESOLVED - Todas pistas pagas"
    family_conflict: "UNRESOLVED - Mencionado cap 3, esquecido"

  world_building:
    magic_rules: "CONSISTENT - Regras seguidas"
    geography: "MINOR_ISSUE - Distancia entre cidades inconsistente cap 8 vs cap 15"

  voice:
    tone: "CONSISTENT - Tom epico mantido"
    pov: "CONSISTENT - Terceira pessoa limitada"
    tense: "ISSUE - Mudou para presente cap 12, voltou preterito cap 13"

  character_consistency:
    protagonist: "CONSISTENT"
    love_interest: "MINOR_ISSUE - Cor dos olhos mudou cap 7 vs cap 20"

  flags_count:
    critical: 1  # tense issue
    moderate: 2  # romantic subplot, geography
    minor: 3  # eye color, small details

  overall_status: "REVIEW"
  recommendation: "Corrigir issue de tense (critico) e resolver romantic subplot antes de Load"
```

## Guidelines

### Auto-Pass vs Manual Review

**Auto-Pass** quando:
- Todos criterios obrigatorios com score >= threshold
- Criterios opcionais ausentes mas nao criticos para o genero
- Nenhum FLAG critico
- Score geral >= 7.5

**Manual Review** quando:
- Scores no limite (6.5-7.4)
- FLAGs moderados presentes (3-5)
- Criterios opcionais importantes faltando
- Inconsistencias menores detectadas

**Force Block** quando:
- Criterio obrigatorio faltando completamente
- Score < 6.0
- FLAGs criticos > 5
- Plot holes nao resolvidos
- Inconsistencias graves

### Customizacao por Genero

Thresholds podem ser ajustados por genero via route-config.yaml:

```yaml
quality_gates:
  fantasia:
    extract_to_transform:
      world_building: required  # obrigatorio para fantasia
      research: 5  # minimo 5 artifacts
    transform_to_load:
      magic_consistency: required

  romance:
    transform_to_load:
      relationship_arc: required
      emotional_payoff: required
```

### Mensagens de Feedback

**Para PASS:**
- Positivo, celebratorio
- Confirmar que pode avancar
- Listar principais forcas

**Para REVIEW:**
- Construtivo, nao alarmista
- Listar items para decisao
- Dar opcoes claras (prosseguir vs melhorar)

**Para BLOCK:**
- Claro sobre o que falta
- Especifico sobre como corrigir
- Nao permitir bypass sem correcao

## Exemplo de Uso

```
Orchestrator: [executando gate automaticamente]

🔍 QUALITY GATE: Transform → Load

Analisando manuscrito completo...

Criterios Obrigatorios:
✓ 18/18 capitulos com score >= 7.0
✓ Arco do protagonista completo
✓ Conflito central resolvido
✓ Voz consistente
⚠ 1 issue critico detectado: tense inconsistente (cap 12-13)

Criterios Opcionais:
⚠ Subplot romantico nao resolvido
⚠ Geografia inconsistente (distancia entre cidades)

Score Geral: 7.3/10
FLAGs: 1 critico, 2 moderados, 3 menores

Status: 🟡 REVIEW

Recomendacao:
Corrigir tense inconsistente (critico) antes de prosseguir.
Considere resolver subplot romantico para maior satisfacao do leitor.

Opcoes:
1. Corrigir issues e re-avaliar gate
2. Prosseguir com FLAGs (nao recomendado para issue critico)
3. Revisar capitulos especificos (12, 13)

Sua escolha: [1/2/3]
```

---

**Comando do Orchestrator:** `*check-gate <gate_id>`
**Versao:** 2.0.0
**Compativel com:** AIOS, ChatGPT Custom GPTs, Tess.ai
