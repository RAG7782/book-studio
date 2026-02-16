---
task: Planejar Capitulo
responsavel: "@architect"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - chapter_number: Numero do capitulo
  - outline_context: Contexto do outline geral
  - previous_chapter: Resumo do capitulo anterior
Saida: |
  - chapter_plan: Plano detalhado com beats expandidos
  - scenes: Lista de cenas com descricao
  - transitions: Pontos de transicao
handoff_schema: schemas/handoff-architect-to-scribe.yaml
memory_sections: [estrutura]
---

# *chapter-plan

Planejar capitulo individual com beats detalhados e cenas.

## Flow

1. Revisar posicao do capitulo no outline
2. Conectar com capitulo anterior (continuidade)
3. Definir objetivo principal do capitulo
4. Expandir beats em cenas detalhadas
5. Definir ponto de virada do capitulo
6. Planejar gancho final
7. Entregar plano cena-a-cena

## Cena-a-Cena

Para cada cena:
- **Local**: Onde acontece
- **Personagens**: Quem esta presente
- **Objetivo**: O que a cena realiza
- **Conflito**: Tensao ou obstáculo
- **Mudanca**: O que muda (emocao, informacao, relacao)
- **Sensorial**: Atmosfera dominante
- **Palavras estimadas**: ~500-2000
