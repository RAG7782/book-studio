---
task: Formatar Markdown
responsavel: "@formatter"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - manuscript: Manuscrito em texto
  - style: Estilo de formatacao (standard, academic, technical)
Saida: |
  - formatted: Manuscrito em Markdown estruturado
  - toc: Table of Contents gerada
handoff_schema: schemas/handoff-formatter-to-publisher.yaml
memory_sections: [progresso]
---

# *markdown

Formatar manuscrito em Markdown estruturado e limpo.

## Flow

1. Analisar estrutura do manuscrito
2. Aplicar hierarquia de headings (H1 = titulo, H2 = partes, H3 = capitulos)
3. Formatar dialogos, citacoes, notas
4. Gerar Table of Contents
5. Aplicar front matter e back matter
6. Verificar formatacao consistente
7. Entregar Markdown limpo e navegavel

## Estrutura Markdown

```markdown
# Titulo do Livro

## Front Matter
### Dedicatoria
### Epigrafe

## Parte I - Nome da Parte
### Capitulo 1 - Titulo
Texto do capitulo...

> Citacao em bloco

— Dialogo com travessao

### Capitulo 2 - Titulo
...

## Back Matter
### Agradecimentos
### Sobre o Autor
### Bibliografia
```

## Convencoes
- Separador de cena: `---` ou `***`
- Enfase: *italico* para pensamentos internos
- Negrito: **negrito** para termos-chave (nao-ficcao)
- Notas: [^1] footnotes para referencias
- Imagens: `![descricao](path)` para ilustracoes
