---
date: "2025-01-29"
tag: "front-end"
---

<!--more-->

# Substituindo background-image por `<img>` no HTML (Parte 2)

No post passado, falei sobre como substituir o uso do background-image pelo uso da tag `<img>` no _HTML_, destacando o maior benefício dessa troca: performance.

Agora, vamos elevar o nível e discutir uma técnica complementar: o uso do `<link rel="preload">` para carregar as imagens do topo da página (geralmente da primeira seção).

O atributo `preload` permite que o navegador priorize o carregamento de recursos críticos antes mesmo de eles serem requisitados pelo _HTML_ ou _CSS_. Falando em imagens, isso é útil para aquelas que ficam na primeira seção da página. Dessa forma, garantimos que elas sejam exibidas o mais rápido possível, reduzindo o _Largest Contentful Paint (LCP)_ e melhorando a performance geral no pagespeed.

> Caso real: já fui de uma nota 52 para 89 só puxando três imagens previamente via `preload`. Então, sim… faz muita diferença!

## **Ok, mas como funciona o preload?**

Ao declarar uma imagem como `preload`, informamos ao navegador que aquele recurso é essencial e deve ser carregado com alta prioridade. Com isso, o navegador começa a baixar a imagem logo no início, antes mesmo de processar totalmente o _CSS_ ou o _DOM_.

Em frameworks como _Next.js_ ou _Nuxt_, que possuem componentes de imagem (`<Image />` e `<NuxtImg />`), esse tipo de otimização é simplificado. No _Next.js_, por exemplo, basta configurar o atributo priority como true e no _Nuxt_, basta passar o atributo `preload`, como mostrado no código da imagem.

### **Utilizando diretamnte no HTML**

```html
<link
  rel="preload"
  href="https://example.com/hero-image.webp"
  as="image"
  type="image/jpeg"
/>
```

### **Nuxt**

```vue
<NuxtImg src="https://example.com/hero-image.webp" alt="Hero image" preload />
```

### **Next.js**

```jsx
<NextImg
  src="https://example.com/hero-image.webp"
  alt="Hero image"
  priority={true}
/>
```

Essas opções informam ao _framework_ que a imagem deve ser carregada com alta prioridade, incluindo a marcação do preload no _HTML_.

Importante: **cuidado com o uso em excesso.** Muitas imagens carregadas assim trazem problemas de performance. Uma dica é ficar de olho no pagespeed e seguir com base no report gerado por lá.

Essa técnica, combinada com o uso de atributos como _lazy_ e _decoding_, cria uma base sólida para uma página rápida e otimizada.
