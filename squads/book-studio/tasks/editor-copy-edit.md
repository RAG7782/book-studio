---
task: Copy Editing
responsavel: "@editor"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - manuscript: Texto para revisar
  - style_guide: Guia de estilo (se houver)
  - language: Idioma (pt-BR default)
Saida: |
  - edited: Texto revisado
  - changes: Lista de alteracoes com justificativa
  - stats: Estatisticas (erros por tipo)
---

# *copy-edit

Revisao gramatical, ortografica e estilistica do manuscrito.

## Flow

1. Ler trecho completo para entender voz e estilo
2. Primeira passada: gramatica e ortografia
3. Segunda passada: pontuacao e formatacao
4. Terceira passada: estilo e clareza
5. Gerar lista de alteracoes com justificativa
6. Entregar texto limpo + change log

## Categorias de Revisao

- **Gramatica**: Concordancia, regencia, crase, colocacao pronominal
- **Ortografia**: Typos, acentuacao, hifenizacao
- **Pontuacao**: Virgulas, pontos, travessoes, aspas
- **Estilo**: Repeticoes, verbosidade, cliches, voz passiva excessiva
- **Clareza**: Ambiguidades, frases confusas, referentes vagos
- **Formatacao**: Italicos, negritos, capitalizacao

## Regras de Estilo (pt-BR)
- Dialogo com travessao (—), nao aspas
- Novo acordo ortografico
- Evitar gerundismo
- Preferir voz ativa
