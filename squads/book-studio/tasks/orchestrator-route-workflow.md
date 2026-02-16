---
task: Selecionar Workflow por Genero
responsavel: "@orchestrator"
responsavel_type: system
atomic_layer: task
elicit: true
Entrada: "Genero e subgenero do livro"
Saida: "Workflow selecionado + adaptacoes aplicaveis"
orchestrator_command: "*route"
memory_sections:
  reads: [meta]
  writes: [meta]
---

# Selecionar Workflow por Genero

O Orchestrator analisa o genero do livro e seleciona o workflow otimizado, aplicando adaptacoes especificas para maximizar qualidade e relevancia do output.

## Flow

1. **Receber Genero**
   - Coletar genero principal fornecido pelo autor
   - Identificar subgenero (se aplicavel)
   - Verificar se e genero de ficcao ou nao-ficcao
   - Validar contra lista de generos suportados em route-config.yaml

2. **Consultar Route Config**
   - Abrir arquivo `configs/route-config.yaml`
   - Localizar entrada do genero no mapeamento
   - Carregar workflow base (fiction-standard, nonfiction-practical, etc)
   - Identificar adaptacoes especificas do genero
   - Carregar configuracoes customizadas

3. **Aplicar Adaptacoes**
   - **Agentes Skip/Enfase:**
     - Identificar agentes que podem ser pulados (skip)
     - Identificar agentes que precisam enfase extra
     - Ajustar ordem de execucao se necessario

   - **Voice Settings:**
     - Aplicar tom especifico do genero (formal, casual, poetico, tecnico)
     - Configurar nivel de show-vs-tell
     - Ajustar densidade de dialogo
     - Definir estilo narrativo (1a pessoa, 3a pessoa, onisciente)

   - **Configs Especiais:**
     - Ativar features opcionais (magic-system, world-building, research-heavy)
     - Configurar parametros de qualidade por genero
     - Ajustar thresholds dos quality gates
     - Definir estrutura preferencial (numero de capitulos, atos)

4. **Gerar Routing Decision**
   - Consolidar todas decisoes em estrutura clara:
     - Workflow selecionado
     - Lista de adaptacoes aplicadas
     - Agentes modificados (skip/enfase)
     - Voice settings ativas
     - Configs especiais habilitadas
   - Salvar routing decision no pipeline-state
   - Registrar no Book State meta section

5. **Retornar Resultado**
   - Apresentar resumo do routing para o autor
   - Explicar principais adaptacoes e por que
   - Permitir override manual se autor desejar customizar
   - Confirmar antes de prosseguir com pipeline

## Output

O output e uma **Routing Decision** estruturada:

```yaml
routing_decision:
  genre: "Fantasia Epica"
  subgenre: "High Fantasy"
  workflow: "fiction-standard"

  adaptations:
    - magic-system-focus
    - world-building-heavy
    - hero-journey-structure

  agents:
    skip: []
    emphasize: ["@researcher", "@architect"]

  voice_settings:
    tone: "epico-formal"
    pov: "terceira-pessoa-limitada"
    show_vs_tell: 70  # 70% show, 30% tell
    dialogue_density: "medio"

  special_configs:
    magic_system_builder: true
    world_building_depth: "detalhado"
    research_sources: ["mitologia", "historia-medieval", "sistemas-magicos"]

  quality_gates:
    extract_to_transform:
      premissa_check: true
      world_building_check: true  # extra para fantasia
    transform_to_load:
      consistency_check: true
      magic_rules_check: true  # extra para fantasia

  structure_preference:
    chapters: 20-30
    acts: 3
    pov_switches: "permitido-controlado"
```

### Formato de Apresentacao ao Autor

```
🎯 ROUTING DECISION

Genero: Fantasia Epica (High Fantasy)
Workflow: fiction-standard + adaptacoes de fantasia

Adaptacoes Aplicadas:
✓ Foco em Sistema de Magia - Regras claras e consistentes
✓ World-Building Profundo - Mundo detalhado e imersivo
✓ Estrutura de Jornada do Heroi - Arco classico de transformacao

Agentes com Enfase Extra:
• @researcher - Pesquisa aprofundada em mitologia e sistemas magicos
• @architect - Estrutura narrativa com foco em world-building

Configuracoes de Voz:
• Tom: Epico e formal
• POV: Terceira pessoa limitada
• Show vs Tell: 70% show, 30% tell
• Dialogos: Densidade media

Configuracoes Especiais:
• Magic System Builder ativado
• World-Building em nivel detalhado
• Quality gates extras para consistencia magica

Estrutura Recomendada:
• 20-30 capitulos
• 3 atos
• POV switches controlados

Deseja prosseguir com estas configuracoes? [s/n]
Ou customize com: *route --override
```

