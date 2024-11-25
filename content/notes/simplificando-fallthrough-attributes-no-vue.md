---
date: "2024-11-25"
tag: "vue"
---

<!--more-->

# Simplificando Fallthrough Attributes no Vue

No **Vue**, um `fallthrough attribute` é um atributo que é passado para um componente, mas não é explicitamente declarado nas props de quem recebe. Alguns exemplos são atributos como _class_, _style_ e _id_.

Quando um componente possui um único elemento na raiz, os atributos são automaticamente aplicados ao elemento. Por exemplo, considerando um componente `<Paragraph>` com o seguinte template:

```vue
<!-- template de <Paragraph /> -->
<p>Hello world!</p>
```

E um componente pai passando uma classe ao componente:

```vue
<Paragraph class="text-red-400" />
```

O resultado final (DOM Renderizado) será:

```vue
<p class="text-red-400">Hello world!</p>
```

Nesse caso, o componente aceita a classe, que é passada diretamente ao primeiro elemento do template.

No entanto, em componentes com múltiplos elementos na raiz, esse comportamento automático de atribuição não ocorre. Se o `$attrs` não for explicitamente vinculado, o _Vue_ emitirá um aviso em tempo de execução.

Isso acontece porque, em templates com múltiplos elementos na raiz, o Vue não consegue determinar automaticamente onde aplicar os atributos herdados. Para evitar esse erro, é necessário vincular o `$attrs` explicitamente ao(s) elemento(s) desejado(s).

```vue
<AnotherComponent class="bg-red-400" id="some-id" />
```

Se `<AnotherComponent />` for um componente com múltiplos elementos na raiz, o Vue não sabe pra qual deve passar os atributos de cima. Considere a estrutura de `<AnotherComponent />`:

```vue
<!-- template de AnotherComponent -->

<div>
  <p>Some content</p>
</div>

<div>
  <p>Another content</p>
</div>
```

Podemos resolver esse problema simplesmente definindo qual será o elemento que receberá os atributos:

```vue
<!-- template de AnotherComponent -->

<div>
  <p>Some content</p>
</div>

<div v-bind="$attrs">
  <p>Another content</p>
</div>
```

Para ficar mais fácil de entender, veja o esquema abaixo:

![attrs](/images/notes/v-bind-attrs.png)

Com essa estratégia, podemos ter componentes mais flexíveis e menos suscetíveis a erros, além de evitarmos a adição de elementos no _DOM_ só para satisfazer o compilador do Vue.

Confira mais na [documentação oficial.](https://vuejs.org/guide/components/attrs#attribute-inheritance-on-multiple-root-nodes)
