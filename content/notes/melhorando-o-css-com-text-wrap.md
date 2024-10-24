---
title: "Melhorando o CSS com text-wrap"
date: "2024-08-25"
tag: "css"
---

<!--more-->

# Melhorando o CSS com text-wrap

A propriedade text-wrap no CSS nos permite controlar como o texto é quebrado em várias linhas. Utilizando o valor "balance", o texto é distribuído uniformemente entre as linhas. Isso resulta em uma leitura mais agradável, especialmente em blocos de texto curtos, como títulos e subtítulos. Um ótimo caso de uso é colocar a propriedade no reset.css em todas as tags de título (h1, h2, h3…), deixando assim o visual geral mais agradável.

O valor "balance" é particularmente útil em textos de até 2 ou 3 linhas, onde essa distribuição mais equilibrada faz a diferença. Ele evita que uma linha fique muito cheia enquanto outra permanece quase vazia. Em textos longos,essa propriedade pode gerar espaçamentos desiguais (ou até mesmo não fazer diferença alguma), causando estranheza e má legibilidade.

```vue
<template>
  <h2>Este é um título que não utiliza a propriedade text-wrap: balance</h2>

  <h2 class="balance">
    Este é um título que faz uso da propriedade text-wrap: balance
  </h2>
</template>

<style>
.balance {
  text-wrap: balance;
}
</style>
```

O suporte ao text-wrap já está na casa de 85%. Todos os principais navegadores do mercado já suportam essa propriedade. Acho que já vale atualizar o código e melhorar o aspecto visual nas suas páginas.

[Confira alguns exemplos no codepen](https://codepen.io/pedrodruviaro/pen/qBeEObV)

[Suporte dos browsers](https://caniuse.com/?search=text-wrap)

[Documentação oficial](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
