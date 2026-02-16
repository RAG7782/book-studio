---
task: Retomar Pipeline Interrompido
responsavel: "@orchestrator"
responsavel_type: system
atomic_layer: task
elicit: true
Entrada: "Pipeline state (automatico ou fornecido pelo usuario)"
Saida: "Pipeline retomado do ponto de interrupcao"
orchestrator_command: "*resume"
memory_sections:
  reads: [meta, pipeline-state]
  writes: [pipeline-state]
---

# Retomar Pipeline Interrompido

O Orchestrator retoma um pipeline interrompido do ultimo checkpoint salvo, preservando todo progresso anterior e evitando retrabalho.

## Flow

1. **Localizar Pipeline State**
   - **Modo automatico (AIOS):** Carregar pipeline-state do Book State atual
   - **Modo manual (ChatGPT):** Carregar da memoria da conversa
   - **Modo arquivo (Tess.ai):** Solicitar que autor forneça arquivo pipeline-state.yaml
   - Se nao encontrado: erro e instruir como fornecer
   - Validar integridade do pipeline-state

2. **Analisar Estado Atual**
   - Identificar fase atual: Extract, Transform ou Load
   - Identificar agente que estava executando (ou proximo a executar)
   - Identificar ultimo checkpoint bem-sucedido
   - Carregar progresso parcial (capitulos escritos, scores, handoffs realizados)
   - Verificar timestamp da interrupcao

3. **Identificar Bloqueios**
   - Checar se existe bloqueio ativo (gate BLOCK)
   - Identificar qual criterio causou bloqueio
   - Listar acoes necessarias para desbloquear
   - Se bloqueado: pausar resume e exigir correcao primeiro

4. **Identificar Gates Pendentes**
   - Checar se existe gate em status REVIEW esperando decisao
   - Carregar criterios que geraram REVIEW
   - Apresentar opcoes ao autor
   - Aguardar decisao antes de prosseguir

5. **Verificar Continuidade**
   - Confirmar que Book State tem todos dados necessarios para continuar
   - Validar que agente anterior completou handoff corretamente
   - Checar se nao houve mudanca manual que quebrou pipeline
   - Se dados inconsistentes: alertar autor e sugerir correcoes

6. **Retomar Execucao**
   - **Se estava no meio de agente:** Reiniciar agente do zero (agentes sao atomicos)
   - **Se estava entre agentes:** Executar proximo agente da sequencia
   - **Se estava em gate:** Re-avaliar gate com Book State atual
   - **Se estava em revision loop:** Continuar loop do ponto onde parou
   - Atualizar pipeline-state com resumo

7. **Notificar Autor**
   - Confirmar que pipeline foi retomado
   - Resumir o que foi preservado
   - Indicar proximo passo
   - Estimar tempo/tarefas restantes

## Output

### Formato do Pipeline State

```yaml
pipeline_state:
  project_id: "livro-fantasia-ferreiro-001"
  created_at: "2026-02-16T10:00:00Z"
  updated_at: "2026-02-16T15:30:00Z"
  status: "INTERRUPTED"  # ou RUNNING, PAUSED, BLOCKED, COMPLETED

  routing_decision:
    genre: "Fantasia Epica"
    workflow: "fiction-standard"
    # ... (ver *route output)

  current_stage: "TRANSFORM"
  current_phase: "writing"
  current_agent: "@scribe"
  next_agent: "@editor"

  progress:
    extract:
      status: "COMPLETED"
      agents_executed: ["@muse", "@researcher"]
      completed_at: "2026-02-16T11:30:00Z"

    transform:
      status: "IN_PROGRESS"
      phase: "writing"
      architect_completed: true
      chapters_total: 24
      chapters_written: 8
      chapters_approved: 6
      chapters_flagged: 1
      current_chapter: 9
      revision_loops: 3

    load:
      status: "PENDING"

  gates_evaluated:
    - gate: "extract-to-transform"
      timestamp: "2026-02-16T11:35:00Z"
      result: "PASS"
      score: 8.2

  active_blocks: []

  pending_reviews: []

  checkpoints:
    - checkpoint: "extract-completed"
      timestamp: "2026-02-16T11:30:00Z"
      book_state_snapshot: "..."

    - checkpoint: "architect-completed"
      timestamp: "2026-02-16T12:00:00Z"
      book_state_snapshot: "..."

    - checkpoint: "chapter-6-approved"
      timestamp: "2026-02-16T15:00:00Z"
      book_state_snapshot: "..."

  interruption:
    timestamp: "2026-02-16T15:30:00Z"
    reason: "USER_PAUSED"  # ou SESSION_TIMEOUT, ERROR, GATE_BLOCK
    last_action: "scribe-writing-chapter-9"
    can_resume: true

  metadata:
    total_handoffs: 18
    total_revision_loops: 3
    flags_raised: 1
    estimated_completion: "2026-02-16T20:00:00Z"
```