## Guidelines

### Generos de Ficcao

**Romance:**
- Workflow: fiction-standard
- Enfase: relacionamento, desenvolvimento emocional
- Voice: show-heavy (80%), dialogos frequentes
- Gates extras: emotional-arc-check, relationship-progression

**Fantasia:**
- Workflow: fiction-standard + world-building
- Enfase: @researcher (sistemas magicos), @architect (world-building)
- Voice: epico ou intimate (conforme subgenero)
- Gates extras: magic-rules-consistency, world-building-depth

**Ficcao Cientifica:**
- Workflow: fiction-standard + research-heavy
- Enfase: @researcher (ciencia plausivel), @critic (logica)
- Voice: tecnico-acessivel
- Gates extras: science-plausibility, tech-consistency

**Misterio/Thriller:**
- Workflow: fiction-standard + plot-focused
- Enfase: @architect (estrutura de pistas), @critic (plot holes)
- Voice: tensao-alta, show-heavy
- Gates extras: clues-consistency, red-herrings-balance

**Horror:**
- Workflow: fiction-standard + atmosphere-focused
- Enfase: @scribe (atmosfera), @editor (ritmo)
- Voice: descritivo, tensao crescente
- Gates extras: atmosphere-check, scare-pacing

### Generos de Nao-Ficcao

**Autoajuda:**
- Workflow: nonfiction-practical
- Enfase: @researcher (evidencias), @formatter (exercicios)
- Voice: conversacional, acessivel
- Configs extras: exercises-included, case-studies

**Negocios:**
- Workflow: nonfiction-practical + data-driven
- Enfase: @researcher (dados), @critic (argumentacao)
- Voice: profissional, autoritativo
- Configs extras: data-visualization, frameworks

**Biografia:**
- Workflow: nonfiction-narrative
- Enfase: @researcher (fatos), @scribe (narrativa)
- Voice: narrativo, cronologico
- Configs extras: timeline-structure, fact-checking

**Tecnico/Educacional:**
- Workflow: nonfiction-educational
- Enfase: @architect (progressao pedagogica), @formatter (exemplos)
- Voice: didatico, estruturado
- Configs extras: examples-heavy, glossary-included

## Customizacao Manual

Autor pode sobrescrever routing com flags:

```
*route --override
  --workflow=fiction-standard
  --skip=@researcher
  --emphasize=@scribe,@editor
  --tone=casual
  --chapters=15
```

Orchestrator valida override e aplica customizacoes mantendo coerencia.

## Relacao com Route Config

Este comando depende de `configs/route-config.yaml` que contem:

```yaml
genres:
  fiction:
    fantasia:
      workflow: fiction-standard
      adaptations:
        - magic-system-focus
        - world-building-heavy
      voice:
        tone: epico-formal
        pov: terceira-pessoa-limitada
      # ... etc
```

Se genero nao estiver em route-config.yaml:
- Usar workflow generico (fiction-standard ou nonfiction-practical)
- Notificar autor que adaptacoes especificas nao estao disponiveis
- Sugerir genero mais proximo

## Exemplo de Uso

```
Autor: *route
Genero: Romance Historico

Orchestrator:
🎯 Analisando genero...

Genero: Romance Historico
Subgenero detectado: Historical Fiction + Romance

Workflow selecionado: fiction-standard
Adaptacoes aplicadas:
✓ research-heavy (contexto historico)
✓ romance-focus (relacionamento central)
✓ period-accuracy (linguagem e costumes)

Enfase em:
• @researcher - Pesquisa de epoca (costumes, linguagem, eventos)
• @scribe - Balanco entre romance e contexto historico

Voice settings:
• Tom: Romantico com autenticidade historica
• POV: Primeira pessoa ou terceira pessoa proxima
• Show vs Tell: 75% show
• Dialogos: Frequentes, period-appropriate

Quality gates extras:
• historical-accuracy-check
• romance-arc-progression
• period-language-consistency

Prosseguir? [s/n]
```

---

**Comando do Orchestrator:** `*route`
**Versao:** 2.0.0
**Compativel com:** AIOS, ChatGPT Custom GPTs, Tess.ai
