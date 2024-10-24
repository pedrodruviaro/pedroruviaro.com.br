---
title: "Entendendo o Alinhamento Seguro e Inseguro no CSS Flexbox"
date: "2024-04-02"
tag: "css"
---

<!--more-->

# Entendendo o Alinhamento Seguro e Inseguro no CSS Flexbox

O Flexbox é, sem dúvidas, uma das principais formas de criar layouts responsivos na web. Um ponto muito interessante, que descobri há pouco tempo, é o conceito de alinhamento seguro/inseguro. Esse conceito impacta diretamente na estabilidade do layout e na acessibilidade do conteúdo.

Alinhamento Seguro (safe alignment): Evita o overflow de conteúdo que pode tornar itens inacessíveis (ou seja, fora da tela). Se houver risco de overflow, o navegador ajusta o alinhamento para manter o conteúdo visível, geralmente utilizando o scroll. Utilizado para garantir acessibilidade, especialmente em telas menores ou em layouts dinâmicos.

Alinhamento Inseguro (unsafe alignment): Permite que o alinhamento especificado cause overflow, podendo cortar o acesso a alguns itens. Prioriza sempre o alinhamento e não a acessibilidade do conteúdo. Útil em cenários de layout controlados, onde a prioridade é o design, tendo a garantia de que as informações importantes permanecerão visíveis.

```css
/* 
"Safe" altera o modo de alinhamento em situações de overflow, 
ou seja, tenta evitar a perda de conteúdo
*/

.container {
  display: flex;
  align-items: safe center;
}
```

A escolha entre alinhamento seguro e inseguro no CSS Flexbox equilibra design e acessibilidade do conteúdo. A maioria dos navegadores modernos suportam os alinhamentos safe e unsafe, mas o suporte global ainda está em torno de 75%.

Este post foi criado com base no artigo “Safe/unsafe alignment in CSS Flexbox”. Para mais detalhes, trechos de código e exemplos visuais, confira a postagem completa nos links abaixo.

[Browser support](https://caniuse.com/?search=align-items%3A%20safe%3B)

[Artigo completo](https://www.stefanjudis.com/today-i-learned/safe-unsafe-alignment-in-css-flexbox/#74%20-%2013387400)
