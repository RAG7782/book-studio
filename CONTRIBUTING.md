# Contribuindo para o Book Studio

Obrigado pelo interesse em contribuir!

## Como Contribuir

1. Fork o repositorio
2. Crie uma branch para sua feature (`git checkout -b feat/minha-feature`)
3. Faca suas alteracoes seguindo os padroes abaixo
4. Commit com mensagem convencional (`feat:`, `fix:`, `docs:`)
5. Abra um Pull Request

## Padroes

- Arquivos em Markdown seguem o `.markdownlint.json`
- YAML validado com `yamllint` (relaxed + line-length 200)
- Tasks seguem arquitetura task-first do AIOS
- Agentes seguem formato com frontmatter YAML

## Estrutura de Squad

Novos componentes devem ser adicionados nas pastas corretas:
- Agentes em `squads/book-studio/agents/`
- Tasks em `squads/book-studio/tasks/`
- Workflows em `squads/book-studio/workflows/`
- Templates em `squads/book-studio/templates/`

## Licenca

Ao contribuir, voce concorda que suas contribuicoes serao licenciadas sob MIT.
