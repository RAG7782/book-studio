---
task: Criar Outline
responsavel: "@architect"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - premise: Premissa do livro
  - genre: Genero
  - target_length: Tamanho alvo (numero de capitulos ou palavras)
  - structure_model: Modelo estrutural (3-act, hero-journey, etc.)
Saida: |
  - outline: Outline completo com capitulos e beats
  - structure: Modelo estrutural aplicado
  - pacing_map: Mapa de tensao/ritmo
---

# *outline

Criar outline/estrutura completa do livro.

## Flow

1. Analisar premissa, genero e publico
2. Recomendar modelo estrutural adequado
3. Definir numero de capitulos/partes
4. Criar beats para cada capitulo
5. Mapear arcos (principal + sub)
6. Verificar pacing e distribuicao de tensao
7. Entregar outline navegavel

## Modelos Estruturais

### Ficcao
- **Three-Act**: Setup → Confrontation → Resolution
- **Hero's Journey**: 12 etapas de Campbell
- **Save the Cat**: 15 beats de Snyder
- **Kishotenketsu**: Intro → Development → Twist → Conclusion
- **Seven-Point**: Hook → Plot Turn 1 → Pinch 1 → Midpoint → Pinch 2 → Plot Turn 2 → Resolution

### Nao-ficcao
- **Tematica**: Capitulos por tema/conceito
- **Cronologica**: Sequencia temporal
- **Problem-Solution**: Problema → Analise → Solucoes
- **Progressive**: Simples → Complexo
- **Case-Study**: Teoria intercalada com exemplos

## Output Format

Para cada capitulo:
- **Numero e titulo**
- **POV** (quem narra/foca)
- **Objetivo** (o que este capitulo realiza)
- **Beats** (3-7 momentos-chave)
- **Gancho final** (transicao para proximo)
- **Tensao** (1-10)