### Apresentacao ao Autor (Resume)

```
🔄 RESUMINDO PIPELINE

Projeto: Livro Fantasia Ferreiro 001
Ultima atualizacao: 16/02/2026 15:30
Tempo desde interrupcao: 2 horas

Status Atual:
📍 TRANSFORM Stage - Fase de Escrita
📍 Capitulo 9 em andamento (@scribe)

Progresso Preservado:
✓ Extract stage completo (Muse + Researcher)
✓ Gate Extract→Transform: PASS (score 8.2)
✓ Architect executado - estrutura criada (24 capitulos)
✓ 8 capitulos escritos
✓ 6 capitulos aprovados (score >= 7.0)
✓ 1 capitulo FLAGGEDs (cap 3, score 6.8)
✓ 3 revision loops executados

Bloqueios: Nenhum ✓
Reviews Pendentes: Nenhum ✓

Proximo Passo:
→ Retomar @scribe no Capitulo 9
→ Sequencia: Scribe → Editor → Critic
→ Estimativa: ~15 capitulos restantes

Deseja retomar pipeline? [s/n]
```

## Cenarios de Resume

### Cenario 1: Interrupcao Limpa (PAUSED)

**Situacao:** Autor pausou manualmente ou sessao expirou no meio do trabalho.

**Checkpoint:** Ultimo agente completou handoff corretamente.

**Acao:**
- Carregar Book State
- Executar proximo agente da sequencia
- Continuar normalmente

**Exemplo:**
```
Pipeline pausado apos @editor terminar cap 7.
Resume: Executar @critic para avaliar cap 7.
```

---

### Cenario 2: Interrupcao em Gate REVIEW

**Situacao:** Gate retornou REVIEW e aguarda decisao do autor.

**Checkpoint:** Gate avaliado, mas autor nao decidiu se prossegue ou melhora.

**Acao:**
- Reapresentar resultado do gate
- Listar items para decisao
- Aguardar input do autor
- Prosseguir conforme escolha

**Exemplo:**
```
Gate Transform→Load retornou REVIEW:
• 1 issue critico: tense inconsistente
• 2 issues moderados: subplot, geografia

Opcoes:
1. Corrigir issues e re-avaliar
2. Prosseguir com FLAGs (nao recomendado)

Escolha: [1/2]
```

---

### Cenario 3: Bloqueio Ativo (BLOCKED)

**Situacao:** Gate retornou BLOCK e pipeline nao pode prosseguir ate correcao.

**Checkpoint:** Gate bloqueou, aguardando correcao obrigatoria.

**Acao:**
- Identificar criterio que causou BLOCK
- Listar o que esta faltando
- Instruir autor sobre como corrigir
- Re-avaliar gate apos correcao
- Nao permitir skip

**Exemplo:**
```
❌ PIPELINE BLOQUEADO

Gate: Extract→Transform
Criterio faltante: Conflito central nao articulado

Para desbloquear:
1. Revisar premissa com @muse
2. Definir conflito externo E interno claramente
3. Re-executar gate com *check-gate extract-to-transform

Nao e possivel prosseguir ate correcao.
```

---

### Cenario 4: Interrupcao em Revision Loop

**Situacao:** Pipeline parou no meio de iteracao Editor ↔ Critic.

**Checkpoint:** Critic avaliou capitulo (score < 7.0), Editor ainda nao revisou.

**Acao:**
- Identificar capitulo em revisao
- Identificar numero da iteracao atual
- Carregar feedback do Critic
- Retomar Editor para aplicar feedback
- Continuar loop ate score >= 7.0 ou max 3 iteracoes

**Exemplo:**
```
Revision Loop - Capitulo 5

Iteracao atual: 2/3
Score atual: 6.7
Feedback do Critic: "Dialogo melhorou, mas ritmo ainda lento no meio"

Retomando:
→ @editor aplicara feedback sobre ritmo
→ @critic avaliara novamente
→ Se score >= 7.0: aprovar capitulo
→ Se score < 7.0: iteracao 3 (ultima chance)
```

---

### Cenario 5: Erro de Agente

**Situacao:** Agente retornou erro ou output invalido.

**Checkpoint:** Agente anterior completou, atual falhou.

