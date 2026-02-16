---
task: Gerar Premissa
responsavel: "@muse"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - idea: Ideia base do livro
  - genre: Genero
  - tone: Tom desejado
Saida: |
  - logline: Logline de 1-2 frases
  - premise: Premissa expandida (1 paragrafo)
  - pitch: Pitch de elevador (30 segundos)
  - comparables: 2-3 titulos comparaveis
handoff_schema: schemas/handoff-muse-to-architect.yaml
memory_sections: [meta, premissa]
---

# *premise

Gerar premissa profissional para o livro: logline, pitch e posicionamento.

## Flow

1. Receber ideia e contexto
2. Gerar 3 versoes de logline
3. Autor escolhe ou combina
4. Expandir em premissa de 1 paragrafo
5. Criar pitch de elevador (30s)
6. Identificar titulos comparaveis (comp titles)
7. Definir publico-alvo primario e secundario

## Formulas de Logline

### Ficcao
- "Quando [protagonista] enfrenta [incidente], deve [objetivo] antes que [stakes]"
- "Em [mundo], [protagonista com caracteristica] descobre [revelacao] que [consequencia]"

### Nao-ficcao
- "[Livro] revela [insight] sobre [tema] que vai mudar como voce [acao]"
- "O guia definitivo para [publico] que quer [resultado] usando [metodo]"

## Comp Titles
- Formato: "[Titulo A] encontra [Titulo B]"
- Usar titulos conhecidos do genero
- Maximo 3 comparaveis
