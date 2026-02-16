# Módulo 04 — Architect: Estrutura e Outline do Livro

**Duração:** ~12 minutos
**Objetivo:** Dominar o Architect para criar a espinha dorsal do seu livro — outline completo, plano por capítulo e cronograma narrativo.

---

## Abertura (1 min)

**Hook:**
"Você já teve uma ideia brilhante para um livro mas não sabia por onde começar? O problema não é a falta de criatividade — é a falta de estrutura. E é exatamente isso que o Architect resolve."

**Objetivo do módulo:**
Neste módulo você vai aprender a usar o Architect, o agente que transforma conceitos soltos em uma arquitetura sólida. Ele cria o mapa completo do seu livro: capítulos, arcos narrativos, pontos de virada e cronograma. Ao final, você terá um outline profissional pronto para alimentar o Scribe no próximo módulo.

---

## Pontos-Chave (7 min)

### 1. O Papel do Architect no Pipeline ETL (1:30 min)

O Architect é o primeiro agente da fase **Transform**. Ele recebe:
- **Input:** Conceito do Muse + pesquisa do Researcher (módulos anteriores)
- **Output:** Estrutura completa do livro (outline, planos de capítulo, timeline)

Pense no Architect como o arquiteto de uma obra: ele desenha a planta antes de você construir. Sem estrutura, seu livro vira um canteiro de obras caótico.

### 2. Comando `*outline` — Outline Completo (2 min)

O comando mais importante do Architect.

```
@architect *outline

Gênero: Romance Policial
Estrutura: three-act
Conceito: Detetive aposentado precisa resolver caso de 20 anos atrás quando nova evidência surge
```

**O que ele gera:**
- Divisão em atos (Ato I: Setup / Ato II: Confrontation / Ato III: Resolution)
- Lista de capítulos com resumo de 1 linha cada
- Pontos de virada principais (Plot Points)
- Arco do protagonista

**Estruturas suportadas:**
- `three-act` — Clássica de 3 atos (setup, confrontation, resolution)
- `hero-journey` — Jornada do Herói de Joseph Campbell
- `save-the-cat` — Blake Snyder (beat sheet de roteiro)
- `problem-solution` — Não-ficção (problema → solução → implementação)
- `chronological` — Cronológica linear (memórias, biografias)

### 3. Comando `*chapter-plan` — Plano Detalhado por Capítulo (2 min)

Depois do outline, você precisa detalhar cada capítulo.

```
@architect *chapter-plan

Capítulo: 3
Outline anterior: [colar o outline gerado]
Foco: Detetive encontra a nova evidência que reabriu o caso
```

**O que ele gera:**
- Objetivo do capítulo (o que precisa acontecer)
- Cenas principais (quebradas em beats)
- Personagens presentes
- Tempo narrativo (quanto tempo passa na história)
- Gancho para o próximo capítulo

### 4. Comando `*timeline` — Cronograma Narrativo (1:30 min)

Para histórias complexas com múltiplas linhas temporais ou flashbacks.

```
@architect *timeline

Outline: [colar outline]
Tipo: dual-timeline (presente + flashbacks 20 anos atrás)
```

**O que ele gera:**
- Ordem cronológica real dos eventos
- Ordem narrativa (como aparece no livro)
- Marcadores temporais para cada cena
- Sugestões de quando usar flashbacks

---

## Demonstração Prática (3 min)

**Cenário:** Vamos criar um outline para um romance policial usando a estrutura de 3 atos.

**Passo 1:** Chamar o Architect com `*outline`

```
@architect *outline

Gênero: Thriller Policial
Estrutura: three-act
Conceito: Ex-detetive alcoólatra recebe ligação anônima sobre caso que arruinou sua carreira 15 anos atrás. Novo assassinato segue o mesmo padrão.
Protagonista: David Carvalho, 52 anos, aposentado da polícia, vive isolado no interior
Tom: Sombrio, atmosférico, ritmo tenso
```

**Passo 2:** Architect gera outline com 18 capítulos divididos em 3 atos, incluindo:
- Ato I (Cap 1-6): David recebe ligação, visita cena do crime, reencontra ex-parceira
- Plot Point I: Descobre que assassino deixou mensagem codificada para ele
- Ato II (Cap 7-14): Investigação paralela, confronto com polícia oficial, flashbacks do caso original
- Midpoint: David descobre conexão com sua própria família
- Ato III (Cap 15-18): Revelação do assassino, confronto final, redenção

**Passo 3:** Detalhar capítulo 1 com `*chapter-plan`

```
@architect *chapter-plan

Capítulo: 1
Outline: [colar outline gerado acima]
Foco: Apresentar David em sua rotina isolada e a ligação que muda tudo
```

**Resultado:** Plano de 4-5 cenas detalhadas, objetivos claros, gancho forte para o capítulo 2.

---

## Encerramento (1 min)

**Recap:**
Neste módulo você aprendeu a usar os 3 comandos principais do Architect:
- `*outline` para criar a estrutura completa do livro
- `*chapter-plan` para detalhar cada capítulo
- `*timeline` para cronogramas complexos

**Templates de apoio:**
- `book-proposal.md` — Estrutura de proposta editorial
- `chapter-template.md` — Template para planejar capítulos

**Próximo módulo:**
Agora que você tem a estrutura pronta, é hora de escrever de verdade. No **Módulo 05** você vai conhecer o Scribe — o agente que transforma seu outline em capítulos, cenas e diálogos reais. Nos vemos lá.

---

**Dica profissional:** Guarde o output do Architect em um arquivo. Você vai alimentar o Scribe com esse outline nos próximos módulos. Crie uma pasta `/meu-livro/` e salve tudo lá — isso vai acelerar muito seu workflow.
