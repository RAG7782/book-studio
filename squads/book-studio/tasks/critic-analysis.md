---
task: Analise Critica
responsavel: "@critic"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - manuscript: Manuscrito ou trecho para analisar
  - genre: Genero do livro
  - target_audience: Publico-alvo
Saida: |
  - analysis: Analise critica completa
  - strengths: Pontos fortes
  - weaknesses: Pontos fracos
  - score: Avaliacao por dimensao (1-10)
  - recommendations: Recomendacoes priorizadas
handoff_schema: schemas/handoff-critic-feedback.yaml
memory_sections: [feedback]
---

# *analysis

Analise critica completa do manuscrito.

## Flow

1. Ler manuscrito completo
2. Avaliar por cada dimensao
3. Identificar pontos fortes e fracos
4. Comparar com convencoes do genero
5. Gerar recomendacoes acionaveis priorizadas
6. Entregar analise formatada

## Dimensoes de Avaliacao

| Dimensao | O que avalia |
|----------|-------------|
| **Premissa** | Originalidade, clareza, gancho |
| **Estrutura** | Organizacao, pacing, arco |
| **Personagens** | Profundidade, arco, voz distinta |
| **Prosa** | Estilo, ritmo, clareza, beleza |
| **Dialogo** | Naturalidade, subtexto, voz unica |
| **Worldbuilding** | Consistencia, imersao, detalhes |
| **Tema** | Profundidade, integracao, ressonancia |
| **Engajamento** | Vontade de continuar lendo (page-turner?) |
| **Mercado** | Potencial comercial, posicionamento |

## Score Card
```
Premissa:     ████████░░  8/10
Estrutura:    ██████░░░░  6/10
Personagens:  █████████░  9/10
...
GERAL:        ███████░░░  7/10
```

## Formato de Feedback
- **O que funciona**: Exemplos concretos do texto
- **O que nao funciona**: Exemplos + por que + como melhorar
- **Prioridade**: 🔴 Urgente | 🟡 Importante | 🟢 Nice-to-have
