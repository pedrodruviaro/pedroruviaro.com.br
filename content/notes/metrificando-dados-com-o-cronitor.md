---
date: "2024-11-18"
tag: "front-end"
---

<!--more-->

# Metrificando dados com o Cronitor

Metrificar dados de acesso é essencial, mas usar o google analytics, pra quem não conhece, é um pesado. E eu não conheço.

Um serviço que tenho utilizado recentemente é o **[Cronitor](https://cronitor.io/)**. Minha vida ficou muito mais simples depois disso. Ele tem um bom plano free e a integração é bem direta, podemos usar via script externo ou via [SDK](https://cronitor.io/docs/sdks). E de quebra, ganhei MUITO em performance trocando pra ele. Provavelmente eu tinha coisas mal configuradas no google? Sim.

> Dica: se você usa _Nuxt_, o module _[NuxtScript](https://scripts.nuxt.com/)_ é excelente para puxar scripts externos de forma mais performática.

A dashboard de análise de sites é bastante intuitiva, temos dados como número de sessões únicas, page views, acesso por país, etc. Vou me ater a duas funções bastante importantes para nós, desenvolvedores.

1. **Devices:** mostra o tipo de aparelho utilizado para acessar (celular, tablet, notebook) e dados como OS e navegador. Isso é de extrema importância para planejar mudanças e ajustar pontos chave (principalmente de layout) do nosso site ou aplicativo.

2. **Sources:** conseguimos fazer a análise de tráfego com base em parâmetros da url (utms). Funciona assim, basta colocarmos o parâmetro desejado dentro de uma query, como `?utm_source=`. Calma, eu explico. Se você acessar o meu site pelo linkedin, no final da url temos um `?utm_source=linkedin`. Dessa forma, consigo medir exatamente quantas pessoas (e quais os dados do aparelho, como citei acima) acessaram as páginas. Com isso, consigo mapear quem vem de linkedin, github, etc.

Se você não conhece esse papo de utms na url, [confere esse artigo aqui](https://www.conversion.com.br/blog/utm/).

A análise de dados é fundamental, e negligenciada, em quase todos os projetos por aí, mas talvez não seja um assunto tão abordado pelo pessoal dev.
