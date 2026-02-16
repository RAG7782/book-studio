# Handoff Output Template

Template padrao para a secao de Handoff que cada agente inclui ao final de seu output.

## Instrucoes

Todo agente do Book Studio deve incluir uma secao `## Handoff` ao final de cada entrega. Esta secao estrutura os dados para o proximo agente no pipeline.

## Template

```markdown
---

## Handoff

### De: [Nome do Agente]
### Para: [Nome do Proximo Agente]
### Schema: [nome-do-schema.yaml]

### Dados

[Dados estruturados conforme o schema do handoff.
Cada campo required deve estar preenchido.
Campos optional incluidos quando relevantes.]

### Memory Updates

[AGENTE] [DATA] [ADDED/CHANGED/FLAGGED] descricao

### Proximo Passo

> [Instrucao clara do que o proximo agente deve fazer com estes dados]
```

## Exemplos

### Exemplo: Muse → Architect

```markdown
---

## Handoff

### De: Muse
### Para: Architect
### Schema: handoff-muse-to-architect.yaml

### Dados

**Premissa:**
- Logline: "Quando uma botanica brasileira descobre uma planta que cura qualquer doenca, deve proteger sua pesquisa de uma farmaceutica global antes que a cura se torne arma."
- Expandida: Uma botanica do interior do Para, pesquisando plantas medicinais indigenas, descobre uma especie com propriedades curativas extraordinarias. Quando sua pesquisa vaza, uma multinacional farmaceutica envia agentes para roubar as amostras. Aliada a uma comunidade indigena e a um jornalista, ela precisa decidir entre publicar a descoberta (arriscando biopirataria) ou proteger o conhecimento ancestral.
- Comp titles: "A Invencao de Hugo Cabret" encontra "O Mecanismo"

**Genero:**
- Genero: suspense
- Subgenero: eco-thriller
- Tom: tenso, esperancoso
- Publico: adulto, 25-45, interessado em meio ambiente

**Personagens:**
1. Marina Santos — protagonista, botanica, motivada por justica, medo de fracassar
2. Dr. Henrique Voss — antagonista, exec farmaceutica, motivado por lucro
3. Raoni — aliado, lider indigena, motivado por preservacao

**Temas:**
- Conhecimento ancestral vs ciencia moderna (principal)
- Biopirataria e etica (secundario)

### Memory Updates

[Muse] 2026-02-16 [ADDED] Premissa: eco-thriller sobre botanica vs farmaceutica
[Muse] 2026-02-16 [ADDED] 3 personagens: Marina (protagonista), Dr. Voss (antagonista), Raoni (aliado)
[Muse] 2026-02-16 [ADDED] Temas: conhecimento ancestral, biopirataria

### Proximo Passo

> Architect: use a premissa e personagens para criar um outline em 3 atos (~15 capitulos). Considere o tom de eco-thriller com elementos de aventura na Amazonia. O Researcher deve investigar biopirataria no Brasil e plantas medicinais da regiao.
```

### Exemplo: Scribe → Editor

```markdown
---

## Handoff

### De: Scribe
### Para: Editor
### Schema: handoff-scribe-to-editor.yaml

### Dados

**Rascunho:** [capitulo completo em prosa]

**Info do capitulo:**
- Numero: 3
- Titulo: "A Descoberta"
- POV: Marina (3a pessoa limitada)
- Palavras: 4.230

**Notas de escrita:**
- Decisao: Usei flashback curto para mostrar infancia de Marina (2 paragrafos)
- Duvida: Tom do dialogo com Raoni — informal demais?
- Placeholder: Descricao tecnica da planta precisa validacao do Researcher

### Memory Updates

[Scribe] 2026-02-16 [ADDED] Cap 3 rascunho: 4.230 palavras
[Scribe] 2026-02-16 [FLAGGED] Descricao tecnica da planta precisa fact-check

### Proximo Passo

> Editor: revisar Cap 3 com foco em copy-edit e consistencia com caps 1-2. Atentar para o tom do dialogo indigena e validar se o flashback funciona no ritmo.
```
