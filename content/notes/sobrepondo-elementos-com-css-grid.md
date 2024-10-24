---
title: "Sobrepondo elementos com CSS Grid"
date: "2024-10-01"
tag: "css"
---

<!--more-->

# Sobrepondo elementos com CSS Grid

Como sobrepor elementos sem usar "position: absolute"? Simples, utilizando grid layout.

No exemplo da imagem, "grid-template-areas" define uma única área chamada "stack", e todos os filhos ocupam essa área com "grid-area", ficando sobrepostos. A ordem dos elementos no HTML determina qual ficará acima — o último filho será renderizado no topo da pilha.

```vue
<template>
  <div class="container">
    <article class="stack">
      <img src="https://picsum.photos/1000" alt="" />
      <div>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor amet</p>
      </div>
    </article>
  </div>
</template>

<style>
.stack {
  display: grid;
  grid-template-areas: "stack";
  place-items: center;
}

.stack > * {
  grid-area: stack;
}
</style>
```

Esse método evita o uso de "z-index", deixando o layout mais simples e fácil de manter, especialmente em layouts responsivos ou que usam muitos elementos ou seções sobrepostas (modais, formulários, etc). Além disso, não precisamos isolar camadas com "isolation: isolate", por exemplo, simplificando ainda mais o código.

Viu como é fácil? Confere o código lá no codepen (link abaixo).

[Codepen](https://codepen.io/pedrodruviaro/pen/NWQxjLa)
