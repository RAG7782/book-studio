---
task: Worldbuilding
responsavel: "@researcher"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - world_type: Tipo de mundo (fantasia, sci-fi, historico, contemporaneo-alternativo)
  - premise: Premissa do livro
  - scope: Escopo do worldbuilding (minimal, standard, extensive)
Saida: |
  - world_bible: Biblia do mundo completa
  - rules: Regras do mundo / sistema de magia
  - locations: Locais principais
  - cultures: Culturas e sociedades
handoff_schema: schemas/handoff-researcher-to-architect.yaml
memory_sections: [mundo, pesquisa]
---

# *worldbuild

Construir universo ficcional consistente e internamente logico.

## Flow

1. Definir tipo e escopo do mundo
2. Estabelecer regras fundamentais (fisica, magia, tecnologia)
3. Mapear geografia e locais importantes
4. Criar culturas, politica e economia
5. Definir historia relevante (timeline)
6. Verificar consistencia interna
7. Entregar biblia do mundo

## Camadas de Worldbuilding

### Fisica
- Geografia, clima, biomas
- Recursos naturais
- Leis fisicas (alteradas ou nao)

### Social
- Culturas e povos
- Linguas e comunicacao
- Religioes e crencas
- Hierarquias e poder

### Tecnologica/Magica
- Nivel tecnologico
- Sistema de magia (se houver): fonte, custo, limites, regras
- Impacto na sociedade

### Historica
- Eventos formadores
- Conflitos passados
- Era atual e tensoes

### Cotidiana
- Como as pessoas vivem, comem, trabalham
- Moeda, comercio, transporte
- Costumes e tradicoes
