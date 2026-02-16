---
handoff_id: HO-002B
date: 2026-02-16
pipeline_id: F3-CONTO-TEST
source_agent: Muse
target_agent: Publisher
genre: fiction/conto/conto-realista
book_title: "O Relojoeiro"
stage: Extract
parallel_execution: true
---

## Handoff: Muse → Publisher (Early Marketing Prep)

### Schema: handoff-muse-to-publisher.yaml
### Status: ✅ Validado

### Contexto

Este handoff acontece **em paralelo** com o início da Transform stage. Enquanto Researcher, Architect e Scribe desenvolvem o manuscrito, Publisher já pode começar pesquisa de mercado, análise de comparáveis e posicionamento estratégico.

**Trigger:** Automático após Muse completar task `muse-premise`

**Timing:** Este handoff foi enviado no mesmo dia que `HO-001 (Muse→Researcher)` e `HO-002 (Muse→Architect)`. Publisher trabalha em paralelo, SEM bloquear o pipeline principal.

**Objetivo:** Quando o manuscrito estiver pronto (Load stage), Publisher já terá estratégia de marketing definida, comp titles mapeados, target audience validado e posicionamento de mercado claro.

---

## Dados

### Premise

#### Logline

Seu Aníbal, relojoeiro de 78 anos, recebe Marina, sua última cliente antes de fechar a oficina definitivamente — ela traz o relógio de cuco do avô falecido, e juntos descobrem que consertar o tempo é uma forma de honrar quem se foi.

#### Expanded

Na penumbra de uma tarde de quinta-feira, Seu Aníbal varre pela última vez a oficina que ocupou por 55 anos na Rua São Bento, centro de São Paulo. Amanhã, sexta-feira, entregará as chaves ao novo proprietário — uma startup de aplicativos que transformará o espaço em "co-working descolado". As caixas de ferramentas já estão empacotadas, os relógios da parede foram doados ao museu da cidade, restam apenas as memórias penduradas nas paredes manchadas de umidade.

Quando está prestes a virar a placa para "FECHADO", Marina aparece na porta. Trintaicinco anos, roupas corporativas, olhos urgentes. Ela traz embrulhado em jornal velho um relógio de cuco suíço de 1962 — herança do avô que a criou, relojoeiro italiano radicado no Brasil, cliente antigo de Seu Aníbal nos anos 80. O relógio está parado há oito anos, desde a morte do avô. Marina nunca teve coragem de consertá-lo até saber que Aníbal estava fechando.

Seu Aníbal hesita. Já despediu-se emocionalmente da profissão, as mãos tremem mais do que antes, a visão já não é a mesma. Mas reconhece o relógio — foi ele quem o vendeu ao avô de Marina em 1985, presente de casamento. Aceita o trabalho.

Durante as três horas seguintes, enquanto desmonta o mecanismo sob a lupa, Aníbal e Marina conversam. Ele conta histórias da Rua São Bento nos anos dourados, quando havia doze relojoeiros só naquela quadra. Ela fala do avô, de como cresceu ouvindo o cuco cantar de hora em hora, de como o silêncio do relógio parado marcou a ausência.

O reparo revela surpresas: dentro do mecanismo, Aníbal encontra uma pequena fotografia dobrada — o avô de Marina jovem, ao lado de uma mulher que não é a avó. Uma história paralela, um segredo guardado entre engrenagens. Marina reconhece a moça: tia que nunca conheceu, falecida antes dela nascer, primeiro amor do avô.

Quando o cuco finalmente volta a cantar, não é apenas o relógio que se conserta. Marina entende que o avô guardava múltiplas temporalidades, múltiplos amores. Aníbal aceita que sua própria oficina, como o relógio, cumpriu seu ciclo — mas a arte permanece naqueles que tocou.

Eles se abraçam. Marina paga o dobro do combinado. Aníbal recusa, depois aceita metade. Ela leva o relógio embrulhado como se carregasse o próprio avô. Ele a observa partir pela vitrine, depois apaga as luzes. Amanhã entrega as chaves. Hoje, consertou o tempo pela última vez.

