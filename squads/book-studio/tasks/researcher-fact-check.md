---
task: Fact-Checking
responsavel: "@researcher"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - manuscript: Trecho ou manuscrito para verificar
  - focus_areas: Areas especificas de foco (datas, ciencia, geografia, etc.)
Saida: |
  - report: Relatorio de verificacao
  - issues: Lista de problemas encontrados
  - corrections: Correcoes sugeridas
---

# *fact-check

Verificar fatos, dados e afirmacoes no manuscrito.

## Flow

1. Receber trecho ou manuscrito
2. Identificar afirmacoes verificaveis
3. Verificar cada afirmacao contra fontes confiaveis
4. Classificar: correto / impreciso / incorreto / nao-verificavel
5. Sugerir correcoes com fontes
6. Gerar relatorio de verificacao

## Categorias de Verificacao

- **Datas e cronologia** — Eventos historicos, timelines
- **Geografia** — Locais, distancias, topografia
- **Ciencia** — Fatos cientificos, processos, terminologia
- **Cultura** — Costumes, praticas, representacoes
- **Tecnologia** — Capacidades, limitacoes, terminologia
- **Linguistica** — Termos estrangeiros, etimologia
- **Legal** — Leis, procedimentos, jurisdicoes
- **Numeros** — Estatisticas, medidas, calculos

## Output
Para cada afirmacao verificada:
- **Afirmacao**: Trecho original
- **Status**: ✅ Correto | ⚠️ Impreciso | ❌ Incorreto | ❓ Nao-verificavel
- **Fonte**: Referencia de verificacao
- **Correcao** (se necessario): Versao corrigada
