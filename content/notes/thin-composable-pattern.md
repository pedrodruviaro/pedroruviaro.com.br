---
date: "2024-11-14"
tag: "vue"
---

<!--more-->

# Thin composables pattern

Descobri essa semana que a minha forma preferida de trabalhar com _[composables](https://vuejs.org/guide/reusability/composables)_ tem um nome bonito, **“thin composables pattern”**.

A ideia é a seguinte: ao invés de ter toda a lógica de alguma feature dentro de um grande _composable_ ou em um só lugar (numa tela, por exemplo), separamos a regra de negócio de um lado e uma camada fina (_thin layer_) de reatividade do outro. Ou seja, toda parte de negócio fica em um arquivo **js/ts** “puro” e a parte que lida com os aspectos específicos do _Vue_ e de implementação fica em um _composable_ menor, mantendo-o apenas orquestrando a parte reativa, ciclos de vida, propriedades computadas, _watchers_, etc, que serão usados dentro dos componentes ou de telas.

Isso nos concede uma boa organização de código e separação de responsabilidades. Cada parte trabalha com uma única coisa. O que mais gosto é utilizar vários _composables_ (pequenas features) em uma tela, assim consigo organizar _loaders_, tratativa de erros e demais pontos específicos da aplicação. Como os _composables_ podem trabalhar também com o ciclo de vida, ou seja, chamando funções como _onMounted_, isso abre ainda mais possibilidades de uso.

```ts
/* /composables/useNotes.ts */
interface UseNotes {
  user: Ref<User | undefined>
}

export function useNotes({ user }: UseNotes) {
  const services = useServices()
  const logger = useLogger()

  const loading = ref(true)
  const notes = ref<Note[]>()

  const getNotes = async () => {
    if (!user.value) return

    try {
      loading.value = true

      const response = await services.getNotes({ userId: user.value.id })
      // if (!response) { createError() }

      notes.value = response
    } catch (error) {
      logger(error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => getNotes())

  return { loading, notes }
}
```

Uma nota sobre **SSR**: no exemplo acima a função _getNotes_ é chamada quando o composable é iniciado. Essa é uma ótima implementação para códigos rodando no cliente. Como a camada de serviço fica separada, podemos chamar direto a função (do serviço) dentro de um _useAsyncData_ e utilizar de todo o poder do _Nuxt_ para tratar isso no lado do servidor, tendo assim todos os benefícios do _SSR_. Isso tudo depende do caso de uso, mas fica simples mudar a implementação, caso necessário.

É a maneira mais elegante de trabalhar com _Vue_? Provavelmente não. Eu particularmente sempre usei assim (ou algo parecido com isso), e vi esse tipo de implementação ser citada em cursos e, mais recenetemente, [nesse podcast](https://www.youtube.com/watch?v=nxb_cthLg1k), então acho que estou no caminho, não?

Como tudo na área de desenvolvimento, é só mais uma das milhares de maneiras de resolver os mesmos problemas.
