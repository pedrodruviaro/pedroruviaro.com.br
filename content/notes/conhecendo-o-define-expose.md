---
date: "2024-11-07"
tag: "vue"
---

<!--more-->

# Conhecendo o defineExpose no Vue

No Vue, temos um macro pouco conhecido chamado `defineExpose`, que serve para expor métodos e propriedades públicas de componentes aos seus componentes pai. Esse macro permite definir quais partes do componente podem ser acessadas publicamente.

O uso `defineExpose` serve para facilitar o compartilhamento de dados e métodos entre componentes. Ele permite que um componente filho exponha _ref_ ou funções ao pai, aumentando a comunicação entre eles.

- Dentro do componente filho (_ComponentB.vue_)

```vue
<script setup lang="ts">
const title = ref("")

defineExpose({ title })
</script>

<template>
  <input type="text" v-model="title" />
</template>
```

- No componente pai (_ComponentA_)

```vue
<script setup lang="ts">
import ComponentB from "./ComponentB.vue"

const insideValueTitle = ref<InstanceType<typeof ComponentB> | null>(null)
</script>

<template>
  <div>
    <h2>The title is: {{ insideValueTitle?.title }}</h2>
    <ComponentB ref="insideValueTitle" />
  </div>
</template>
```

No exemplo do código acima, o **ComponentB** expõe a propriedade title ao componente pai (**ComponentA**), que consegue acessar (e modificar) diretamente esse valor, **mantendo a reatividade**. Dessa forma, reduzimos a necessidade de emissão de eventos, por exemplo.

Tá, mas e o `defineModel`? Ambos não fazerm a mesma coisa?

Enquanto o `defineExpose` é utilizado somente para tornar propriedades e métodos de um componente acessíveis para o componente pai. Em outras palavras: para gerenciamento e sincronização de estado reativo, use o `defineModel`. Se precisar ler alguma propriedade pontualmente (mantendo a reatividade) ou acessar algum método interno, o `defineExpose` pode ser uma boa solução.

Um outro caso de uso (o que me fez descobrir o `defineExpose`) é passar uma template _ref_ de um elemento interno para ser lidado no componente acima. Por exemplo: podemos passar uma template _ref_ de um _input_ e realizar o foco direto pelo componente pai após algum método ser executado. As possibilidades são imensas.
