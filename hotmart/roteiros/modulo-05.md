# Módulo 05 — Scribe: Escrita de Capítulos, Cenas e Diálogos

**Duração:** ~15 minutos
**Objetivo:** Dominar o Scribe, o agente mais importante do Book Studio — ele transforma seu outline em texto real: capítulos completos, cenas detalhadas e diálogos naturais.

---

## Abertura (1 min)

**Hook:**
"Você tem o outline perfeito, a estrutura toda planejada... mas quando abre o documento para escrever, a página em branco paralisa. E se eu te disser que você nunca mais vai enfrentar o bloqueio do escritor?"

**Objetivo do módulo:**
O Scribe é o agente que você vai usar 80% do tempo no Book Studio. Ele é o escritor fantasma da sua equipe. Neste módulo você aprende a usar os 3 comandos essenciais: `*draft-chapter` (rascunhos completos), `*write-scene` (cenas específicas) e `*dialogue` (diálogos naturais). Ao final, você terá escrito um capítulo inteiro do seu livro.

---

## Pontos-Chave (9 min)

### 1. O Papel do Scribe no Pipeline ETL (1 min)

O Scribe é o coração da fase **Transform**. Ele recebe:
- **Input:** Outline do Architect + chapter-plan + contexto narrativo
- **Output:** Texto literário pronto (capítulos, cenas, diálogos)

**Diferença crucial:** O Scribe não improvisa. Ele trabalha sempre com base no que o Architect planejou. Por isso você SEMPRE alimenta o Scribe com o outline e o plano de capítulo.

### 2. Comando `*draft-chapter` — Rascunho Completo de Capítulo (3 min)

O comando mais usado no Book Studio.

```
@scribe *draft-chapter

Capítulo: 1
Outline: [colar outline do Architect]
Chapter-plan: [colar plano do capítulo 1]
Tom: Sombrio, introspectivo, ritmo lento no início
POV: Terceira pessoa limitada (foco em David)
Tamanho: 2500-3000 palavras
```

**O que ele gera:**
- Capítulo completo em formato literário
- Todas as cenas do chapter-plan transformadas em texto
- Descrições de ambiente, ações, pensamentos internos
- Transições entre cenas
- Gancho no final do capítulo

**Dica de workflow:** Escreva capítulo por capítulo, não tudo de uma vez. Isso mantém o controle de qualidade e permite ajustes incrementais.

**Exemplo de output:**
```
CAPÍTULO 1

A chuva batia no telhado de zinco como dedos impacientes. David Carvalho
despejou mais uma dose de whisky — a terceira desde que o sol nasceu —
e observou a névoa engolir os morros pela janela da cozinha. Quinze anos
naquela casa e ainda não tinha consertado a goteira da sala...

[restante do capítulo segue conforme chapter-plan]
```

### 3. Comando `*write-scene` — Escrever Cena Específica (2:30 min)

Para quando você quer mais controle ou precisa reescrever apenas uma cena.

```
@scribe *write-scene

Cena: David recebe a ligação anônima às 3h da manhã
Contexto: Capítulo 1, após cena de abertura mostrando rotina solitária dele
Objetivo: Estabelecer o inciting incident — a ligação que muda tudo
Personagens: David (protagonista), voz distorcida no telefone
Ambiente: Quarto escuro, tempestade lá fora
Tom: Tensão crescente, inquietação
Tamanho: 400-600 palavras
```

**O que ele gera:**
- Cena isolada, pronta para inserir no capítulo
- Foco narrativo na ação/diálogo principal
- Ritmo controlado conforme o objetivo da cena

**Quando usar:**
- Reescrever uma cena que não ficou boa no draft completo
- Adicionar cenas extras não previstas no chapter-plan
- Experimentar abordagens diferentes antes de fazer o capítulo inteiro

### 4. Comando `*dialogue` — Gerar Diálogos Naturais (2:30 min)

Diálogos são a parte mais difícil de escrever. O Scribe resolve isso.

