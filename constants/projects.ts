import type { Project } from "~/types"

export const projects: Project[] = [
  {
    title: "shareMyHook",
    description:
      "Plataforma de compartilhamento de hooks. Criação de perfil público e códigos públicos e privados. O conceito é semelhante ao gists, do GitHub.",
    image: "/images/portfolio/sharemyhook.webp",
    tags: ["Nuxt", "Supabase", "TypeScript", "NuxtUI"],
    githubUrl: "https://github.com/pedrodruviaro/share-my-hook",
    liveUrl: "https://sharemyhook.pedroruviaro.com.br/",
  },
  {
    title: "Flashify",
    description:
      "Aplicação de Flashcards, o usuário pode decks e praticar o conteúdo em estilo de jogo.",
    image: "/images/portfolio/flashify.webp",
    tags: ["Nuxt", "Supabase", "TypeScript", "NuxtUI"],
    githubUrl: "https://github.com/pedrodruviaro/flashify",
    liveUrl: "https://flashify.pedroruviaro.com.br/",
  },
  {
    title: "wire",
    description:
      "Site da wire, feito com Nuxt e com animações em GSAP e SCSS em todas as seções.",
    image: "/images/portfolio/wire.webp",
    tags: ["Nuxt", "GSAP", "SCSS", "TypeScript"],
    liveUrl: "https://www.wire.art.br/",
  },
  {
    title: "Not.r",
    description:
      "Um app de notas com LocalStorage e Pinia para gerenciamento de estado. Simples, direto e intuitivo.",
    image: "/images/portfolio/notr.webp",
    tags: ["Vue", "TypeScript", "TailwindCSS", "LocalStorage", "Pinia"],
    githubUrl: "https://github.com/pedrodruviaro/notr",
    liveUrl: "https://notr.pedroruviaro.com.br/",
  },
  {
    title: "BrainStack",
    description:
      "Crie e compartilhe suas ideias. Surgiu para pessoas compartilharem ideias de coisas (ou projetos) para criar.",
    image: "/images/portfolio/brainstack.webp",
    tags: ["Nuxt", "Supabase", "TypeScript", "PrimeVue"],
    githubUrl: "https://github.com/pedrodruviaro/brain-stack",
    liveUrl: "https://brainstack.pedroruviaro.com.br/",
  },
  {
    title: "CodeAndCoffee",
    description:
      "Um blog utilizando headless CMS. A ideia surgiu de uma postagem desse layout no Behance (créditos no README).",
    image: "/images/portfolio/codeandcoffee.webp",
    tags: ["Nuxt", "HygraphCMS", "GraphQL", "TypeScript"],
    githubUrl: "https://github.com/pedrodruviaro/code-and-coffee-blog-nuxt",
    liveUrl: "https://code-and-coffee.pedroruviaro.com.br/",
  },
]
