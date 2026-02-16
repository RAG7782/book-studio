---
task: Ver Status do Pipeline
responsavel: "@orchestrator"
responsavel_type: system
atomic_layer: task
elicit: false
Entrada: "Pipeline state (automatico)"
Saida: "Status visual do pipeline com progresso"
orchestrator_command: "*status"
memory_sections:
  reads: [meta, pipeline-state]
  writes: []
---

# Ver Status do Pipeline

O Orchestrator apresenta visualizacao clara e atualizada do progresso do pipeline, permitindo ao autor acompanhar execucao em tempo real.

## Flow

1. **Carregar Pipeline State**
   - Carregar pipeline-state atual (automatico ou do arquivo)
   - Validar que pipeline existe e esta ativo
   - Se pipeline nao iniciado: retornar mensagem apropriada
   - Se pipeline completo: mostrar summary final

2. **Gerar Visualizacao do Progresso**
   - Criar representacao ASCII visual dos 3 stages
   - Indicar progresso percentual de cada stage
   - Marcar stage atual com indicador visual
   - Mostrar status geral (running/paused/blocked/completed)

3. **Listar Agentes Executados**
   - Para cada agente no workflow:
     - Status: ✅ completado, ⏳ em andamento, ⏸ pausado, ❌ erro, ⏱ pendente
     - Timestamp de inicio/fim (se aplicavel)
     - Output gerado (resumo)
     - Score atribuido (se aplicavel)

4. **Mostrar Gates Avaliados**
   - Listar gates ja avaliados com resultado
   - Indicar gates pendentes
   - Destacar se algum gate esta bloqueando

5. **Mostrar Revision Loops**
   - Se em Transform stage, mostrar status de revision loops
   - Listar capitulos em revisao com iteracao atual
   - Mostrar scores e progresso de melhoria

6. **Listar Bloqueios Ativos**
   - Se existirem bloqueios, listar com destaque
   - Indicar o que e necessario para desbloquear
   - Priorizar acoes urgentes

7. **Estimar Proximo Passo**
   - Identificar qual sera o proximo agente/gate/acao
   - Estimar tempo restante (se possivel)
   - Indicar o que autor pode fazer para acelerar

## Output

### Visualizacao Compacta

```
📊 PIPELINE STATUS

EXTRACT [████████████████████] 100% ✅  →  TRANSFORM [████████░░░░] 60% ⏳  →  LOAD [░░░░░░░░░░░░] 0% ⏱

Status: EM ANDAMENTO | Tempo decorrido: 4h 32min | Estimativa restante: ~3h
```

### Visualizacao Detalhada

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 BOOK STUDIO PIPELINE STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Projeto: Romance Historico - Epoca Vitoriana
Workflow: fiction-standard + research-heavy + romance-focus
Iniciado: 16/02/2026 10:00
Status: EM ANDAMENTO ⏳

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROGRESSO GERAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXTRACT [████████████████████] 100% ✅  →  TRANSFORM [████████░░░░] 60% ⏳  →  LOAD [░░░░░░░░░░░░] 0% ⏱

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXTRACT STAGE - COMPLETO ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ @muse          Concluido em 16/02 10:45 (+45min)
   └─ Premissa enriquecida: Protagonista definida, conflito articulado

✅ @researcher    Concluido em 16/02 11:30 (+45min)
   └─ 6 research artifacts coletados (epoca vitoriana, costumes, linguagem)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY GATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Extract → Transform    PASS (score 8.5/10) - 16/02 11:35
