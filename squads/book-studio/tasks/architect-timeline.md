---
task: Criar Timeline
responsavel: "@architect"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - story_span: Periodo que a historia cobre
  - key_events: Eventos principais conhecidos
  - parallel_arcs: Arcos paralelos a rastrear
Saida: |
  - timeline: Timeline cronologica completa
  - arc_map: Mapeamento de arcos sobre a timeline
handoff_schema: schemas/handoff-architect-to-scribe.yaml
memory_sections: [timeline]
---

# *timeline

Criar timeline de eventos do livro para manter consistencia temporal.

## Flow

1. Definir periodo total (dias, meses, anos, eras)
2. Plotar eventos principais conhecidos
3. Preencher gaps com eventos conectores
4. Sobrepor arcos de personagens
5. Verificar consistencia temporal
6. Marcar flashbacks/flashforwards se houver
7. Entregar timeline visual e textual

## Formato

```
[DATA/PERIODO] - [EVENTO] - [PERSONAGENS] - [IMPACTO]
     |
     +-- [Sub-evento]
     +-- [Consequencia]
```

## Verificacoes
- Idades consistentes ao longo do tempo
- Viagens possiveis na escala temporal
- Eventos simultaneos nao conflitantes
- Estacoes e clima coerentes com datas
