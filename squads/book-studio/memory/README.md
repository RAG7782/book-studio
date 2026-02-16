# Memory — Book Studio

O sistema de memoria compartilhada permite que os agentes do Book Studio mantenham contexto e continuidade ao longo do pipeline editorial.

## Book State

O `book-state-template.md` e o documento central de estado compartilhado. Cada projeto de livro deve ter seu proprio `book-state.md` baseado neste template.

### Secoes

| Secao | Quem escreve | Quem le |
|-------|-------------|---------|
| **Meta** | Muse, Publisher | Todos |
| **Premissa** | Muse | Architect, Researcher, Critic, Publisher |
| **Personagens** | Muse | Architect, Scribe, Editor, Critic |
| **Mundo** | Researcher | Architect, Scribe |
| **Pesquisa** | Researcher | Architect, Scribe |
| **Estrutura** | Architect | Scribe, Editor, Critic, Formatter |
| **Timeline** | Architect | Scribe, Editor |
| **Temas** | Muse | Architect, Scribe, Critic |
| **Progresso** | Scribe, Editor, Formatter | Editor, Critic, Formatter, Publisher |
| **Feedback** | Critic, Editor | Scribe, Architect, Muse |
| **Log** | Todos | Todos |
| **Memory Updates** | Todos | Todos |

### Como Usar no ChatGPT

1. Copie o `book-state.md` do seu projeto
2. Cole no inicio da conversa com o agente
3. Diga: "Aqui esta o estado atual do livro. Continue de onde o ultimo agente parou."
4. Ao final, copie a secao `## Handoff` do output
5. Atualize o `book-state.md` com as mudancas indicadas em `## Memory Updates`
6. Cole o Handoff como input do proximo agente

### Como Usar no Tess.ai

1. No campo de contexto, cole o `book-state.md`
2. Use o comando do agente (ex: `*outline`)
3. O agente lera as secoes relevantes automaticamente
4. Copie as Memory Updates para o book-state
5. Passe o Handoff para o proximo agente

### Como Usar no AIOS (Claude Code)

O book-state e lido e atualizado automaticamente pelo sistema de orquestracao. Os agentes declaram `memory_reads` e `memory_writes` em seus manifests.

### Formato de Memory Updates

```
[AGENTE] [DATA] [TIPO] descricao da mudanca
```

| Tipo | Significado | Exemplo |
|------|-------------|---------|
| `ADDED` | Informacao nova | `[Muse] [ADDED] Personagem: Maria, protagonista` |
| `CHANGED` | Informacao alterada | `[Architect] [CHANGED] Outline: 18→15 caps` |
| `FLAGGED` | Atencao necessaria | `[Critic] [FLAGGED] Pacing lento nos caps 4-6` |

### Boas Praticas

- Sempre leia o book-state antes de comecar
- Atualize APENAS as secoes que voce modificou
- Use Memory Updates para registrar TODAS as mudancas
- Nao delete informacoes — marque como CHANGED
- Se encontrar inconsistencia, use FLAGGED
