---
date: "2024-10-30"
tag: "vue"
---

<!--more-->

# Um papo sobre composables e provide/inject

Na semana passada, falei sobre como evitar o _prop drilling_. Hoje, vamos focar em composables e composition API, mais especificamente no uso do **provide/inject** dentro deles e algumas outras considerações.

No exemplo do código abaixo, trago o uso do provide dentro de um composable. Nesse caso, temos basicamente uma função que faz uma requisição onMounted e disponibiliza o estado para qualquer componente descendente que precise dele. Em outras palavras, todo componente abaixo de onde esse composable foi chamado tem acesso aos dados via **inject**.

```js
import { ref, provide, onMounted } from "vue"
import { myService } from "./services"

export function useUser() {
  const user = ref(null)
  const loading = ref(true)

  provide("get-user", { user, loading })

  const getUser = async () => {
    try {
      loading.value = true
      const response = await myService.getUser()
      user.value = response
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => getUser())

  return { user, loading }
}
```

Supondo que a função getUser seja chamada dentro de um _layout_, todo componente rendizado em um _slot_, por exemplo, tem acesso à ref de user e loading. Assim, podemos exibir um estado de loading enquanto o usuário é carregado ou validado.

Dessa forma, centralizamos a lógica de estado e requisição, tornando a manutenção e organização do código mais simples.

Algo que demorei um pouco pra entender de fato é que composables **não são somente funções para reutilização de código**. Eles também podem ser extraídos para **organização de features**. À medida que a complexidade dos componentes cresce, acabamos com códigos grandes demais para entender. A composition API oferece muita flexibilidade para organizar essa bagunça em funções menores, baseadas em aspectos lógicos da aplicação. Depois de entender isso… 🤯

Outra estratégia (a que acabo usando mais) é exportar a função do composable, nesse caso, _getUser_, e chamar dentro da screen. Assim posso decidir entre _client side_ ou _server side rendering_, dependendo do caso de uso e se estou ou não usando o Nuxt. O legal é saber da flexibilidade no uso dos composables e como podemos aumentar o encapsulamento de código utilizando eles.

E você, como tem usado composables e provide/inject dentro do Vue?
