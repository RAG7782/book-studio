---
task: Revisao Estrutural
responsavel: "@editor"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - manuscript: Manuscrito ou outline
  - genre: Genero
  - intended_structure: Estrutura pretendida
Saida: |
  - review: Analise estrutural completa
  - issues: Problemas identificados
  - suggestions: Sugestoes de reestruturacao
handoff_schema: schemas/handoff-editor-to-critic.yaml
memory_sections: [progresso, feedback]
---

# *structural-review

Revisao da estrutura macro do manuscrito.

## Flow

1. Ler manuscrito completo ou outline detalhado
2. Mapear estrutura atual (atos, capitulos, arcos)
3. Comparar com estrutura pretendida
4. Identificar problemas de pacing, arco, logica
5. Sugerir reestruturacoes especificas
6. Entregar analise com mapa visual

## Pontos de Analise

- **Pacing**: Ritmo equilibrado? Sags no meio?
- **Arco**: Protagonista tem arco completo?
- **Tensao**: Escalonamento adequado ate o climax?
- **Subplots**: Resolvidas? Contribuem para o tema?
- **Midpoint**: Virada de meio efetiva?
- **Climax**: Satisfatorio e preparado?
- **Resolucao**: Fecha as pontas abertas?
- **Proporcao**: Capitulos equilibrados em tamanho?

## Output
Mapa visual de tensao:
```
Cap 1  ██░░░░░░░░  (2/10) Setup
Cap 2  ████░░░░░░  (4/10) Rising
Cap 3  ██████░░░░  (6/10) Complication
...
Cap N  ██████████  (10/10) Climax
```
