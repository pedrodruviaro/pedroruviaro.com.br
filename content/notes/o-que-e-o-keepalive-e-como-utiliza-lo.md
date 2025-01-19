---
date: "2025-01-20"
tag: "nuxt"
---

<!--more-->

# O que é o KeepAlive e como utilizá-lo

O `KeepAlive` é uma funcionalidade feita para otimizar o desempenho **preservando o estado de componentes** e evitando sua recriação durante as navegações.

Ao utilizar o `KeepAlive`, o `Vue` mantém os componentes em memória, preservando seu estado. Isso significa que, em vez de desmontar o componente, ele é pausado (ciclo _onDeactivated_). Quando o usuário retorna ao componente, ele é reativado exatamente como estava antes (ciclo _onActivated_).

Um exemplo comum de uso é entre troca de abas dinâmicas. O `KeepAlive` pode ser aplicado para evitar a perda de estado ao alternar entre elas.

No código abaixo, tanto a aba selecionada quando o conteúdo da aba é mantido em memória. Assim, qualquer estado dentro do componente é preservado.

```vue
<!-- pages/index.vue -->

<script setup lang="ts">
const TabA = resolveComponent("TabA")
const TabB = resolveComponent("TabB")

const components = [
  { name: "TabA", component: TabA },
  { name: "TabB", component: TabB },
]

const selectedComponent = ref("TabA")

const componentToRender: Component | undefined = computed(() => {
  const toRender = components.find((i) => i.name === selectedComponent.value)
  return toRender?.component
})
</script>

<template>
  <div>
    <button @click="() => (selectedComponent = 'TabA')">Tab A</button>
    <button @click="() => (selectedComponent = 'TabB')">Tab B</button>

    <KeepAlive>
      <Component :is="componentToRender" />
    </KeepAlive>
  </div>
</template>
```

Trouxe o código feito em Nuxt de forma proposital. Aqui, seguindo a [documentação](https://nuxt.com/docs/api/nuxt-config#keepalive), precisamos de uma configuração extra: dentro de _app.vue_, precisamos definir quais páginas queremos incluir ou excluir, passando como props ao `NuxtPage`.

```vue
<!-- app.vue  -->
<NuxtPage :keepalive="{ include: 'index' }" />
```

Lembrando que essas opções também existem no `Vue`, porém não é necessário configurar. [Confere aqui na documentação.](https://vuejs.org/guide/built-ins/KeepAlive.html#keepalive)

O uso do `KeepAlive` deve ser estratégico, priorizando componentes cuja recriação frequente impactaria o desempenho da aplicação. Em caso de uso excessivo, ele pode causar problemas de performance.