⏱ Revision Loops         Pendente (2 capitulos em revisao)
⏱ Transform → Load       Pendente (aguardando manuscrito completo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRANSFORM STAGE - EM ANDAMENTO ⏳ (60%)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ @architect     Concluido em 16/02 12:00 (+30min)
   └─ Estrutura criada: 30 capitulos, 3 atos, 12 beats principais

⏳ @scribe         EM ANDAMENTO - Capitulo 18/30
   ├─ Capitulos escritos: 18
   ├─ Capitulos aprovados: 15
   ├─ Em revisao: 2 (cap 12, cap 16)
   └─ Flagged: 1 (cap 8, score 6.7 apos 3 iteracoes)

Revision Loops Ativos:

  📝 Capitulo 12 - Iteracao 2/3 (score atual: 6.8)
     └─ Critic: "Dialogo melhorou, mas cena de confronto precisa mais tensao"
     └─ Proximo: @editor aplicar feedback

  📝 Capitulo 16 - Iteracao 1/3 (score atual: 6.5)
     └─ Critic: "Ritmo lento, descricao excessiva da paisagem"
     └─ Proximo: @editor cortar descricao e acelerar ritmo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOAD STAGE - PENDENTE ⏱
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏱ @formatter      Aguardando manuscrito completo
⏱ @publisher      Aguardando formatter

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
METRICAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tempo decorrido:        4h 32min
Progresso geral:        60%
Handoffs realizados:    22
Revision loops:         5 (2 ativos, 3 completos)
Capitulos flagged:      1
Score medio (aprovados): 7.4/10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLOQUEIOS E ALERTAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠ 1 capitulo flagged (cap 8) - score 6.7 apos 3 iteracoes
  └─ Acao: Revisar manualmente ou aceitar score abaixo do ideal

Nenhum bloqueio ativo ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROXIMO PASSO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

→ @editor revisando capitulo 12 (iteracao 2/3)
→ Estimativa para completar Transform: ~3h (12 capitulos restantes)
→ Gate Transform→Load sera avaliado automaticamente ao terminar

Use *resume para continuar pipeline
Use *check-gate revision-loop para detalhes dos loops ativos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Visualizacao Minima (Durante Execucao)

Para consultas rapidas durante execucao:

```
📊 STATUS RAPIDO

EXTRACT ✅ → TRANSFORM ⏳ 60% → LOAD ⏱

Capitulo atual: 18/30
Revision loops ativos: 2
Bloqueios: 0
Proximo: @editor (cap 12)
```

## Formatos de Status por Contexto

### Status: Pipeline Nao Iniciado

```
📊 PIPELINE STATUS

Status: NAO INICIADO

Nenhum pipeline ativo detectado.

Para iniciar:
*run-pipeline --genre="[genero]" --premise="[premissa opcional]"

Exemplo:
*run-pipeline --genre="Romance Historico" --premise="Uma governanta se apaixona pelo Lord da mansao na era vitoriana"
```

---

### Status: Pipeline Pausado

```
📊 PIPELINE STATUS

EXTRACT [████████████████████] 100% ✅  →  TRANSFORM [████████░░░░] 60% ⏸  →  LOAD [░░░░░░░░░░░░] 0% ⏱

Status: PAUSADO ⏸
Pausado em: 16/02/2026 14:30 (ha 2 horas)
Motivo: Pausado manualmente pelo autor

Ultimo checkpoint: capitulo-15-approved (16/02 14:25)

Para retomar:
*resume
```

---

### Status: Pipeline Bloqueado

```
📊 PIPELINE STATUS

EXTRACT [████████████████████] 100% ✅  →  TRANSFORM [░░░░░░░░░░░░] 0% 🔴  →  LOAD [░░░░░░░░░░░░] 0% ⏱

Status: BLOQUEADO 🔴

Gate: Extract → Transform
Resultado: BLOCK
Criterios faltantes:
  ❌ Conflito central nao articulado
  ❌ Research insuficiente (1/2 artifacts minimos)

Acoes necessarias:
1. Executar @muse novamente para definir conflito
2. Executar @researcher para coletar mais research
3. Re-avaliar gate com *check-gate extract-to-transform

Pipeline nao pode prosseguir ate correcao.
```

---

### Status: Pipeline Completo

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 PIPELINE COMPLETO ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Projeto: Romance Historico - Epoca Vitoriana
Concluido em: 16/02/2026 22:30
Tempo total: 12h 30min

EXTRACT [████████████████████] 100% ✅  →  TRANSFORM [████████████████████] 100% ✅  →  LOAD [████████████████████] 100% ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESUMO EXECUTIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Agentes executados:       8/8
Capitulos produzidos:     30
Score medio final:        7.6/10
Revision loops:           8 (media 1.2 iteracoes/capitulo)
Capitulos flagged:        2 (scores 6.7 e 6.8)
Gates avaliados:          3/3 (todos PASS)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELIVERABLES GERADOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Manuscript final           romance-historico-manuscript.md (87.423 palavras)
✅ EPUB formatado            romance-historico.epub
✅ Metadata                  metadata.yaml
✅ Synopsis curta            synopsis-short.txt (150 palavras)
✅ Synopsis longa            synopsis-long.txt (500 palavras)
✅ Blurb contracapa          blurb.txt
✅ Keywords e categorias     marketing-metadata.yaml
✅ Cover prompt              cover-prompt.txt
✅ Marketing copy            marketing-copy.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMENDACOES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Revisar manualmente capitulos 8 e 14 (flagged com scores 6.7 e 6.8)
• Considere contratar editor humano para polish final
• EPUB pronto para upload em plataformas (KDP, Draft2Digital, etc)
• Marketing copy otimizado para Amazon AMS e social media

Ver relatorio completo: pipeline-report-2026-02-16.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Guidelines

### Atualizacao em Tempo Real

**AIOS (automatico):**
- Status atualiza automaticamente a cada checkpoint
- Autor pode consultar `*status` a qualquer momento sem interromper

**ChatGPT (manual):**
- Status exibido quando autor solicitar
- Baseado na memoria da conversa

**Tess.ai (arquivo):**
- Status baseado no pipeline-state.yaml mais recente
- Autor deve salvar state periodicamente

### Nivel de Detalhe

Comando aceita flags opcionais:

```
*status              # Visualizacao completa (default)
*status --compact    # Visualizacao compacta
*status --minimal    # Visualizacao minima (progresso + proximo passo)
*status --agents     # Foco em agentes executados
*status --gates      # Foco em quality gates
*status --metrics    # Foco em metricas numericas
```

### Cores e Emojis (Opcional)

Para interfaces que suportam:

- 🟢 ✅ Verde: Completo, aprovado, pass
- 🟡 ⏳ Amarelo: Em andamento, review
- 🔴 ❌ Vermelho: Bloqueado, erro, block
- ⚪️ ⏱ Cinza: Pendente, aguardando
- ⏸ Azul: Pausado

### Estimativas de Tempo

Baseadas em historico:

```
Tempo medio por agente (baseado em execucoes anteriores):
• @muse: 30-45min
• @researcher: 30-60min (depende de research depth)
• @architect: 20-40min
• @scribe: 15-25min por capitulo
• @editor: 10-15min por capitulo
• @critic: 5-10min por capitulo
• @formatter: 20-30min
• @publisher: 15-25min

Estimativa dinamica ajustada por:
- Complexidade do genero
- Numero de capitulos restantes
- Historico de revision loops
```

## Exemplo de Uso

```
Autor: *status --compact

Orchestrator:

📊 STATUS COMPACTO

EXTRACT ✅ → TRANSFORM ⏳ 75% → LOAD ⏱

Capitulo: 22/30 | Loops: 1 ativo | Flags: 1 | Bloqueios: 0
Tempo: 6h | Restante: ~2h | Proximo: @scribe cap 23

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Autor: *status --gates

Orchestrator:

📊 QUALITY GATES STATUS

✅ Extract → Transform
   Score: 8.5/10 | Resultado: PASS
   Avaliado: 16/02 11:35

⏳ Revision Loops (1 ativo)
   Cap 22: Iteracao 1/3 | Score: 6.6
   Feedback: "Dialogo artificial, acao confusa"
   Proximo: @editor aplicar feedback

⏱ Transform → Load
   Status: Aguardando manuscrito completo
   Estimativa: ~2h (8 capitulos restantes)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Comando do Orchestrator:** `*status [--compact|--minimal|--agents|--gates|--metrics]`
**Versao:** 2.0.0
**Compativel com:** AIOS, ChatGPT Custom GPTs, Tess.ai
