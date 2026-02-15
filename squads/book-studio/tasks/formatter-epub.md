---
task: Estrutura EPUB
responsavel: "@formatter"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - manuscript_md: Manuscrito em Markdown
  - metadata: Metadados do livro
  - style: Estilo visual (classic, modern, minimal)
Saida: |
  - epub_structure: Estrutura de arquivos EPUB
  - css: Stylesheet para o EPUB
  - opf: Arquivo de metadados OPF
---

# *epub

Gerar estrutura EPUB 3 a partir do manuscrito formatado.

## Flow

1. Converter Markdown para XHTML por capitulo
2. Gerar stylesheet CSS editorial
3. Criar content.opf (metadados + spine)
4. Gerar toc.ncx e nav.xhtml
5. Organizar estrutura de diretorios EPUB
6. Listar ferramentas para empacotamento
7. Entregar estrutura pronta

## Estrutura EPUB 3

```
book.epub/
├── mimetype
├── META-INF/
│   └── container.xml
├── OEBPS/
│   ├── content.opf
│   ├── toc.ncx
│   ├── nav.xhtml
│   ├── css/
│   │   └── style.css
│   ├── text/
│   │   ├── cover.xhtml
│   │   ├── title.xhtml
│   │   ├── toc.xhtml
│   │   ├── ch01.xhtml
│   │   ├── ch02.xhtml
│   │   └── ...
│   └── images/
│       └── cover.jpg
```

## Estilos Disponiveis
- **Classic**: Serif, margens generosas, capitulares
- **Modern**: Sans-serif limpa, espacamento aberto
- **Minimal**: Ultra-limpo, foco no texto
