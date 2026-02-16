---
task: Escrever Cena
responsavel: "@scribe"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - scene_description: Descricao da cena (do chapter plan)
  - characters: Personagens presentes
  - objective: Objetivo narrativo da cena
  - mood: Atmosfera desejada
Saida: |
  - scene: Cena escrita em prosa
  - word_count: Contagem de palavras
handoff_schema: schemas/handoff-scribe-to-editor.yaml
memory_sections: [progresso]
---

# *write-scene

Escrever cena individual com foco e proposito.

## Flow

1. Entender objetivo da cena no contexto maior
2. Estabelecer cenario e atmosfera
3. Introduzir personagens e tensao
4. Desenvolver conflito ou progressao
5. Atingir mudanca (emocional, informacional, relacional)
6. Fechar com transicao ou gancho

## Elementos de Cena

- **Setting**: Onde e quando — detalhes sensoriais
- **Entrada**: Como o leitor entra na cena
- **Conflito**: O que esta em jogo
- **Dialogo**: Revela personagem, avanca historia
- **Acao**: Movimenta a trama
- **Interiorizacao**: Pensamentos e emocoes do POV
- **Mudanca**: Estado diferente no final vs inicio
- **Saida**: Como a cena termina (corte, fade, cliffhanger)
