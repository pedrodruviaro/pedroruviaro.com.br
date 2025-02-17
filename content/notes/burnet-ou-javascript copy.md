---
date: "2025-02-18"
tag: "nuxt"
---

<!--more-->

# Evitando erros de hidratação com o `<ClientOnly>`

Trabalhar com SSR é lidar com erros de hidratação inesperados o tempo todo.

Por padrão, o _Nuxt_ usa **renderização universal (SSR + CSR)** e um posterior processo de hidratação. **Mas e quando um componente depende apenas do ambiente do navegador?**

Ao tentarmos renderizá-lo diretamente no servidor, podemos acabar com aqueles erros chatos de hidratação. Para evitar isso, o _Nuxt_ oferece o componente <ClientOnly>, que garante que o conteúdo só será renderizado no cliente.

Dessa forma, evitamos verificações de _"window"_ ou gambiarras para checar em qual ambiente estamos. Além disso, podemos definir um _fallback_ que será exibido enquanto o componente carrega.

Isso é muito útil para componentes que usam APIs do navegador, como o localStorage, ou client-side bibliotecas como o [monaco-editor](https://www.npmjs.com/package/@guolao/vue-monaco-editor). Veja um exemplo:

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

Se você tentar executar, o _Nuxt_ lançará um erro: _"localStorage is not defined"_. Isso ocorre porque o código é executado primeiro no servidor, que não suporta localStorage.

Podemos resolver isso usando o componente `<ClientOnly>`:

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
