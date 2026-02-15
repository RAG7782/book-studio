# Padroes de Escrita — Book Studio

## Formatacao de Manuscrito

### Markdown
- H1 (`#`) = Titulo do livro
- H2 (`##`) = Partes (se houver)
- H3 (`###`) = Capitulos
- H4 (`####`) = Subcapitulos (nao-ficcao)
- Separador de cena: `---`
- Enfase: `*italico*` para pensamentos internos e termos estrangeiros
- Negrito: `**negrito**` para termos-chave (apenas nao-ficcao)

### Dialogo (pt-BR)
- Travessao (—) para falas, NAO aspas
- Beat de acao na mesma linha
- Nova fala = novo paragrafo

```
— Voce tem certeza? — perguntou, cruzando os bracos.
— Absoluta — respondeu sem hesitar.
```

### Paragrafos
- Indentacao por tab no inicio (exceto primeiro paragrafo pos-heading)
- Linha em branco entre paragrafos no Markdown
- Tamanho: 3-8 linhas (variar para ritmo)

## Convencoes Linguisticas

- Novo acordo ortografico (2009)
- Crase: usar corretamente
- Gerundismo: evitar ("estar fazendo" → "fazer")
- Voz passiva: minimizar
- Repeticoes: evitar em paragrafos consecutivos

## Organizacao de Arquivos

```
manuscripts/
  [nome-do-livro]/
    00-front-matter.md
    01-capitulo-01.md
    02-capitulo-02.md
    ...
    99-back-matter.md
    notes/
    research/
```
