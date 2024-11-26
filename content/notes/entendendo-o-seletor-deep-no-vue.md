---
date: "2024-11-27"
tag: "vue"
---

<!--more-->

# Entendendo o seletor "deep" no Vue

Recentemente, precisei implementar o seguinte comportamento: eu tinha um componente `ListItem` com uma borda padrão, mas precisava que o último elemento da lista ficasse sem a borda, para se encaixar no layout proposto.

```vue
<template class="item border-b">
  <li>
    <NuxtLink>
      <!-- Algum conteúdo -->
    </NuxtLink>
  </li>
</template>

<style scoped>
.item:last-child {
  border: none !important;
}
</style>
```

Minha solução inicial foi usar o seletor CSS _:last-child_ dentro do componente para remover o estilo. Funcionou, mas trouxe uma limitação: toda vez que o componente era usado, o último elemento sempre ficava sem a borda.

Uma solução simples fornecida pelo Vue são os `deep selectors`. Eles servem para remover a limitação do escopo, possibilitando que o estilo aplicado afete elementos internos, mesmo dentro de componentes filhos. Em outras palavras, o estilo pode ser aplicado a elementos "mais profundos" no DOM.

Refatorando o código antigo, cheguei ao resultado abaixo. Agora, o componente `ListItem` mantém a borda padrão e eu a removo somente quando necessário.

```vue
<template>
  <ul class="grid gap-4">
    <ListItem v-for="item in items" :key="item.id" />
  </ul>
</template>

<style scoped>
:deep(li):last-child {
  @apply border-b-0;
}
</style>
```

O **deep** também pode ser usado em combinação com outros seletores, como no exemplo com _:last-child_, para atingir maior especificidade. Embora seja muito prático, ele pode dificultar a manutenção do código. O uso deve ocorrer somente em “ambiente controlado”, isso com certeza poupará tempo em debugs futuros, principalmente em casos com muitos elementos aninhados.

> Confira mais detalhes e exemplos na [documentação oficial](https://vuejs.org/api/sfc-css-features.html#deep-selectors).
