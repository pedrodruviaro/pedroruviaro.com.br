---
date: "2024-12-03"
tag: "nuxt"
---

<!--more-->

# useAsyncData ou useLazyAsyncData, qual usar?

No `Nuxt`, esses dois composables são responsáveis por buscar dados via _SSR_ e exibir a informação em tela, porém existe uma diferença chave entre eles.

O `useAsyncData` bloqueia a navegação até o dado ser resolvido, ou seja, a troca de página não acontece até que tudo esteja conforme o esperado.

> Dica: usar o componente `NuxtLoadingIndicator` é uma maneira simples de mostrar esse estado de loading para o usuário.

Já o `useLazyAsyncData` não faz o bloqueio da navegação, dessa forma, precisamos tratar o estado de _loading_ na tela com base no estado de _“status”_ (retornado pelo _composable_), seja com um _skeleton_ ou algum outro _loader_.

Veja um exemplo do uso desses dois composables:

### useAsyncData

```vue
<script setup lang="ts">
// useAsyncData
const { data: posts } = await useAsyncData("posts", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts/")
)
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
    </li>
  </ul>
</template>
```

### useLazyAsyncData

```vue
<script setup lang="ts">
// useLazyAsyncData
const { status, data: todos } = await useLazyAsyncData("todos", () =>
  $fetch("https://jsonplaceholder.typicode.com/todos")
)
</script>

<template>
  <ListLoader v-if="status === 'pending'" />

  <ul v-else>
    <li v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
    </li>
  </ul>
</template>
```

Em ambos os casos temos a renderização por parte do servidor se a página for diretamente acessada, ou seja, não temos perdas em termos de SEO. Essa sempre foi minha maior dúvida. Podemos validar isso na aba "_payload”_, dentro do devtools.

Então, qual a diferença entre eles? A resposta: UX.

A preferência vai do desenvolvedor (ou do designer). Pensando como usuário, eu particularmente prefiro o `useLazyAsyncData` e uma tela de loading e torna a navegação muito mais fluida. No entanto, essa abordagem é um pouco mais trabalhosa e demorada.

Confira mais exemplos e o guia completo de uso na [documentação oficial](https://nuxt.com/docs/api/composables/use-lazy-async-data).