#### Comp Titles

**1. "Felicidade Clandestina" — Clarice Lispector**
- **Similaridade:** Contos brasileiros contemporâneos, prosa literária densa, foco em epifanias através de objetos cotidianos
- **Diferença:** Clarice é mais introspectiva/psicológica; "O Relojoeiro" é mais sensorial/materialista
- **Mercado:** Clássico da literatura brasileira, lido em escolas e universidades, audiência estabelecida para contos literários

**2. "O Vendedor de Passados" — José Eduardo Agualusa**
- **Similaridade:** Narrativas sobre memória e reconstrução do passado, conexão intergeracional através de objetos/histórias
- **Diferença:** Agualusa é romance, contexto angolano; "O Relojoeiro" é conto, contexto paulistano
- **Mercado:** Autor lusófono premiado internacionalmente, mostra que há audiência global para ficção literária em português sobre memória e identidade

**3. "Contos de Oficina" — Mia Couto**
- **Similaridade:** Prosa poética sobre artesanato e trabalho manual, setting em espaços de trabalho tradicionais, personagens velhos sábios
- **Diferença:** Mia Couto usa neologismos e linguagem experimental; "O Relojoeiro" é mais realista
- **Mercado:** Mostra que contos sobre artesãos/trabalho manual têm nicho literário estabelecido em mercado lusófono

**4. "Minimalismo" — Raymond Carver (tradução)**
- **Similaridade:** Estilo minimalista, contenção emocional, epifanias através de eventos cotidianos, personagens classe trabalhadora
- **Diferença:** Carver é norte-americano, tom mais pessimista; "O Relojoeiro" tem esperança contida
- **Mercado:** Carver é referência para contos contemporâneos no Brasil, audiência estabelecida para realismo minimalista

**5. "A Menor Mulher do Mundo" (conto) — Clarice Lispector**
- **Similaridade:** Single-effect structure, conto curto (~3k palavras), foco em encontro único transformador
- **Diferença:** Clarice usa elemento fantástico; "O Relojoeiro" é realismo puro
- **Mercado:** Demonstra que contos literários curtos brasileiros têm espaço em antologias e revistas literárias

---

### Genre Config

#### Genre
`fiction/conto/conto-realista`

#### Subgenre
Realismo urbano contemporâneo com elementos de narrativa literária introspectiva. Influências do realismo brasileiro moderno (Rubem Fonseca, Luis Fernando Veríssimo) combinadas com a tradição do conto psicológico. Foco em personagens comuns enfrentando questões existenciais através de objetos cotidianos que ganham dimensão simbólica.

#### Target Audience

**Perfil demográfico:**
- **Idade:** 35-65 anos (sweet spot: 45-60)
- **Escolaridade:** Superior completo ou pós-graduação
- **Classe:** Média e média-alta
- **Geografia:** Urbana (capitais brasileiras, especialmente SP, RJ, BH, Porto Alegre)

**Perfil psicográfico:**
- Leitores de ficção literária brasileira contemporânea
- Consumidores de cultura "slow" (teatro, cinema de autor, exposições)
- Valorizam artesanato, patrimônio cultural, memória urbana
- Nostalgia crítica (não saudosismo ingênuo) sobre transformações da cidade
- Interesse em questões geracionais, legado, continuidade vs. ruptura

**Comportamento de leitura:**
- Assinantes de revistas literárias (Quatro Cinco Um, Piauí, Serrote)
- Frequentadores de livrarias independentes (Martins Fontes, Travessa, Cultura)
- Participantes de clubes de leitura presenciais ou online
- Leitores de colunas literárias em jornais (Folha, Estado, O Globo)
- Compradores de antologias de contos brasileiros

