---
date: "2025-04-24"
tag: "css"
---

# Animações com transition + @starting-style no CSS

As novas features do CSS estão cada vez melhores.

A nova regra `@starting-style` vem pra curar uma dor antiga no desenvolvimento web: **animar a entrada de elementos em tela**. Com ela, podemos definir os estilos iniciais de uma animação exatamente no momento em que o elemento entra no _DOM_

Ela é útil para garantir que a transição ocorra a partir de um estado inicial visível, mesmo quando o estilo final já esteja definido.

No exemplo abaixo, apliquei o `@starting-style` para animar a entrada de um `<dialog>` ao ser aberto com o método nativo `.showModal()`. A animação é feita via _transition_, e os estilos iniciais (opacidade e escala) são definidos dentro da regra.

```html
<style>
  dialog {
    transition: opacity 300ms ease, transform 300ms ease;
    border: none;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  dialog[open] {
    opacity: 1;
    transform: scale(1);
  }

  @starting-style {
    dialog[open] {
      opacity: 0;
      transform: scale(0.1);
    }
  }
</style>

<dialog id="modal">
  <p>Este é um modal com animação suave!</p>
  <button onclick="modal.close()">Fechar</button>
</dialog>

<button onclick="modal.showModal()">Abrir Modal</button>

<script>
  const modal = document.getElementById("modal")
</script>
```

Note que, dessa forma, conseguimos controlar toda a animação de uma forma extremamente fácil.

Além desse exemplo do `<dialog>`, abaixo mostro outro caso de uso bem interessante, animando a entrada de cards criados via JS. [Confira aqui o código completo e a funcionalidade desses dois exemplos.](https://codepen.io/pedrodruviaro/pen/OPPWpOz)

```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    padding-inline: 1rem;
  }

  .card {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    opacity: 1;
    rotate: 0deg;
    transition: all 1s ease;
  }

  @starting-style {
    .card {
      opacity: 0;
      transform: translateX(-50px);
    }
  }
</style>

<button onclick="addCard()">Adicionar card</button>
<div class="container" id="card-container"></div>

<script>
  function addCard() {
    const container = document.getElementById("card-container")
    const card = document.createElement("div")
    card.classList.add("card")
    container.appendChild(card)
  }
</script>
```

O suporte está cada vez melhor. A grande maioria dos browsers modernos já conta com essa especificação disponível. [Guia com o suporte completo.](https://caniuse.com/?search=%40starting-style)

E aí, curtiu? Confere então a [documentação oficial da especificação.](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)
