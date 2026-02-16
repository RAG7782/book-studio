---
task: Prompt para Capa
responsavel: "@formatter"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - title: Titulo do livro
  - genre: Genero
  - tone: Tom visual desejado
  - key_elements: Elementos visuais importantes
Saida: |
  - prompt: Prompt detalhado para AI image generation
  - variations: 3 variacoes do prompt
  - typography_notes: Sugestoes de tipografia para titulo
handoff_schema: schemas/handoff-formatter-to-publisher.yaml
memory_sections: [progresso]
---

# *cover-prompt

Gerar prompt profissional para criacao de capa via AI.

## Flow

1. Analisar genero, tom e publico
2. Pesquisar tendencias visuais do genero
3. Definir composicao e elementos-chave
4. Gerar prompt principal detalhado
5. Criar 3 variacoes (estilos diferentes)
6. Sugerir tipografia para titulo e autor
7. Entregar kit de prompts

## Anatomia do Prompt

```
[Estilo artistico], [composicao], [elemento central],
[elementos secundarios], [paleta de cores], [atmosfera],
[iluminacao], [textura], book cover design, [genero] genre,
professional publishing quality, --ar 2:3
```

## Tendencias por Genero
- **Romance**: Tipografia grande, cores quentes, texturas
- **Thriller**: Alto contraste, sombras, tipografia bold
- **Fantasia**: Ilustracao, elementos magicos, paleta rica
- **Nao-ficcao**: Clean, tipografia dominante, cor solida
- **Tecnico**: Minimal, geometrico, cor de destaque
- **Poesia**: Artistico, abstrato, elegante

## Tipografia
- Serif: autoridade, classico, literario
- Sans-serif: moderno, acessivel, tecnico
- Script: romance, elegancia, pessoal
- Display: impacto, genero, personalidade
