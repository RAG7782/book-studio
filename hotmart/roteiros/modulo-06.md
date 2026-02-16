# Módulo 06 — Editor + Critic: Revisão e Feedback Crítico

**Duração:** ~12 minutos
**Objetivo:** Dominar os agentes de revisão do Book Studio — Editor (revisão técnica) e Critic (análise crítica) — para transformar rascunhos em texto publicável.

---

## Abertura (1 min)

**Hook:**
"Todo escritor profissional sabe: a primeira versão é sempre uma porcaria. A diferença entre amadores e profissionais não é talento — é revisão. E agora você tem dois especialistas trabalhando para você."

**Objetivo do módulo:**
Neste módulo você aprende a usar dois agentes que trabalham em dupla: o **Editor** cuida da revisão técnica (gramática, estilo, estrutura), e o **Critic** faz análise crítica profunda (pontos fortes, fracos, sugestões narrativas). Ao final, você terá revisado o capítulo escrito no módulo anterior e entendido o loop iterativo Scribe → Editor → Critic → Scribe.

---

## Pontos-Chave (7:30 min)

### 1. O Papel de Editor e Critic no Pipeline ETL (1 min)

Ambos pertencem à fase **Transform**, logo após o Scribe:

**Editor** — Revisor técnico:
- Ortografia, gramática, pontuação (norma culta pt-BR)
- Estilo e fluidez (repetições, ritmo, clareza)
- Estrutura narrativa (coesão entre cenas, transições)
- Consistência (nomes, datas, fatos)

**Critic** — Analista crítico:
- Análise literária (o que funciona, o que não funciona)
- Experiência do leitor (ritmo, engajamento, emoção)
- Sugestões narrativas (plot holes, desenvolvimento de personagem)
- Visão macro (como o capítulo se encaixa no livro todo)

**Workflow ideal:** Scribe escreve → Editor revisa tecnicamente → Critic analisa criticamente → Se necessário, volta para Scribe reescrever.

### 2. Editor — Comando `*copy-edit` (1:30 min)

Revisão ortográfica, gramatical e estilística.

```
@editor *copy-edit

Texto: [colar capítulo 1 escrito pelo Scribe]
Norma: pt-BR (norma culta brasileira)
Foco: Gramática, pontuação, repetições, clareza
Nível: Rigoroso (padrão editorial)
```

**O que ele detecta e corrige:**
- Erros de concordância verbal/nominal
- Pontuação incorreta (vírgulas, ponto-e-vírgula)
- Clichês e redundâncias ("subir para cima", "elo de ligação")
- Repetições de palavras (mesma palavra 3x no parágrafo)
- Frases longas e confusas (sugestão de quebra)
- Uso inadequado de gerúndio
- Pronomes oblíquos em desacordo com a norma culta

**Output:** Texto revisado + lista de alterações explicadas.

### 3. Editor — Comando `*structural-review` (1:30 min)

Revisão de estrutura narrativa.

```
@editor *structural-review

Capítulo: 1
Texto: [colar capítulo 1]
Outline: [colar outline do Architect]
Foco: Coesão narrativa, transições entre cenas, ritmo
```

**O que ele analisa:**
- As cenas seguem o chapter-plan do Architect?
- Transições entre cenas estão fluidas ou abruptas?
- O ritmo está adequado ao objetivo do capítulo?
- Há informações fora de ordem cronológica sem justificativa?
- O gancho do final está forte o suficiente?

**Output:** Relatório com sugestões de reestruturação + trechos problemáticos destacados.

### 4. Editor — Comando `*consistency-check` (1 min)

Verificação de consistência interna.

```
@editor *consistency-check

Texto: [colar capítulos 1 a 5]
Elementos: Nomes de personagens, datas, localização geográfica, detalhes físicos
```

**O que ele detecta:**
- Personagem chamada "Ana Ribeiro" no Cap 1 e "Ana Oliveira" no Cap 3
- David mora em Petrópolis no Cap 1 mas em Teresópolis no Cap 4
- Flashback acontece "15 anos atrás" no Cap 1 e "12 anos atrás" no Cap 2
- Olhos do personagem são azuis no Cap 1 e castanhos no Cap 5

**Output:** Lista de inconsistências + sugestão de padronização.

### 5. Critic — Comando `*analysis` (1:30 min)

Análise crítica profunda.

```
@critic *analysis

Capítulo: 1
Texto: [colar capítulo 1 revisado pelo Editor]
Outline: [colar outline completo]
Foco: Pontos fortes, pontos fracos, sugestões narrativas
```

**O que ele analisa:**
- **Pontos fortes:** O que está funcionando bem (cenas impactantes, diálogos naturais, tensão bem construída)
- **Pontos fracos:** O que não está funcionando (ritmo arrastado, personagem raso, plot hole)
- **Desenvolvimento de personagem:** Protagonista está tridimensional? Tem agência?
- **Show vs Tell:** Está mostrando através de ações ou apenas narrando?
- **Engajamento:** O leitor vai virar a página?
- **Coerência com outline:** O capítulo entrega o que o Architect planejou?

**Output:** Relatório crítico detalhado (3-5 parágrafos) + sugestões concretas de melhoria.

### 6. Critic — Comando `*beta-read` (1 min)

Simular experiência de leitor beta.

```
@critic *beta-read

Capítulo: 1
Texto: [colar capítulo 1]
Perfil: Leitor de thrillers policiais, 35-50 anos, familiarizado com o gênero
```

