---
title: "Lidando com erros no Nuxt utilizando o <NuxtErrorBoundary>"
date: "2025-02-20"
tag: "nuxt"
---

# Lidando com erros no Nuxt utilizando o `<NuxtErrorBoundary>`

Erros inesperados podem acontecer a qualquer momento e atrapalhar a experiência do usuário.

Ao invés de redirecionar e exibir uma página inteira, podemos capturar erros específicos dentro de componentes usando o `<NuxtErrorBoundary>` e exibir um conteúdo mais agradável.

Esse componente envolve o código onde erros podem acontecer e, caso algo estoure, **exibe um template personalizado sem afetar o restante da aplicação.**

O slot `#error` recebe o erro capturado como prop e disponibiliza ações como limpar o erro (`clearError`) para tentar renderizar o conteúdo novamente.

Aliado a isso, o `NuxtErrorBoundary` emite um evento de erro toda vez que algo falhar (`@error`), tornando simples manter em registro tudo que aconteceu.

Veja um exemplo de como utilizar:

```vue
<template>
  <NuxtErrorBoundary @error="(error) => console.log(error)">
    <template #default>
      <!-- Componente lançando um erro -->
      <ProblematicComponent />
    </template>

    <template #error="{ error, clearError }">
      Você pode exibir o erro localmente: {{ error }}
      <button @click="clearError">Limpar o erro e tentar novamente</button>
    </template>
  </NuxtErrorBoundary>
</template>
```

Um ponto importante é: se o usuário acessar a página que contém o componente com erro direto na URL, o Nuxt faz o redirecionamento para a página de erro (`error.vue`). **O `ErrorBoundary` trata apenas erros que acontecem após o componente estar disponível para o cliente.**
