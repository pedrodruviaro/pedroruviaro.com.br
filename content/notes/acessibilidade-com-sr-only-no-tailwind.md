---
date: "2025-04-11"
tag: "acessibilidade"
---

# Tornando conteúdo acessível com a classe sr-only

Recentemente, citei como acessibilidade é um tema delicado e difícil de acertar. Uma técnica simples e rápida para melhorarmos a experiência de quem usa leitores de tela é esconder visualmente um conteúdo, sem removê-lo do DOM.

Dentro do Tailwind, podemos usar a classe `sr-only`. Deixei o códig completo aqui embaixo 👇🏻

Ao aplicar `sr-only` a um elemento, ele se torna invisível para o usuário padrão, mas permanece disponível para leitores de tela. Isso é útil em diversos contextos — por exemplo, quando queremos fornecer uma descrição adicional para usuários de leitores de tela ou indicar a funcionalidade de um botão que depende apenas de ícones visuais.

Exemplo de uso dentro do React, utilizando da classe `sr-only` para esconder o texto interno do botão de paginação:

```jsx
<Button variant="outline" className="h-8 w-8 p-0">
  <ChevronsLeft className="h-4 w-4" />
  <span className="sr-only">Primeira página</span>
</Button>
```

Os estilos aplicados pela classe são baseados em uma técnica consolidada na comunidade front-end. Pesquisando, percebemos que ela existe há muitos anos e sempre foi um “hack” para melhorar a acessibilidade.

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

Mesmo fora do Tailwind, esse padrão pode ser replicado em projetos utilizando CSS puro ou com compiladores. O mais importante é entender o objetivo: ocultar o conteúdo visualmente, sem excluí-lo da navegação para pessoas com deficiência visual.
