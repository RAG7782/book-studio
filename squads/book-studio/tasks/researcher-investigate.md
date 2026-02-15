---
task: Pesquisa Tematica
responsavel: "@researcher"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - topic: Tema a pesquisar
  - depth: Profundidade (overview, moderate, deep)
  - genre_context: Contexto do genero do livro
Saida: |
  - findings: Compilacao de descobertas organizadas
  - sources: Lista de fontes e referencias
  - recommendations: Sugestoes para o manuscrito
---

# *investigate

Pesquisa tematica para fundamentar o livro com informacoes precisas.

## Flow

1. Definir escopo da pesquisa (tema, periodo, geografia, publico)
2. Identificar areas-chave a investigar
3. Pesquisar e compilar informacoes
4. Organizar por relevancia e confiabilidade
5. Criar banco de referencias formatado
6. Destacar insights uteis para o manuscrito
7. Entregar compilacao estruturada

## Niveis de Profundidade

### Overview
- Contexto geral do tema
- Fatos e dados principais
- 5-10 fontes referenciais

### Moderate
- Contexto + nuances
- Multiplas perspectivas
- Dados estatisticos
- 10-20 fontes com anotacoes

### Deep
- Analise aprofundada
- Fontes primarias quando possivel
- Contradicoes e debates
- Timeline historica
- 20+ fontes anotadas e categorizadas

## Output
- Resumo executivo (1 pagina)
- Banco de informacoes categorizado
- Lista de fontes (formato bibliografico)
- Recomendacoes para o manuscrito
