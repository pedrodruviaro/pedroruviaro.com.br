---
date: "2024-11-21"
tag: "vue"
---

<!--more-->

# Estabilizando props no Vue

Dentro do _Vue_, um componente sempre irá re-renderizar e atualizar sempre que uma prop que ele recebe mudar.

Nesse contexto, uma otimização importante é garantir a estabilidade das props passadas aos componentes, eliminando renders desnecessários e aumentando a performance das nossas aplicações. Esse conceito é conhecido como **prop stability** e é referenciado na [documentação oficial](https://vuejs.org/guide/best-practices/performance.html#props-stability).

![code example](/images/notes/prop-stability.png)

No exemplo da imagem acima, em vez de verificarmos se `id` é igual `activeId` dentro do componente _Item_ e trabalhar com a lógica internamente, passamos essa responsabilidade para o componente pai. Esse componente de cima calcula a informação e passa pela prop `isActive`.

Dessa forma, evitamos que ao atualizar “activeId” todos os componentes renderizados sejam atualizados. Assim, para a maioria dos componentes a prop `isActive` permanecerá a mesma quando “activeId” mudar, de modo que eles não precisarão mais ser atualizados. Ou seja, os componentes que não têm seu estado alterado permanecerão estáveis.

De maneira geral, a ideia central é garantir que as props passadas para os componentes permaneçam estáveis, evitando re-renders desnecessários e otimizando a performance da aplicação.
