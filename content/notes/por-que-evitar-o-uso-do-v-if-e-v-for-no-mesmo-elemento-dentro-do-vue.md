---
title: "Por que evitar o uso do v-if e v-for no mesmo elemento dentro do Vue?"
date: "2024-10-09"
tag: "vue"
---

<!--more-->

# Por que evitar o uso do v-if e v-for no mesmo elemento dentro do Vue?

Dentro do Vue, uma prática que pode gerar problemas é usar a diretiva `v-if` com `v-for` no mesmo elemento. Mas por que isso não é recomendado?

O problema: quando _v-if_ e _v-for_ são usados juntos, o Vue avalia primeiro o _v-if_ e depois o _v-for_. Isso significa que o loop pode não ser executado se a condição do _v-if_ não for atendida, o que pode levar a comportamentos estranhos na renderização dos itens da lista. Pode ocorrer também a não realização do loop ou até mesmo, dependendo da implementação, o re-render de toda a lista, mesmo ela não aparecendo em tela.

A solução: uma forma de evitar esse problema é mover o _v-if_ para uma tag acima da lista, como uma `<div>`, por exemplo, ou usar a tag `<template>` do Vue. Ela é uma tag coringa que não é renderizada no DOM, isso evita problemas de layout e código extra desnecessário. Aplicar o _v-if_ ao `<template>` garante que o _v-for_ seja executado sem erros, não havendo impactos de performance ou comportamentos estranhos do código.

```vue
<script setup lang="ts">
const items = [
  { id: 1, title: "First Item" },
  { id: 2, title: "Second Item" },
  { id: 3, title: "Third Item" },
]

const myCustomCondition = ref(true)
</script>

<template>
  <Container>
    <template v-if="myCustomCondition">
      <Card v-for="item in items" :key="item.id" :title="item.title" />
    </template>
  </Container>
</template>
```

[Evitando v-if e v-for](https://vuejs.org/style-guide/rules-essential#avoid-v-if-with-v-for)

[Renderização de listas](https://vuejs.org/guide/essentials/list.html#v-for-with-v-if)
