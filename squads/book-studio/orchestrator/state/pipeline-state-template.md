# Pipeline State — [Titulo do Livro]

> Gerado pelo Orchestrator do Book Studio
> Ultima atualizacao: [DATA]

## Status Geral

| Campo | Valor |
|-------|-------|
| **Projeto** | [Titulo] |
| **Genero** | [genero/subgenero] |
| **Workflow** | [workflow selecionado] |
| **Fase Atual** | [Extract/Transform/Load] |
| **Status** | [em_andamento/pausado/bloqueado/completo] |
| **Inicio** | [data] |
| **Ultima Atividade** | [data] |

## Progresso por Stage

### Extract
| Agente | Status | Tasks Completas | Observacoes |
|--------|--------|-----------------|-------------|
| Muse | [pendente/em_andamento/completo/pulado] | [lista] | |
| Researcher | [pendente/em_andamento/completo/pulado] | [lista] | |

**Gate Extract→Transform**: [nao_avaliado/pass/review/block]

### Transform
| Agente | Status | Tasks Completas | Observacoes |
|--------|--------|-----------------|-------------|
| Architect | [status] | [lista] | |
| Scribe | [status] | [lista] | Cap [n]/[total] |
| Editor | [status] | [lista] | |
| Critic | [status] | [lista] | Score: [n]/10 |

**Revision Loop**: Iteracao [n]/3 | Score atual: [n]/10
**Gate Transform→Load**: [nao_avaliado/pass/review/block]

### Load
| Agente | Status | Tasks Completas | Observacoes |
|--------|--------|-----------------|-------------|
| Formatter | [status] | [lista] | |
| Publisher | [status] | [lista] | |

## Historico de Gates

| Gate | Data | Resultado | Detalhes |
|------|------|-----------|----------|
| Extract→Transform | [data] | [pass/review/block] | [detalhes] |
| Revision Loop (iter 1) | [data] | [pass/iterate/force_exit] | Score: [n] |
| Transform→Load | [data] | [pass/review/block] | [detalhes] |

## Handoffs Realizados

| # | De | Para | Schema | Data | Status |
|---|-----|------|--------|------|--------|
| 1 | Muse | Architect | handoff-muse-to-architect.yaml | [data] | [ok/warning] |

## Bloqueios Ativos

| Bloqueio | Gate | Itens Pendentes | Responsavel |
|----------|------|-----------------|-------------|
| [nenhum ou descricao] | | | |

## Log de Execucao

| Data | Agente | Acao | Resultado |
|------|--------|------|-----------|
| [data] | Orchestrator | Pipeline iniciado | Workflow: [nome] |

---
*Pipeline State gerenciado pelo Orchestrator v2.0.0*
