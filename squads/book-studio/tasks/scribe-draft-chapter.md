---
task: Rascunho de Capitulo
responsavel: "@scribe"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - chapter_plan: Plano do capitulo (do Architect)
  - voice_profile: Perfil de voz do livro
  - research_notes: Notas de pesquisa relevantes (do Researcher)
  - previous_chapters: Contexto dos capitulos anteriores
Saida: |
  - draft: Rascunho completo do capitulo em prosa
  - word_count: Contagem de palavras
  - notes: Notas para o Editor sobre decisoes tomadas
---

# *draft-chapter

Escrever rascunho completo de um capitulo.

## Flow

1. Revisar plano do capitulo e contexto
2. Calibrar voz, tom e POV
3. Escrever abertura (hook)
4. Desenvolver beats cena-a-cena
5. Manter ritmo e tensao planejados
6. Escrever transicao/gancho final
7. Revisar rapidamente por consistencia
8. Entregar rascunho com notas

## Diretrizes de Escrita

- **Abertura**: Capturar atencao em 3 paragrafos
- **Meio**: Alternar entre acao, dialogo, reflexao
- **Ritmo**: Frases curtas = tensao; longas = reflexao
- **Dialogo**: Cada personagem com voz distinta
- **Descricao**: Sensorial mas economica (nao excessiva)
- **Transicoes**: Cortes limpos entre cenas
- **Fechamento**: Gancho que puxa para o proximo capitulo

## Meta de Palavras
- Capitulo curto: 2.000-3.000 palavras
- Capitulo padrao: 3.000-5.000 palavras
- Capitulo longo: 5.000-8.000 palavras
- Ajustar conforme genero e publico
