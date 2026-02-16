---
task: Escrever Sinopse
responsavel: "@publisher"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - manuscript_summary: Resumo do manuscrito
  - genre: Genero
  - target_audience: Publico-alvo
  - tone: Tom do livro
Saida: |
  - back_cover: Texto de quarta-capa (150-200 palavras)
  - amazon_description: Descricao Amazon (até 4000 chars)
  - elevator_pitch: Pitch de 30 segundos
  - tagline: Frase de efeito (1 linha)
handoff_schema: schemas/handoff-muse-to-publisher.yaml
memory_sections: [meta]
---

# *sinopse

Escrever sinopse profissional em multiplos formatos.

## Flow

1. Analisar manuscrito e publico-alvo
2. Identificar gancho principal
3. Escrever tagline (1 linha impactante)
4. Escrever quarta-capa (150-200 palavras)
5. Expandir para descricao Amazon (formatada com HTML basico)
6. Criar elevator pitch (30 segundos oral)
7. Testar: leria este livro baseado na sinopse?

## Formula de Sinopse (Ficcao)

1. **Setup** (1-2 frases): Mundo e protagonista
2. **Incitante** (1 frase): O que muda tudo
3. **Conflito** (2-3 frases): O que esta em jogo
4. **Hook** (1 frase): Por que voce PRECISA ler (sem spoiler)

## Formula de Sinopse (Nao-ficcao)

1. **Problema** (1-2 frases): Dor do leitor
2. **Promessa** (1 frase): O que o livro entrega
3. **Metodo** (2-3 frases): Como o livro resolve
4. **Autoridade** (1 frase): Por que confiar no autor
5. **Call to action** (1 frase): Urgencia

## Regras
- NUNCA revelar o final (ficcao)
- Usar tempo presente
- Verbos ativos e concretos
- Emocao > informacao
- Testar em voz alta
