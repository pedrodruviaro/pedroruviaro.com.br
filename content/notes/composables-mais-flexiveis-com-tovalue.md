---
date: "2025-01-14"
tag: "vue"
---

<!--more-->

# Criando composables mais flexíveis com toValue

Criar **composables mais flexíveis** no Vue é mais simples do que você imagina.

Com o uso do helper `toValue`, podemos normalizar os argumentos passados para o composable, tornando a manipulação dos dados mais simples.

Imagine que você está criando um composable `useCurrency` para formatar valores monetários. No exemplo de código abaixo, o `toValue` normaliza a entrada do argumento _“amount"_. Ou seja, posso passar uma ref (_amount.value_) e a saída será um número (ou uma string, etc).

```ts
import { toValue } from "vue"

interface Options {
  amount: Ref | string | number
  locale?: string
  currency?: string
}

export function useCurrency({
  amount,
  locale = "pt-BR",
  currency = "BRL",
}: Options) {
  const formatted = computed(() => {
    const value = toValue(amount)

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value)
  })

  return formatted
}
```

Tá, mas porque isso é interessante?

A primeira vantagem é garantir a padronização, pois assim vamos estar tratando os valores de forma consistente, melhorando a usabilidade geral. A segunda vantagem, e talvez a melhor, é que conseguimos **manter a reatividade**. Por exemplo, se passarmos uma ref como argumento, quando seu valor mudar, a saída do composable também é atualizada. Dessa forma tiramos proveito de todo o sistema reativo do Vue sem muita dor de cabeça.

Um caso de uso mantendo a reatividade seria:

```vue
<script setup lang="ts">
const value = ref(20)
const formatedValue = useCurrency({ amount: value })
</script>

<template>
  <div>
    <p>{{ formatedValue }}</p>
    <button @click="value++">Add</button>
  </div>
</template>
```

Gostou? Confere mais sobre o `toValue` na [documentação oficial](https://vuejs.org/api/reactivity-utilities#tovalue).
