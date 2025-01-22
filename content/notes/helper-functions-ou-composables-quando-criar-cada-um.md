---
date: "2025-01-22"
tag: "vue"
---

<!--more-->

# Helper Functions ou Composables? Quando criar cada um?

Uma dúvida que surgiu em um post meu recente foi: **quando criar uma função helper/util e quando criar um composable?**

Uma abordagem prática que sigo é:

- Se a função **utiliza recursos específicos do Vue**, como _ref_, _computed_, métodos do ciclo de vida, etc, eu crio um composable.
- Nenhum dos pontos citados acima: crio função “pura” js/ts que pode ser usada em qualquer lugar sem dependência de _APIs_ específicas de _framework_. Geralmente utilizo a pasta _helpers_ ou _utils_ (nunca vi um consenso em relação a isso).

Essa distinção simplifica o processo de manutenção, uma vez que funções _helpers_ podem ser reutilizadas em diferentes contextos ou frameworks, enquanto composables ficam focados em lidar com a reatividade e recursos específicos do Vue.

## Exemplo prático:

Imagine que você precisa formatar um valor de data para _pt-BR_ e exibir esse valor em um componente.

Podemos utilizar uma função que realiza a formatação da data. É independente de _frameworks_ e pode ser usada em qualquer lugar. O problema: perdemos a reatividade do Vue. Isso não é necessariamente um problema, dependendo da arquitetura da solução.

```ts
// @/helpers/formatDate.ts
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(date)
}
```

Ao criarmos um _composable_, conseguimos manter o sistema de reatividade. Isso abre brecha para trabalharmos com _watchers_, ciclos de vida do componente e mais.

```ts
// @/composables/useFormattedDate.ts
export function useFormattedDate(date: Ref<Date>) {
  // toRef(date) ou toValue(date) se necessário
  const formatted = computed(() => {
    return new Intl.DateTimeFormat("pt-BR").format(date.value)
  })
  return { formatted }
}
```

Eu gosto de utilizar o máximo possível de funções “puras” para garantir que o código seja reaproveitado em diferentes contextos. Essa prática aumenta a flexibilidade do projeto e reduz o esforço de reescrita em outros ambientes.

Por outro lado, vejo nos _composables_ uma uma forma de organizar e separar as features e lógicas do projeto que dependem diretamente do Vue. [Como citei em outro post](/notes/thin-composable-pattern), gosto de seguir com a abordagem de “thin _composables_” para separar _features_.
