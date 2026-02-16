---
task: Executar Pipeline Completo
responsavel: "@orchestrator"
responsavel_type: system
atomic_layer: task
elicit: true
Entrada: "Genero do livro, premissa inicial (opcional), preferencias do autor"
Saida: "Pipeline executado com report final"
orchestrator_command: "*run-pipeline"
memory_sections:
  reads: [meta]
  writes: [meta, pipeline-state]
---

# Executar Pipeline Completo

O Orchestrator executa o pipeline end-to-end de producao do livro, coordenando todos os agentes do Extract → Transform → Load com quality gates automaticos.

## Flow

1. **Inicializacao**
   - Receber genero do livro e premissa inicial (se fornecida)
   - Coletar preferencias do autor (tom, voz, estilo, restricoes)
   - Criar pipeline-state inicial com timestamp e metadata do projeto
   - Registrar autor e configuracoes iniciais no Book State

2. **Selecionar Workflow**
   - Consultar `route-config.yaml` para identificar workflow apropriado
   - Carregar adaptacoes especificas do genero selecionado
   - Identificar agentes que podem ser pulados ou enfatizados
   - Aplicar voice settings e configs especiais
   - Salvar routing decision no pipeline-state

3. **Extract Stage**
   - Executar @muse para gerar premissa enriquecida
   - Aguardar handoff com premissa validada
   - Executar @researcher para coleta de pesquisa contextual
   - Aguardar handoff com research artifacts
   - Registrar progresso no pipeline-state

4. **Gate: Extract → Transform**
   - Executar `*check-gate extract-to-transform`
   - Avaliar qualidade da premissa e pesquisa
   - Verificar criterios minimos:
     - Premissa clara e completa
     - Protagonista definido
     - Conflito central articulado
     - Research relevante coletado
   - Se BLOCK: pausar pipeline e notificar autor
   - Se REVIEW: apresentar itens para decisao
   - Se PASS: prosseguir automaticamente

5. **Transform Stage - Fase 1: Estrutura**
   - Executar @architect para criar estrutura narrativa
   - Aguardar handoff com outline completo
   - Validar estrutura (numero de capitulos, arcos, beats)
   - Registrar estrutura no Book State

6. **Transform Stage - Fase 2: Escrita**
   - Executar @scribe para escrever manuscrito capitulo por capitulo
   - Para cada capitulo:
     - Scribe escreve draft
     - Handoff para @editor
     - Editor revisa e melhora
     - Handoff para @critic
     - Critic avalia e atribui score
     - Se score < 7.0: retorna para Editor (revision loop)
     - Se score >= 7.0: capitulo aprovado
   - Registrar progresso a cada capitulo no pipeline-state

7. **Gate: Revision Loop**
   - Para cada capitulo em revision loop:
     - Maximo 3 iteracoes Editor ↔ Critic
     - Se atingir limite: marcar como FLAG para revisao manual
     - Se score >= 7.0: liberar para proximo capitulo
   - Registrar iteracoes e flags no pipeline-state

8. **Gate: Transform → Load**
   - Executar `*check-gate transform-to-load`
   - Avaliar qualidade do manuscrito completo:
     - Todos capitulos com score >= 7.0 (ou FLAGGEDs justificados)
     - Consistencia narrativa entre capitulos
     - Arcos de personagem completos
     - Conflito central resolvido
     - Voz consistente ao longo do texto
   - Se BLOCK: pausar e notificar autor
   - Se REVIEW: apresentar itens para decisao
   - Se PASS: prosseguir automaticamente

9. **Load Stage**
   - Executar @formatter para gerar outputs finais:
     - Manuscript final (Markdown limpo)
     - EPUB formatado
     - Metadata.yaml completo
   - Executar @publisher para assets de publicacao:
     - Synopsis (curta e longa)
     - Blurb de contracapa
     - Keywords e categorias
     - Cover prompt detalhado
     - Marketing copy
   - Registrar deliverables no pipeline-state

10. **Finalizacao**
    - Gerar pipeline-report.md completo usando template
    - Consolidar metricas:
      - Tempo total de execucao
      - Numero de handoffs realizados
      - Gates avaliados e resultados
      - Revision loops executados
      - Score final por capitulo e geral
    - Listar todos deliverables gerados
    - Marcar pipeline como COMPLETED no pipeline-state
    - Notificar autor com summary e proximo passos

## Output

O output final e um **Pipeline Report** completo contendo:

### Cabecalho
- Titulo do livro
- Genero e subgenero
- Workflow utilizado
- Data de inicio e conclusao
- Tempo total de execucao

