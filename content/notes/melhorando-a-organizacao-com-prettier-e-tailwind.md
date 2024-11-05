---
date: "2024-11-05"
tag: "tailwind"
---

<!--more-->

# Melhorando a organização com Prettier e Tailwind

Eu não uso pré-processadores _CSS_ como _SASS_ há algum tempo. Ok, talvez eu use mas não seja minha primeira escolha. Por algum motivo, quando preciso trabalhar com _GSAP_ eu prefiro usar _SASS_. O _Tailwind_ tem sido meu parceiro por funcionar muito bem e tornar o desenvolvimento muito mais rápido. Mas uma coisa é fato: o código pode, e provavelmente vai, ficar bagunçado muito rápido.

Neste fim de semana eu descobri por um acaso o `prettier-plugin-tailwindcss`. Ele auxilia na leitura e desenvolvimento organizando automaticamente as classes do Tailwind numa ordem lógica e consistente, priorizando as classes que afetam o layout e agrupando modificadores e classes responsivas. Ele também corrige as classes para não haver sobrescrita de valores, como quando definimos `mr-2 m-4`. Nesse caso, a ordenação final ficaria `m-4 mr-2`.

Para configurar, basta instalar o plugin e incluir o plugin no arquivo de configuração do _Prettier_. Todo o processo e opções extras estão na documentação (link abaixo).

Já me perdi muito em arquivos _SASS_ gigantes com inúmeros agrupamentos de tags, então pra mim, qualquer ferramenta que auxilia na organização é muito bem vinda.

[Documentação](https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file):

[Artigo de referência](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
