---
date: "2025-01-27"
tag: "front-end"
---

<!--more-->

# Substituindo background-image por `<img>` no HTML (Parte 1)

Ao utilizar imagens como background, a forma mais comum é utilizar a propriedade `background-image` no _CSS_. Porém, podemos substituir de forma simples pelo uso da tag `<img>` no HTML, o que traz muitas vantagens em performance e responsividade.

A tag `<img>` oferece um controle muito maior sobre o carregamento e o comportamento da imagem. Um dos principais benefícios é a possibilidade de usar o atributo loading="lazy", que permite o carregamento sob demanda. Isso reduz o peso inicial da página, melhorando o tempo de carregamento, principalmente em dispositivos móveis Outro recursos “liberados” muito importantes são o srcset e sizes, possibilitando a entrega de imagens diferentes dependendo do tamanho da tela (explico melhor num futuro breve).

Essa abordagem elimina a dependência do carregamento completo do _CSS_ para exibir as imagens. Diferentemente de um `background-image`, que é carregado apenas após o _CSS_ ser processado pelo navegador, a tag `<img>` permite que a imagem seja carregada de forma assíncrona e antecipada (se necessário).

Nos códigos abaixo, mostro um exemplo dessa substituição. A imagem é configurada para preencher toda a área, utilizando as propriedades _CSS_ object-fit e object-position. Dessa forma, replicamos o funcionamento das propriedades de _background_ do _CSS_. Vale ressaltar que, nesse caso, não uso o `lazy=”loading”` pois a seção de hero é a primeira a ser renderizada na tela.

### Usando _CSS_ e background-image

```html
<style>
  .hero {
    background-image: url("https://placehold.co/1200x1200");
    background-size: cover;
    background-position: center;
  }
</style>
<section class="hero">
  <div class="container hero__container">
    <h1>Hello, World!</h1>
    <p>Lorem ipsum...</p>
  </div>
</section>
```

### Otimizando o uso com HTML e `<img>`

```html
<style>
  .hero {
    position: relative;
  }

  .bg {
    position: absolute;
    z-index: 0;
    inset: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
</style>
<section class="hero">
  <div class="container hero__container">
    <h1>Hello, World!</h1>
    <p>Lorem ipsum...</p>
  </div>

  <div class="bg">
    <img
      src="https://placehold.co/1200x1200"
      width="1200"
      height="1200"
      aria-hidden="true"
      alt=""
    />
  </div>
</section>
```

### Exemplo final com as diferenças de código:

![code example](/images/notes/bg-image-1.png)

Essa técnica é muito útil em páginas com grande número de imagens, pois melhora tanto UX quanto as métricas do pagespeed, por exemplo. Utilizo há alguns anos e percebi na prática a melhora de desempenho, custando muito pouco em termos de trabalho e aplicação.
