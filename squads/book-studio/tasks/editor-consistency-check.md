---
task: Verificacao de Consistencia
responsavel: "@editor"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - manuscript: Manuscrito para verificar
  - character_sheets: Fichas de personagens (se houver)
  - world_bible: Biblia do mundo (se houver)
Saida: |
  - report: Relatorio de consistencia
  - issues: Inconsistencias encontradas
  - fixes: Correcoes sugeridas
handoff_schema: schemas/handoff-editor-to-scribe.yaml
memory_sections: [progresso, feedback]
---

# *consistency-check

Verificar consistencia interna do manuscrito.

## Flow

1. Criar inventario: personagens, locais, datas, fatos
2. Rastrear cada elemento ao longo do manuscrito
3. Verificar consistencia de cada categoria
4. Cruzar com fichas e biblia do mundo
5. Gerar relatorio de inconsistencias
6. Priorizar por gravidade

## Categorias

- **Nomes**: Personagens, locais, organizacoes (grafia consistente)
- **Aparencia**: Descricoes fisicas nao contraditórias
- **Timeline**: Datas, idades, duracoes
- **Geografia**: Distancias, direcoes, layout
- **Fatos**: Informacoes que nao se contradizem
- **Arco**: Personagens nao regridem sem motivo
- **Tom**: Consistencia de voz narrativa
- **Regras do mundo**: Sistema de magia/tecnologia respeitado

## Classificacao
- 🔴 **Critico**: Contradição obvia que o leitor vai notar
- 🟡 **Moderado**: Inconsistência sutil mas detectavel
- 🟢 **Menor**: Detalhe que pode passar despercebido
