---
task: Beta Reading Simulado
responsavel: "@critic"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - manuscript: Manuscrito
  - reader_profile: Perfil do leitor (casual, literario, academico, target, industry)
  - focus: Areas de foco especificas (opcional)
Saida: |
  - report: Relatorio de beta reading
  - experience_log: Log de experiencia de leitura
  - dnf_risk: Risco de abandono por capitulo
---

# *beta-read

Simular experiencia de beta reading com perfil de leitor especifico.

## Flow

1. Adotar perfil de leitor selecionado
2. Ler capitulo a capitulo como leitor real
3. Registrar reacoes em tempo real (engajamento, confusao, emocao)
4. Marcar pontos de potencial abandono (DNF - Did Not Finish)
5. Registrar previsoes e surpresas
6. Gerar relatorio de experiencia
7. Entregar com risco de abandono por capitulo

## Perfis de Leitor

### Casual
- Le por entretenimento, quer fluir
- Abandona se ficar entediado
- Valoriza ritmo e personagens

### Literario
- Busca profundidade, originalidade, beleza
- Tolera ritmo lento se prosa for boa
- Julga com criterios elevados

### Target Audience
- Adaptado ao publico-alvo definido
- Expectativas do genero especifico
- Comparacao com titulos similares

### Industry
- Agente literario ou editor profissional
- Busca potencial de mercado
- Avalia hook, voz unica, comp titles

## Experience Log
Para cada capitulo:
- **Engajamento**: 1-10
- **Emocao dominante**: [curiosidade, tensao, tedio, etc.]
- **Previsao**: O que acho que vai acontecer
- **DNF risk**: Baixo | Medio | Alto
- **Nota**: Reacao como leitor
