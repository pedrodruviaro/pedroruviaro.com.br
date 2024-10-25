---
title: "Conhecendo Async Components no Vue"
date: "2024-10-16"
tag: "vue"
---

<!--more-->

# Conhecendo Async Components no Vue

Você já precisou renderizar componentes pesados ou que demoram um pouco para carregar no Vue? Nesse caso, a técnica de **Async Components** provavelmente é a solução ideal.

Os componentes assíncronos do Vue permitem que a gente carregue os códigos sob demanda, ou seja, apenas quando forem necessários. Isso melhora o tempo de carregamento inicial da aplicação e a experiência do usuário, especialmente em aplicações maiores ou com componentes muito complexos.

```vue
<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const AsyncComponent = defineAsyncComponent({
  loader: () => import("@/components/Component.vue"), // O componente em si
  loadingComponent: () => import("@/components/Loader.vue"), // Loading
  errorComponent: () => import("@/components/Error.vue"), // Exibido em caso de erro
  delay: 200, // Tempo antes de mostrar o loadingComponent
  timeout: 3000, // Tempo máximo para carregar o componente
})
</script>

<template>
  <AsyncComponent />
</template>
```

Nesse código acima, temos o seguinte comportamento:

Utilizamos a função **defineAsyncComponent** para carregar o Component.vue de forma assíncrona.

- Enquanto o componente carrega, é exibido um Loader (pode ser um skeleton que simula o layout final).

- Se houver um erro no carregamento, _Error.vue_ é renderizado, mostrando ao usuário que algo falhou.

- delay e timeout são propriedades que podemos passar para ter mais controle sobre o comportamento do layout. O uso delas é um pouco menos comum e mais específico.

- O componente assíncrono é então usado diretamente no template com a tag `<AsyncComponent />`.

O melhor benefício dessa técnica é a performance, pois conseguimos reduzir o tempo de carregamento no geral. Além disso, ganhamos em modularidade, já que solicitamos os componentes apenas quando são necessários, tornando o app mais leve.

[Documentação oficial](https://vuejs.org/guide/components/async)
