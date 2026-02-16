---
workflow: Rascunho Rapido
description: "Workflow simplificado para produzir rascunho rapido"
type: simplified
stages: [extract-light, transform-light]
orchestrator_config:
  route: quick-draft
  stages: [extract-light, transform-light]
  gates: []  # no gates in quick draft
  revision_loop: null  # skip revision
  skip_agents: [researcher, editor, critic, formatter, publisher]
  minimal: true
---

# Workflow de Rascunho Rapido

Pipeline simplificado para quando o autor quer escrever rapido,
sem todo o processo editorial. Ideal para NaNoWriMo, primeiro rascunho
exploratorio, ou projetos com deadline apertado.

## Pipeline

```
Muse (premise rapida — 10 min)
  ↓
Architect (outline minimo — beats essenciais)
  ↓
Scribe (draft-chapter — todos os capitulos sequenciais)
  ↓
[DONE — rascunho completo para refinar depois]
```

## Regras do Rascunho Rapido

1. **Nao parar para pesquisar** — Marcar [PESQUISAR] e seguir
2. **Nao revisar** — Seguir em frente, revisar depois
3. **Nao perfeccionismo** — Rascunho ruim > pagina em branco
4. **Manter momentum** — Escrever todo dia, mesmo que pouco
5. **Outline flexivel** — Pode mudar conforme descobre a historia

## Quando Usar

- Primeiro rascunho exploratorio
- NaNoWriMo (50k palavras em 30 dias)
- Testar se uma ideia funciona como livro
- Deadline apertado
- Bloqueio criativo (escrever sem julgamento)

## Apos o Rascunho

Quando o rascunho rapido estiver completo, rodar o pipeline completo
a partir da fase TRANSFORM (Editor → Critic → Formatter → Publisher).
