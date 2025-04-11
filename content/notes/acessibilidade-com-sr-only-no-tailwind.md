---
date: "2025-04-11"
tag: "acessibilidade"
---

# Tornando conteúdo acessível com a classe sr-only

A acessibilidade na web vai além de contrastes e tamanhos de fonte. Ela envolve também a forma como as informações são disponibilizadas para tecnologias assistivas, como leitores de tela. Uma técnica importante nesse cenário é a de esconder visualmente um conteúdo, sem removê-lo da árvore de acessibilidade — e é exatamente isso que a classe sr-only do Tailwind CSS proporciona.

Ao aplicar sr-only a um elemento, ele se torna invisível para usuários que navegam visualmente, mas permanece disponível para leitores de tela. Essa abordagem é útil em diversos contextos: por exemplo, quando queremos fornecer uma descrição adicional para usuários de leitores de tela ou indicar a funcionalidade de um botão que depende apenas de ícones visuais.

No Tailwind, a classe sr-only aplica um conjunto de estilos baseados em uma técnica consolidada na comunidade de desenvolvimento front-end. Esses estilos posicionam o elemento fora da tela, reduzem seu tamanho, impedem que ele afete o layout da página e ainda garantem que continue acessível ao foco assistivo.

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

Mesmo fora do Tailwind, esse padrão pode ser replicado em projetos utilizando CSS puro, com uma classe personalizada. O mais importante é entender sua função: ocultar o conteúdo visualmente sem excluí-lo da experiência de navegação para pessoas com deficiência visual.

Outro ponto relevante é o uso combinado com a classe not-sr-only no Tailwind, que permite reverter a ocultação quando necessário — por exemplo, para tornar o conteúdo visível em determinados pontos de breakpoints.

Implementar práticas como essa é um passo simples, mas significativo, rumo a uma web mais inclusiva. Ao adotar soluções como a sr-only, desenvolvedores contribuem diretamente para que mais pessoas possam acessar, compreender e interagir com o conteúdo digital de maneira plena.