**Acao:**
- Identificar qual agente falhou e por que
- Se erro recuperavel: reiniciar agente
- Se erro critico: notificar autor e pausar
- Salvar diagnostico no pipeline-state

**Exemplo:**
```
⚠ ERRO DETECTADO

Agente: @scribe
Capitulo: 12
Erro: Output incompleto (parou no meio do capitulo)

Acao:
→ Reiniciando @scribe para capitulo 12
→ Input preservado (outline + research + contexto anterior)
→ Se erro persistir: marcar FLAG e prosseguir manualmente

Tentativa 1/3...
```

---

### Cenario 6: Mudanca Manual no Book State

**Situacao:** Autor editou manualmente Book State durante pipeline pausado.

**Checkpoint:** Pipeline-state desatualizado em relacao ao Book State.

**Acao:**
- Detectar divergencia entre pipeline-state e Book State
- Listar diferencas encontradas
- Perguntar ao autor como proceder:
  - Aceitar mudancas manuais e adaptar pipeline
  - Reverter mudancas e retomar do checkpoint
  - Recomecar pipeline do zero
- Validar consistencia antes de prosseguir

**Exemplo:**
```
⚠ MUDANCAS MANUAIS DETECTADAS

Pipeline State indica: 18 capitulos planejados
Book State atual indica: 22 capitulos na estrutura

Possivel causa: Autor editou estrutura manualmente

Opcoes:
1. Adaptar pipeline para 22 capitulos (aceitar mudanca)
2. Reverter para 18 capitulos (checkpoint anterior)
3. Recomecar pipeline do zero com nova estrutura

Sua escolha: [1/2/3]
```

## Guidelines

### Checkpoints Automaticos

Pipeline salva checkpoint nos seguintes momentos:

**Extract Stage:**
- Apos @muse completar
- Apos @researcher completar
- Apos gate extract-to-transform

**Transform Stage:**
- Apos @architect completar
- Apos cada capitulo aprovado
- Apos cada gate de revision loop
- Apos gate transform-to-load

**Load Stage:**
- Apos @formatter completar
- Apos @publisher completar

**Total:** ~30-50 checkpoints em pipeline completo.

### Tempo de Expiracao

Pipeline-state nao expira, mas alertas sao emitidos:

- **< 24h:** Resume normal
- **1-7 dias:** Alerta de Book State possivelmente desatualizado
- **> 7 dias:** Recomenda validacao manual antes de resume

### Validacao de Integridade

Antes de resume, validar:

```yaml
integrity_checks:
  pipeline_state_exists: true
  book_state_exists: true
  pipeline_state_valid_yaml: true
  checkpoints_consistent: true
  no_corrupted_data: true
  agents_available: true

  warnings:
    - "Ultimo checkpoint tem 3 dias - validar Book State"

  errors: []

  can_resume: true
```

Se `can_resume: false`, listar erros e instruir correcao.

### Modo Manual (ChatGPT/Tess.ai)

Como pipeline-state nao e persistido automaticamente:

**ChatGPT:**
- Pipeline-state vive na memoria da conversa
- Se conversa expirar: pedir ao autor para copiar ultimo pipeline-state visible
- Resume a partir do state fornecido

**Tess.ai:**
- Autor deve salvar pipeline-state em arquivo local
- Ao retomar, fornecer arquivo: `*resume --state=pipeline-state.yaml`
- Orchestrator carrega e valida state

## Exemplo de Uso

```
Autor: *resume

Orchestrator:
🔍 Localizando pipeline state...
✓ Pipeline state encontrado

📊 Analisando progresso...

Projeto: Livro Romance Historico - Epoca Vitoriana
Interrupcao: Ha 4 horas (pausado manualmente)

Status:
✓ Extract: COMPLETO
✓ Gate 1: PASS (score 8.5)
✓ Architect: COMPLETO (30 capitulos)
📍 Transform: EM ANDAMENTO
  • 12 capitulos escritos e aprovados
  • 1 capitulo em revision loop (cap 8, iteracao 2/3, score 6.9)
  • 17 capitulos restantes

Bloqueios: Nenhum ✓
Reviews: Nenhum ✓

Proximo passo:
→ Continuar revision loop cap 8
→ @editor aplicara feedback do Critic
→ @critic reavaliara
→ Se aprovado: prosseguir cap 9

Retomar pipeline? [s]

✓ Pipeline retomado
→ Executando @editor para cap 8 (iteracao 3/3)...
```

---

**Comando do Orchestrator:** `*resume`
**Versao:** 2.0.0
**Compativel com:** AIOS, ChatGPT Custom GPTs, Tess.ai
