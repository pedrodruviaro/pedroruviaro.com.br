---
date: "2025-02-18"
tag: "nuxt"
---

<!--more-->

# Evitando erros de hidratação com o `<ClientOnly>`

Por padrão, o Nuxt usa renderização universal (SSR + CSR), o que significa que o código pode ser executado tanto no servidor quanto no cliente. Mas e quando um componente depende apenas do ambiente do navegador?

Se tentarmos renderizá-lo diretamente no SSR, podemos acabar com erros de hidratação. Para evitar isso, o Nuxt oferece o componente <ClientOnly>, que garante que o conteúdo dentro dele só será renderizado no client-side.

Além disso, podemos definir um fallback, que será exibido enquanto o componente do cliente ainda não foi carregado.

Isso é útil, por exemplo, para componentes que usam APIs do navegador, como o localStorage, evitando erros de execução no servidor. Veja um exemplo:

```vue
<script setup>
localStorage.setItem("myItem", "This is my item")

const localStorageItem = ref("")

onMounted(() => {
  localStorageItem.value = localStorage.getItem("myItem")
})
</script>

<template>
  <div>
    <span>Value stored: {{ localStorageItem }}</span>
  </div>
</template>
```

Se você tentar executar seu aplicativo, o Nuxt lançará um erro: "localStorage is not defined"

Isso ocorre porque o código é executado primeiro no servidor, que não suporta localStorage.

Você pode resolver esse problema usando o componente ClientOnly:

```vue
<script setup lang="ts"></script>

<template>
  <div>
    <!-- <MyComponent /> é renderizado apenas no cliente -->
    <ClientOnly>
      <MyComponent />

      <template #fallback>
        <!-- <LoaderSkeleton /> é renderizado no servidor  -->
        <LoaderSkeleton />
      </template>
    </ClientOnly>
  </div>
</template>
```

Confira mais exemplos e saiba mais sobre essa funcionalidade na [documentação oficial](https://nuxt.com/docs/api/components/client-only).