**O que ele simula:**
- Reação emocional do leitor (tédio, tensão, curiosidade)
- Perguntas que o leitor faria ("Por que David aceitou voltar tão rápido?")
- Momentos de desengajamento ("Essa descrição de 3 parágrafos me fez pular")
- Expectativas do gênero atendidas ou frustradas

**Output:** Feedback na voz de um leitor real, não de um crítico técnico.

---

## Demonstração Prática (3 min)

**Cenário:** Vamos revisar o Capítulo 1 escrito pelo Scribe no módulo anterior.

**Passo 1:** Revisão técnica com o Editor

```
@editor *copy-edit

Texto: [colar capítulo 1 completo]
Norma: pt-BR norma culta
Foco: Gramática, estilo, repetições
Nível: Rigoroso
```

**Output do Editor:**
```
ALTERAÇÕES REALIZADAS (17):

1. Linha 3: "David despejou mais uma dose de whisky" → "David despejou outra dose de whisky"
   (palavra "mais" repetida 2x no mesmo parágrafo)

2. Linha 12: "Ele pegou o telefone que estava tocando" → "Atendeu o telefone"
   (redundância: se tocou, obviamente estava tocando)

3. Linha 45: "A voz no telefone era distorcida e ele não conseguiu identificar"
   → "A voz distorcida impedia identificação"
   (frase longa demais, quebrada para melhor ritmo)

[...restante das correções]
```

**Passo 2:** Revisão estrutural com o Editor

```
@editor *structural-review

Capítulo: 1
Texto: [colar capítulo 1 já corrigido]
Outline: [colar outline do Architect]
Foco: Transições, ritmo, coesão
```

**Output do Editor:**
```
ANÁLISE ESTRUTURAL:

✓ Cena 1 (rotina de David): Bem estabelecida, ritmo lento apropriado
✗ Transição Cena 1 → Cena 2 (flashback): Abrupta. Sugestão: usar gatilho sensorial
  (David vê foto antiga na gaveta antes do flashback)
✓ Cena 3 (ligação): Tensão crescente bem executada
✗ Cena 4 (decisão de voltar): Rápida demais. David decide em 2 frases após resistir
  15 anos. Sugestão: adicionar conflito interno (1-2 parágrafos)
```

**Passo 3:** Análise crítica com o Critic

```
@critic *analysis

Capítulo: 1
Texto: [colar capítulo 1 duplamente revisado]
Outline: [colar outline completo]
Foco: Pontos fortes, fracos, sugestões narrativas
```

**Output do Critic:**
```
ANÁLISE CRÍTICA — CAPÍTULO 1

PONTOS FORTES:
- Atmosfera sombria muito bem construída (chuva, isolamento, álcool)
- Diálogo da ligação é genuinamente perturbador
- Gancho final forte (menção à filha de David cria urgência)

PONTOS FRACOS:
- David está muito passivo nas cenas 1-2. Ele só reage, não age.
  Sugestão: mostrar ele tentando ativamente esquecer o passado (queimar documentos?
  evitar notícias de crimes?)
- Flashback é apenas expositivo ("tell"). Falta impacto emocional.
  Sugestão: usar memória sensorial (cheiro de pólvora, som de sirene)
- Decisão de voltar à cidade é rápida demais para alguém que fugiu há 15 anos.
  Sugestão: adicionar cena de conflito interno (ele tenta ignorar, mas não consegue dormir)

COERÊNCIA COM OUTLINE: 95% — O capítulo entrega o setup prometido, mas precisa de mais
profundidade emocional no protagonista.
```

**Passo 4:** Decisão — Reescrever ou seguir em frente?

Baseado no feedback do Critic, você decide:
- **Opção A:** Reescrever apenas as cenas problemáticas (usar `@scribe *write-scene` para Cena 4)
- **Opção B:** Seguir para capítulo 2 e ajustar depois na segunda passada
- **Opção C:** Aceitar feedback e fazer nota mental para capítulos seguintes

**Para este curso, escolhemos Opção A:**

```
@scribe *write-scene

Cena: David decide voltar à cidade
Contexto: Logo após a ligação perturbadora. Ele está no quarto, inquieto.
Objetivo: Mostrar conflito interno — ele QUER ignorar mas NÃO CONSEGUE
Diretriz: David tenta dormir, não consegue, levanta, anda pela casa,
  finalmente pega as chaves do carro às 5h da manhã
Tom: Agonia interna, decisão inevitável mas dolorosa
Tamanho: 400 palavras
```

O Scribe reescreve a cena com mais profundidade. Você substitui no capítulo.

---

## Encerramento (0:30 min)

**Recap:**
Neste módulo você dominou os agentes de revisão:
- **Editor:** `*copy-edit` (gramática), `*structural-review` (estrutura), `*consistency-check` (consistência)
- **Critic:** `*analysis` (análise crítica), `*beta-read` (visão do leitor)

**Loop iterativo:**
Scribe (escreve) → Editor (revisa) → Critic (analisa) → volta para Scribe se necessário

**Template de apoio:**
- `revision.md` — Checklist de revisão completa

**Próximo módulo:**
Seu capítulo está escrito e revisado. Agora é hora de formatar e publicar. No **Módulo 07** você vai conhecer o Formatter e o Publisher — os agentes da fase **Load** que preparam seu livro para o mundo. Nos vemos lá.

---

**Dica profissional:** NÃO tente revisar tudo de uma vez. Use o Editor no final de cada capítulo e o Critic a cada 5 capítulos (revisão em lotes). Isso mantém você produtivo sem perder qualidade.
