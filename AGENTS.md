# AGENTS.md

## Squad Book Studio

Pipeline ETL para escrita de livros de todos os generos.

### Agentes

| Agente | Fase | Especialidade |
|--------|------|---------------|
| Muse | Extract | Ideacao & Conceito |
| Researcher | Extract | Pesquisa & Worldbuilding |
| Architect | Transform | Estrutura & Outline |
| Scribe | Transform | Escrita & Rascunhos |
| Editor | Transform | Revisao & Consistencia |
| Critic | Transform | Analise Critica & Feedback |
| Formatter | Load | Producao (EPUB/PDF) |
| Publisher | Load | Distribuicao & Marketing |

### Ativacao

Os agentes sao ativados via AIOS squad-loader ou diretamente por referencia aos arquivos em `squads/book-studio/agents/`.

### Tasks

23 tasks distribuidas entre os 8 agentes cobrindo todo o pipeline editorial.
