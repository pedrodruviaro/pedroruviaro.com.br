---
title: "Explorando o CSS: box-decoration-break"
date: "2024-10-07"
tag: "css"
---

<!--more-->

# Explorando o CSS: box-decoration-break

Você sabia que com a propriedade **box-decoration-break** é possível controlar o comportamento de decorações de elementos em múltiplas linhas? Essa propriedade pode ser bastante útil para manter consistência no estilo do layout em situações de quebra de texto.

A propriedade box-decoration-break é utilizada principalmente em elementos que são inline, como por exemplo, tags `<span>`. Ela permite que bordas, sombras e gradientes fiquem consistentes em textos com quebra de linha.

Ela possui vários valores possíveis, mas os dois principais são:

- slice (default): a decoração é cortada, continuando na próxima linha, sem repetição.
- clone: a decoração é clonada em cada linha onde o texto é quebrado, garantindo que o estilo seja aplicado em todas as quebras.

> O suporte global da propriedade nos navegadores fica em torno de 95%, mas para garantir uma aplicação sem erros, especialmente no Safari, é recomendado utilizar o prefixo _-webkit_.

[Confira os exemplos no codepen](https://codepen.io/pedrodruviaro/pen/gOVMByp)

[Documentação oficial](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break)
