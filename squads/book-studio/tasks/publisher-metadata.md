---
task: Gerar Metadados
responsavel: "@publisher"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - title: Titulo do livro
  - author: Autor
  - genre: Genero
  - description: Descricao breve
  - language: Idioma (pt-BR default)
Saida: |
  - metadata: Metadados editoriais completos
  - keywords: Lista de keywords SEO
  - categories: Categorias BISAC/Amazon
handoff_schema: schemas/handoff-muse-to-publisher.yaml
memory_sections: [meta]
---

# *metadata

Gerar metadados editoriais completos para distribuicao.

## Flow

1. Coletar informacoes basicas do livro
2. Gerar subtitle se aplicavel
3. Classificar em categorias BISAC
4. Gerar keywords SEO (7 para Amazon)
5. Definir faixa etaria e conteudo
6. Preparar metadados por plataforma
7. Entregar pacote completo

## Campos

| Campo | Descricao | Exemplo |
|-------|-----------|---------|
| Title | Titulo oficial | "A Ultima Fronteira" |
| Subtitle | Subtitulo (opcional) | "Uma jornada alem do possivel" |
| Author | Nome do autor | "Renato Gomes" |
| Language | Idioma | pt-BR |
| Categories | BISAC (2-3) | FIC028000, FIC028010 |
| Keywords | SEO (7 max) | ficcao cientifica, espaco, ... |
| Description | Sinopse (4000 chars) | Ver *sinopse |
| Age Range | Faixa etaria | Adulto (18+) |
| Page Count | Paginas estimadas | 320 |
| Word Count | Contagem de palavras | 80.000 |
| Series | Serie (se aplicavel) | "Fronteiras #1" |

## Keywords Strategy
- Mix de genero + tema + emocao + comp
- Usar long-tail quando possivel
- Pensar como o leitor buscaria
