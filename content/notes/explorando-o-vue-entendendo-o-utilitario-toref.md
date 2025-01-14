---
date: "2025-01-16"
tag: "vue"
---

<!--more-->

# Explorando o Vue: Entendendo o utilitário toRef

A função utilitária `toRef”` do Vue possui várias funcionalidades. Uma delas é a criação de uma **referência reativa para uma propriedade específica de um objeto também reativo**.

Isso é particularmente útil quando você precisa trabalhar apenas com uma parte do estado, sem envolver o objeto completo. No código abaixo, acessamos apenas a propriedade _“firstName”_ pela _ref_ _“name”_ do objeto reativo.

```vue
<script setup lang="ts">
import { ref, toRef } from "vue"

const user = ref({
  firstName: "John",
  lastName: "Doe",
})

const name = toRef(user.value, "firstName")
</script>

<template>
  <div>
    <pre>{{ user }}</pre>
    <h1>{{ name }}</h1>
    <button @click="() => (name = `The name is ${name}`)">Append</button>
  </div>
</template>
```

A _ref_ criada é sincronizada com o objetivo reativo, ou seja, alterar _“name”_, altera a propriedade “firstName” e vice-versa.

Outros dois casos de uso bastante interessantes são:

- criação de uma _ref_ apenas de leitura, com um funcionamento parecido com uma _computed property_ (nesse caso, sem a função _setter_)

```vue
<script setup lang="ts">
import { ref, toRef } from "vue"

const user = ref({
  firstName: "John",
  lastName: "Doe",
})

const name = toRef(() => user.value.firstName)
</script>

<template>
  <p>{{ name }}</p>
</template>
```

- normalização de valores para, por exemplo, prover em _composables_. Alguns podem receber _refs_ como argumento, dessa forma, podemos usar _toRef_ e transformar valores primitivos em _refs_.

```vue
<script setup lang="ts">
import { toRef } from "vue"

const number = 1
const myReactiveNumber = toRef(number)

console.log(myReactiveNumber.value) // 1
</script>
```

Descobri essa função muito por acaso, quando precisei utilizar um composable do [VueUse](https://vueuse.org/) que só recebia uma _ref_ como argumento. Talvez ela seja um utilitário um pouco mais obscuro, mas vale a pena conhecer, e quem sabe, começar a aplicar.

Confere mais exemplos e leia a API completa na [documentação oficial](https://vuejs.org/api/reactivity-utilities#toref).
