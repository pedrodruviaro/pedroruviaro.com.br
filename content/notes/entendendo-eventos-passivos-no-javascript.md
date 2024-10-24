---
title: "Entendendo eventos passivos no JavaScript"
date: "2024-04-17"
tag: "javascript"
---

<!--more-->

# Entendendo eventos passivos no JavaScript

Hoje, quero compartilhar um detalhe sobre o addEventListener do JavaScript que afeta diretamente na performance de aplicações web: eventos passivos (ou Passive Event Listeners).

Ao adicionar um listener em um elemento usando addEventListener, podemos especificar opções adicionais dentro de um objeto. Uma dessas opções é o { passive: true }.

Quando você define um evento passivo, está indicando que o listener não vai chamar preventDefault() durante a execução desse evento. Dessa forma, o navegador consegue otimizar o processamento, melhorando a performance do site/aplicação.

```js
const scrollWrapper = document.querySelector(".my-scroll-wrapper")

function handleScroll(event) {
  console.log("Scroll Y: ", window.scrollY)
}

scrollWrapper?.addEventListener("scroll", handleScroll, { passive: true })

// Remoção do listener
function removeScrollListener() {
  scrollWrapper?.removeEventListener("scroll", handleScroll, { passive: true })
}

setTimeout(removeScrollListener, 5000)
```

Em outras palavras, isso permite que o navegador responda imediatamente, sem precisar aguardar o JavaScript. Em dispositivos móveis, onde a performance pode ser mais crítica, pode resultar em animações mais suaves e respostas mais rápidas ao toque.

[Documentação do lighthouse](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners?hl=pt-br)

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive)