### Metricas de Qualidade
- Score geral do manuscrito
- Score por capitulo (tabela)
- Resultados dos quality gates
- Numero de revision loops executados
- Items FLAGGEDs (se houver)

### Timeline
- Extract stage: inicio/fim
- Transform stage: inicio/fim (com progresso por capitulo)
- Load stage: inicio/fim
- Gates: quando foram avaliados e resultados

### Performance dos Agentes
- Agentes executados
- Tarefas completadas por agente
- Handoffs realizados
- Tempo medio por agente

### Deliverables
Checklist dos arquivos gerados:
- [ ] Manuscript final (Markdown)
- [ ] EPUB formatado
- [ ] Metadata.yaml
- [ ] Synopsis curta e longa
- [ ] Blurb de contracapa
- [ ] Keywords e categorias
- [ ] Cover prompt
- [ ] Marketing copy

### Recomendacoes
Sugestoes para melhorias em proximas iteracoes baseadas em:
- Items FLAGGEDs que precisaram intervencao manual
- Capitulos que exigiram muitas revisoes
- Gates que bloquearam ou exigiram review
- Feedback do Critic sobre pontos fracos recorrentes

## Guidelines

### Para AIOS (Execucao Automatica)
- Pipeline roda end-to-end sem intervencao humana
- Gates com resultado PASS avancam automaticamente
- Gates com REVIEW pausam e aguardam input do autor
- Gates com BLOCK pausam e exigem correcao antes de prosseguir
- Revision loops tem limite de 3 iteracoes por capitulo
- Pipeline-state e salvo a cada checkpoint para permitir resume

### Para ChatGPT (Execucao Manual)
- Autor executa `*run-pipeline` no Custom GPT
- Cada handoff exige copy-paste manual do output anterior
- Autor ve os gates e decide se prosseguir ou revisar
- Revision loops sao controlados manualmente
- Pipeline-state e mantido na memoria da conversa
- Autor pode pausar e retomar com `*resume`

### Para Tess.ai (Execucao Copy-Paste)
- Autor executa comandos sequencialmente
- Cada agente e invocado manualmente com input copiado
- Gates sao checados manualmente com `*check-gate`
- Autor controla revision loops
- Pipeline-state e mantido em arquivo local
- Autor usa `*status` para visualizar progresso

### Tratamento de Erros
- Se agente nao retornar output esperado: pausar e notificar
- Se gate BLOCK: listar itens faltantes e aguardar correcao
- Se revision loop exceder 3 iteracoes: FLAG capitulo e prosseguir
- Se handoff schema invalido: pausar e notificar autor
- Se interrupcao externa: salvar pipeline-state para resume

### Checkpoints
Pipeline-state e salvo nos seguintes pontos:
- Apos routing decision
- Apos cada agente do Extract
- Apos cada gate
- Apos cada capitulo escrito
- Apos cada revision loop
- Apos cada agente do Load
- Ao finalizar pipeline

Isso permite `*resume` de qualquer ponto sem perder progresso.

## Relacao com Outros Comandos

- `*route`: Executado automaticamente no inicio do pipeline
- `*check-gate`: Executado automaticamente nos 3 gates
- `*status`: Pode ser chamado durante execucao para ver progresso
- `*resume`: Usado se pipeline for interrompido

## Exemplo de Uso

```
Autor: *run-pipeline
Genero: Fantasia Epica
Premissa: Um ferreiro descobre que pode forjar armas magicas

Orchestrator:
✓ Pipeline inicializado
✓ Workflow selecionado: fantasy-epic
✓ Adaptacoes aplicadas: magic-system-focus, world-building-heavy
✓ Extract stage iniciado...

[Muse executa → handoff]
✓ Premissa enriquecida com conflito central e protagonista

[Researcher executa → handoff]
✓ Pesquisa coletada: sistemas de magia, forjaria medieval, arcos do heroi

[Gate: Extract → Transform]
✓ PASS - todos criterios atendidos

[Architect executa → handoff]
✓ Estrutura criada: 24 capitulos, 3 atos, 8 beats principais

[Scribe iniciado]
✓ Capitulo 1 escrito → Editor → Critic (score 7.5) ✓
✓ Capitulo 2 escrito → Editor → Critic (score 6.8) → Editor (revisao) → Critic (score 7.2) ✓
...

[Pipeline concluido]
✓ Report gerado: pipeline-report-2026-02-16.md
✓ Deliverables: 7/7 arquivos criados
✓ Score final: 7.8/10
```

---

**Comando do Orchestrator:** `*run-pipeline`
**Versao:** 2.0.0
**Compativel com:** AIOS, ChatGPT Custom GPTs, Tess.ai