```
@scribe *dialogue

Personagens: David Carvalho (ex-detetive, desconfiado) e Ana Ribeiro (ex-parceira, agora delegada)
Contexto: Eles se encontram na delegacia após 10 anos sem se falar. Ana está investigando o novo assassinato.
Objetivo: Tensão entre o passado deles e a necessidade de colaborar
Subtexto: Há mágoa não resolvida entre eles
Tom: Tenso, formal na superfície mas emocionalmente carregado
Convenção: pt-BR (travessões, não aspas)
```

**O que ele gera:**
```
— Você não deveria estar aqui, David. — Ana não levantou os olhos da pasta
sobre a mesa.

— Também tenho saudades de você. — Ele puxou a cadeira sem esperar convite
e sentou. — Pode me mostrar a cena do crime?

— Você não é mais policial há quinze anos.

— E você não seria delegada se eu não tivesse...

— Não. — Ela finalmente olhou para ele. — Não termine essa frase.
```

**Convenção pt-BR importante:** No Brasil, diálogos usam travessão (—), não aspas (""). O Scribe segue isso automaticamente quando você especifica `pt-BR` no prompt.

---

## Demonstração Prática (4 min)

**Cenário:** Vamos escrever o Capítulo 1 do romance policial que estruturamos no Módulo 04.

**Passo 1:** Reunir os materiais necessários

Abrir o arquivo onde você salvou:
- Outline completo do Architect
- Chapter-plan do capítulo 1

**Passo 2:** Chamar o Scribe com `*draft-chapter`

```
@scribe *draft-chapter

Capítulo: 1
Outline: [colar outline do módulo 04]
Chapter-plan:
  - Cena 1: David acordando sozinho, rotina com álcool
  - Cena 2: Flashback rápido do caso que arruinou sua carreira
  - Cena 3: Ligação anônima às 3h da manhã
  - Cena 4: David decide voltar à cidade após 15 anos
Tom: Sombrio, atmosférico, ritmo lento que acelera na cena 3
POV: Terceira pessoa limitada (foco em David Carvalho)
Tamanho: 2800 palavras
Estilo: Prosa enxuta, frases curtas, sem adjetivos excessivos
```

**Passo 3:** Scribe gera o capítulo completo

O output será um texto literário de ~2800 palavras com:
- Abertura forte estabelecendo David e seu estado emocional
- Flashback integrado naturalmente
- Tensão crescente até a ligação misteriosa
- Gancho que força David a voltar à cidade

**Passo 4:** Ajustes finos com `*write-scene`

Se a cena da ligação não ficou tensa o suficiente:

```
@scribe *write-scene

Cena: Ligação anônima às 3h da manhã
Contexto: David estava quase dormindo após beber a noite toda
Objetivo: Máxima tensão — a voz distorcida sabe detalhes que só o assassino saberia
Personagens: David e voz no telefone
Tom: Terror psicológico, claustrofóbico
Tamanho: 500 palavras
Diretriz: A voz menciona o nome da filha de David (que ninguém deveria saber)
```

O Scribe reescreve apenas essa cena com mais intensidade. Você substitui no capítulo.

**Passo 5:** Salvar o capítulo

Criar arquivo `/meu-livro/capitulos/capitulo-01.md` e colar o texto. Repetir o processo para os próximos 17 capítulos.

---

## Encerramento (1 min)

**Recap:**
Neste módulo você dominou o Scribe:
- `*draft-chapter` para escrever capítulos completos
- `*write-scene` para cenas específicas ou ajustes
- `*dialogue` para diálogos naturais com subtexto

**Workflow recomendado:**
1. Alimentar o Scribe sempre com outline + chapter-plan do Architect
2. Escrever capítulo por capítulo (não tudo de uma vez)
3. Usar `*write-scene` para refinar partes específicas
4. Salvar cada capítulo em arquivo separado

**Próximo módulo:**
Você escreveu o capítulo... mas será que ele está bom? No **Módulo 06** você aprende a usar o Editor e o Critic — os agentes que revisam, criticam e melhoram seu texto antes de publicar. Nos vemos lá.

---

**Dica profissional:** O Scribe aprende com feedback. Se um capítulo ficou muito descritivo, no próximo prompt adicione "Prosa mais enxuta, menos descrições". Ele ajusta o estilo imediatamente.
