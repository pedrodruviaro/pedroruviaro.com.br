---
date: "2025-02-10"
tag: "nuxt"
---

<!--more-->

# Nuxt DX e Lazy components

A experiência de desenvolvimento com `Nuxt` é realmente fora de série.

Uma das coisas que mais uso no dia a dia para melhorar a performance das aplicações e sites é o sistema de _lazy loading_.

Para importar um componente dessa forma, tudo o que você precisa fazer é adicionar o prefixo _Lazy_ ao nome do componente. Simples assim.

Como temos o benefício do auto import dentro do `Nuxt`, isso deixa o código extremamente limpo.

O _lazy loading_ ajuda a melhorar o tamanho do bundle, carregando os componentes apenas quando eles são necessários.

No código abaixo, trouxe um exemplo prático. Usando a aba network nas ferramentas de desenvolvedor do navegador, verificamos que o arquivo do componente `MyComponent` é carregado apenas após o botão ser clicado.

```vue
<script setup lang="ts">
const isComponentVisible = ref(false)
</script>

<template>
  <div>
    <button @click="isComponentVisible = true">Show component!</button>

    <!-- <MyComponent v-if="isComponentVisible" /> -->
    <LazyMyComponent v-if="isComponentVisible" />
  </div>
</template>
```
