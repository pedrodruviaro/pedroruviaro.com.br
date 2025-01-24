---
date: "2025-01-24"
tag: "vue"
---

<!--more-->

# Otimização no Vue com shallowRef

Saber balancear performance e interatividade é fundamental no entendimento da reatividade no Vue _(talvez em todos os frameworks JS)_.

No entanto, nem sempre precisamos que todos os níveis de um objeto ou _array_ sejam reativos. Observar uma estrutura complexa pode causar um uso de recursos muito mais alto do que o realmente necessário.

Para contornar esse problema, o Vue disponibiliza a API `shallowRef`. Ela cria uma **referência superficial**, ou seja, apenas o valor “raiz” é observado. **As alterações nas propriedades internas de objetos ou elementos de arrays não causam uma atualização dos dados.**

Por exemplo, ao usar `shallowRef` com uma lista de objetos, adicionar um novo item atualiza a interface, mas alterar uma propriedade interna de um dos objetos não.

```vue
<script setup lang="ts">
import { shallowRef } from "vue"

const items = shallowRef([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
])
</script>

<template>
  <main>
    <!-- Altera o valor "raiz" => causa uma nova renderização -->
    <button @click="() => (items = [...items, { id: 3, name: 'Item 3' }])">
      Add Item
    </button>

    <!-- Altera uma propriedade interna => não causa uma nova renderização -->
    <button @click="() => (items[0].name = 'Updated item 1')">
      Update Item
    </button>

    <ul>
      <li v-for="item in items" :key="item.id">
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </main>
</template>
```

Isso é útil em situações onde mudanças internas não precisam ser monitoradas, como ao lidar com dados estáticos ou integração com APIs.

Leia mais na [documentação oficial](https://vuejs.org/api/reactivity-advanced.html#shallowref).