**Motivações de leitura:**
- Busca por prosa literária de qualidade (estilo importa)
- Reconhecimento de experiências urbanas contemporâneas (gentrificação, obsolescência profissional)
- Apreciação de detalhes técnicos/sensoriais (worldbuilding denso)
- Identificação com temas de memória, legado, perda
- Interesse cultural por São Paulo como personagem literário

#### Tone

Melancólico mas não pessimista, nostálgico sem ser sentimental. Tom literário elevado com linguagem acessível. Ritmo contemplativo que mimetiza o trabalho meticuloso do relojoeiro. Uso de silêncios narrativos e detalhes sensoriais (som de relógios, cheiro de óleo lubrificante, luz natural entrando pela vitrine empoeirada).

**Registros emocionais:**
- Contenção (classe trabalhadora paulistana não faz demonstrações dramáticas)
- Dignidade (artesão orgulhoso do ofício)
- Melancolia ativa (não é luto paralisante, é processo de transformação)
- Esperança discreta (resolução positiva mas não fantasiosa)

**Estilo narrativo:**
- Terceira pessoa limitada (POV próximo mas não first-person)
- Presente histórico ocasional para momentos de alta intensidade
- Descrições sensoriais densas mas precisas (sem excesso de adjetivos)
- Diálogos enxutos, pausas significativas
- Metáforas sobre tempo/mecanismos integradas organicamente

---

## Optional

### Characters

**Para material de marketing, destacar:**

#### Seu Aníbal (Protagonista)
- **Idade:** 78 anos
- **Profissão:** Relojoeiro artesanal há 55 anos
- **Conflito:** Fechando a oficina, lidando com obsolescência e legado
- **Traço marcante:** Mãos precisas que começam a tremer, visão cansada mas ainda capaz de enxergar mecanismos minúsculos
- **Hook de marketing:** "O último relojoeiro da Rua São Bento decide fazer um último conserto"

#### Marina (Deuteragonista)
- **Idade:** 35 anos
- **Profissão:** Executiva corporativa (não especificado, mas roupas e postura indicam)
- **Conflito:** Carregando relógio do avô falecido há 8 anos, nunca teve coragem de consertar
- **Traço marcante:** Urgência contida, culpa silenciosa
- **Hook de marketing:** "Uma mulher busca consertar mais do que um relógio — busca honrar uma promessa"

#### Relógio de Cuco (Objeto-personagem)
- **Modelo:** Suíço, 1962, madeira de tília
- **História:** Presente de casamento do avô de Marina, parado há 8 anos
- **Função narrativa:** MacGuffin que conecta passado e presente, memória e reparação
- **Hook de marketing:** "Um relógio parado guarda mais do que horas — guarda histórias"

### Themes

**Para posicionamento editorial e resenhas:**

1. **Legado e Continuidade**
   - Como passamos adiante o que fazemos (não apenas para filhos, mas para quem tocamos)
   - Artesanato como forma de imortalidade modesta

2. **Obsolescência e Resistência**
   - Profissões que desaparecem na era digital
   - Valor do trabalho manual em mundo de consumo descartável
   - Gentrificação urbana e perda de patrimônio cultural imaterial

3. **Tempo e Reparação**
   - Tempo como mecanismo que pode ser consertado (literal e metaforicamente)
   - Reparar objetos = reparar relações = reparar memórias

4. **Geografia Afetiva Urbana**
   - São Paulo como palimpsesto (camadas de tempo coexistindo)
   - Rua São Bento como metonímia das transformações urbanas do século XX-XXI
   - Memória de lugares que desaparecem

5. **Conexão Intergeracional**
   - Marina (35) e Aníbal (78) representam dois Brasis
   - Diálogo entre aceleração digital e tempo artesanal
   - Objetos de família como pontes entre gerações

### Title Options

**Títulos em consideração (Muse ainda não decidiu final):**

#### 1. "O Relojoeiro" (atual)
**Prós:** Direto, evocativo, remete a tradição de contos brasileiros com profissões no título ("O Vendedor de Passados", "A Costureira e o Vento")
**Contras:** Genérico demais? Pode não destacar em lista

