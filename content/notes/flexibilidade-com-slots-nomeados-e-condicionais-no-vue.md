---
title: "Flexibilidade com slots nomeados e condicionais no Vue"
date: "2024-10-03"
tag: "vue"
---

<!--more-->

# Flexibilidade com slots nomeados e condicionais no Vue

Ao desenvolver componentes no Vue, garantir flexibilidade e reutilização é essencial. Slots nomeados e condicionais são uma estratégia para tornar nossos componentes mais genéricos e adaptáveis. Eles permitem definir diferentes partes de um componente sem alterar sua estrutura básica, o que facilita a personalização e o reuso em diferentes layouts.

No exemplo abaixo, temos um simples card com três slots: um para o cabeçalho (header), um para o corpo principal (sendo o default, não precisa ser nomeado) e outro para o rodapé (footer). Header e footer são slots opcionais exibidos de forma condicional com base na propriedade $slots[nome_do_slot]. Isso permite que o card seja usado em diferentes contextos, com ou sem conteúdo nesses slots, dependendo da necessidade.

```vue
<!-- BaseCard.vue -->
<template>
  <article class="border rounded">
    <div class="p-4 border-b" v-if="$slots.header">
      <slot name="header" />
    </div>

    <div class="p-4">
      <slot />
    </div>

    <div class="p-4 border-t" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </article>
</template>
```

Algumas vantagens dessa abordagem são:

Reutilização: com slots nomeados, personalizamos áreas distintas do componente, sem duplicação de código ou.

Flexibilidade no layout: os slots condicionais permitem mostrar ou ocultar partes do componente conforme os dados fornecidos e necessidade do layout.

Simplicidade: o componente principal fica mais limpo, já que a lógica condicional, apesar de simples, é gerenciada diretamente pelos slots, assim não precisamos criar mais componentes parecidos apenas para ter mais opções de uso.

Eu particularmente acho fantástica essa forma de simplificar o uso e construção dos componentes no Vue. E você, como tem trabalhado com slots em seus projetos?

[Link da documentação oficial do Vue](https://vuejs.org/guide/components/slots.html#conditional-slots)
