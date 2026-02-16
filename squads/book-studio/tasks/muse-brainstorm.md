---
task: Brainstorm de Ideias
responsavel: "@muse"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - genre: Genero do livro (ficcao, nao-ficcao, tecnico, poesia, etc.)
  - theme: Tema ou area (opcional)
  - constraints: Restricoes ou preferencias do autor
Saida: |
  - ideas: Lista de 5-10 ideias com titulo provisorio
  - top_3: Top 3 mais promissoras com justificativa
  - selected: Ideia escolhida pelo autor para desenvolver
handoff_schema: schemas/handoff-muse-to-architect.yaml
memory_sections: [meta, premissa]
---

# *brainstorm

Sessao interativa de brainstorming para gerar ideias de livro.

## Flow

1. Perguntar genero desejado e preferencias
2. Gerar 5-10 ideias com titulo provisorio, logline e potencial
3. Apresentar como lista numerada
4. Autor escolhe top 3
5. Aprofundar top 3 com premissa expandida
6. Autor seleciona a ideia final
7. Entregar brief criativo para proximo passo

## Tecnicas por Genero

### Ficcao
- What-if: E se [situacao impossivel] acontecesse?
- Character-first: Um personagem com [caracteristica] enfrenta [conflito]
- World-first: Um mundo onde [regra] existe e [consequencia]

### Nao-ficcao
- Gap analysis: O que falta no mercado sobre [tema]?
- Audience-first: O que [publico] precisa saber sobre [tema]?
- Contrarian: O oposto do senso comum sobre [tema]

### Tecnico
- Problem-solution: [Problema] que [publico] enfrenta resolvido com [abordagem]
- Tutorial: Guia completo de [tecnologia/skill] para [nivel]

### Poesia
- Image-first: Explorar [imagem central] em multiplas formas
- Emotion-first: Mapear [emocao] atraves de [contexto]

## Output Format

Para cada ideia:
- **Titulo provisorio**
- **Logline** (1-2 frases)
- **Genero/subgenero**
- **Publico-alvo**
- **Potencial** (1-5 estrelas)
- **Por que funciona** (1 frase)
