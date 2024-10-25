---
title: "Evitando prop drilling com Provide/Inject no Vue"
date: "2024-10-23"
tag: "vue"
---

<!--more-->

# Evitando prop drilling com Provide/Inject no Vue

Todo mundo que trabalha com front-end já precisou compartilhar dados entre vários componentes aninhados e acabou repetindo props de um componente para outro. Isso é conhecido como **prop drilling** e torna o código mais difícil de manter e gerenciar, além de causar desestabilização de props e re-renders desnecessários.

No Vue, uma solução nativa para esse problema é a API de `Provide/Inject`. Com ela, compartilhar dados entre componentes pai e filhos sem a necessidade de passar props manualmente em cada nível.

Provide: o componente pai fornece dados que ficam disponíveis para qualquer componente descendente.

```vue
<script setup>
const user = ref({
  name: "John Doe",
  age: 28,
})

provide("user", user)
</script>

<template>
  <div>
    <slot />
  </div>
</template>
```

Inject: qualquer componente filho que precise desses dados pode acessá-los diretamente (por meio de uma key), sem se preocupar com componentes intermediários.

```vue
<script setup>
const user = inject("user")

const updateUserAge = () => user.value.age++
</script>

<template>
  <div>
    <pre>{{ user }}</pre>
    <button @click="updateUserAge">Aumentar idade</button>
  </div>
</template>
```

Com provide e inject, tornamos o código mais organizado e fácil de manter (pelo menos o intuito é esse), especialmente quando estamos lidando com dados globais como configurações de temas, serviços ou qualquer outro estado que precise ser acessado por vários componentes em diferentes níveis.

No exemplo da imagem, os componentes filhos podem acessar as informações do usuário logado diretamente, sem a necessidade de passar esses dados como props através de múltiplos componentes.

## Provide em Composables

Outra vantagem do Vue é que provide também pode ser utilizado dentro de composables. Os valores providos a partir de um composable estão disponíveis para os componentes filhos no nível em que o composable foi chamado, tornando assim ainda mais fácil a organização e separação das responsabilidades.

Vale ressaltar que podemos passar refs dentro do provide é que não perdemos sua reatividade, o que torna essa API ainda mais versátil e flexível.

Sobre o uso com typescript, o Vue oferece uma interface chamada `InjectionKey` que facilita bastante a comunicação entre os componentes. Como o post já está longo, fica para um segundo momento. O link da documentação está aqui embaixo.

[Provide/Inject](https://vuejs.org/guide/components/provide-inject.html)

[Uso com TypeScript](https://vuejs.org/guide/typescript/composition-api.html#typing-provide-inject)