#### 2. "O Último Conserto"
**Prós:** Duplo sentido (último conserto do relógio + último conserto da oficina), emocional
**Contras:** Soa melancólico demais, pode afastar leitores que buscam final esperançoso

#### 3. "Oficina A. Tavares"
**Prós:** Específico, evoca lugar físico, nome real soa autêntico
**Contras:** Menos óbvio para leitores casuais, precisa de subtítulo explicativo?

#### 4. "O Relógio de Júlio"
**Prós:** Foco no objeto central, nome próprio humaniza
**Contras:** Júlio é personagem off-screen, pode confundir

#### 5. "Tília" (madeira do relógio)
**Prós:** Palavra única, poética, literária, evoca materialidade
**Contras:** Obscuro demais, maioria dos leitores não sabe o que é tília

---

## Memory Updates

`[MUSE] [2026-02-16] [HANDOFF] Muse → Publisher (parallel execution) — early marketing prep iniciado`

`[MUSE] [2026-02-16] [ADDED] Comp titles: 5 referências (3 brasileiras + 2 internacionais traduzidas)`

`[MUSE] [2026-02-16] [ADDED] Target audience: 35-65 anos, escolaridade superior, leitores de ficção literária brasileira, urbano`

`[MUSE] [2026-02-16] [ADDED] Themes para posicionamento: legado, obsolescência, tempo/reparação, geografia afetiva, conexão intergeracional`

`[MUSE] [2026-02-16] [PENDING] Título final não decidido — 5 opções em análise, decisão após manuscript draft`

---

## Próximo Passo

**Para Publisher:**

Com estes dados, execute pesquisa de mercado enquanto o manuscrito está sendo desenvolvido. Foque em:

1. **Mapear canais de distribuição:**
   - Revistas literárias brasileiras que publicam contos (Quatro Cinco Um, Piauí, Serrote, Rascunho)
   - Antologias anuais de contos (Prêmio Sesc de Literatura, Coleção Prosa do Observatório)
   - Plataformas digitais (Medium em português, Substack literário)

2. **Analisar comp titles em detalhes:**
   - Como foram posicionados editorialmente?
   - Quais resenhas receberam? Onde foram publicadas?
   - Performance de vendas (se dados disponíveis)
   - Estratégia de lançamento

3. **Validar target audience:**
   - Confirmar através de análise de reviews de comp titles
   - Identificar influenciadores literários em Instagram/Twitter/Threads que cobrem contos brasileiros
   - Mapear clubes de leitura focados em literatura brasileira contemporânea

4. **Preparar estratégia de pitch:**
   - One-pager para envio a editoras (quando manuscrito estiver pronto)
   - Carta de apresentação para revistas literárias
   - Bio do autor (se fiction vs. se baseado em pesquisa real)

5. **Decisão sobre título:**
   - Testar as 5 opções com amostra do target audience
   - Analisar SEO e discoverability (pesquisas Google por "contos brasileiros artesanato", "contos São Paulo", etc.)
   - Escolher título final antes de Load stage

**Prazo:** Publisher tem ~4-6 semanas (tempo estimado para Transform stage completar) para entregar estratégia de marketing completa.

**Entrega esperada:** Documento de posicionamento de mercado incluindo canais, comp analysis, estratégia de pitch e decisão de título.

---

**Nota do Muse:**

Este handoff é OPCIONAL e PARALELO. Se Publisher estiver ocupado com outros projetos, pode adiar este trabalho. O pipeline principal (Extract → Transform → Load) NÃO depende deste handoff. Mas ter estratégia de marketing pronta quando o manuscrito finalizar acelera significativamente o time-to-market.

Use este material como ponto de partida, não como mandato rígido. Se sua pesquisa de mercado revelar que o posicionamento deveria ser diferente (exemplo: focar em público mais jovem através de redes sociais literárias), sinta-se livre para pivotar.

— Muse
