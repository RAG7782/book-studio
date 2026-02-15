---
task: Escrever Dialogo
responsavel: "@scribe"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - characters: Personagens no dialogo
  - context: Situacao e objetivo do dialogo
  - subtext: O que nao esta sendo dito
  - tone: Tom da conversa
Saida: |
  - dialogue: Dialogo escrito com beats de acao
  - character_notes: Notas sobre voz de cada personagem
---

# *dialogue

Escrever ou reescrever dialogo natural e revelador.

## Flow

1. Definir personagens, contexto e objetivo oculto
2. Estabelecer dinamica de poder entre os personagens
3. Escrever dialogo com beats de acao (gestos, olhares, pausas)
4. Garantir que cada personagem soa diferente
5. Verificar que subtexto esta presente
6. Revisar para naturalidade e ritmo

## Principios de Dialogo

- **Subtexto**: O que importa e o que NAO esta sendo dito
- **Voz distinta**: Cada personagem com vocabulario, ritmo e tiques proprios
- **Economia**: Dialogos reais sao mais curtos que parecem
- **Conflito**: Todo dialogo tem tensao (mesmo sutil)
- **Beats**: Acao fisica entre falas (nao so "ele disse")
- **Evitar**: Exposicao disfarçada ("Como voce sabe, Bob...")
- **Info dump**: Nunca usar dialogo para despejar informacao

## Tags de Dialogo
- Preferir "disse/perguntou" (invisiveis)
- Evitar advérbios em tags ("disse raivosamente")
- Usar beats de acao no lugar quando possivel
