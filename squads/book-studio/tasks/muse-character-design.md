---
task: Design de Personagem
responsavel: "@muse"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - role: Papel do personagem (protagonista, antagonista, secundario)
  - genre: Genero do livro
  - story_context: Contexto da historia (opcional)
Saida: |
  - character_sheet: Ficha completa do personagem
  - arc: Arco de transformacao
  - relationships: Mapa de relacionamentos
handoff_schema: schemas/handoff-muse-to-architect.yaml
memory_sections: [meta, personagens]
---

# *character

Design completo de personagem com profundidade psicologica e arco narrativo.

## Flow

1. Definir papel do personagem e contexto
2. Gerar perfil basico (nome, idade, aparencia, background)
3. Aprofundar psicologia (motivacao, medo, desejo, mentira interna)
4. Definir arco de transformacao (estado inicial → catalisador → transformacao → estado final)
5. Mapear relacionamentos com outros personagens
6. Definir voz e maneirismos
7. Entregar ficha completa

## Dimensoes do Personagem

### Externas
- Nome, idade, aparencia fisica
- Ocupacao, status social, local
- Habilidades e limitacoes

### Internas
- Motivacao principal (o que quer)
- Medo central (o que evita)
- Mentira interna (no que acredita que e falso)
- Verdade (o que precisa aprender)
- Ferida emocional (evento formador)

### Arco
- Estado inicial (mundo ordinario)
- Catalisador (incitante)
- Testes e escolhas
- Ponto de virada (crise)
- Transformacao (climax)
- Novo equilibrio (resolucao)

### Voz
- Vocabulario tipico
- Maneirismos verbais
- Tom predominante
- Tics ou habitos
