// @ts-ignore
import flashify from "@/assets/images/portfolio/flashify.webp"
// @ts-ignore
import brainstack from "@/assets/images/portfolio/brainstack.webp"
// @ts-ignore
import codeAndCoffee from "@/assets/images/portfolio/code-and-coffee.webp"
// @ts-ignore
import wire from "@/assets/images/portfolio/wire.webp"

type Project = {
  title: string
  description: string
  image: any
  tags: string[]
  githubUrl?: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    title: "Flashify",
    description:
      "Aplicação de Flashcards, onde podemos criar de decks e praticar o conteúdo criado.",
    image: flashify,
    tags: ["Nuxt", "Supabase", "TypeScript", "NuxtUI"],
    githubUrl: "https://github.com/pedrodruviaro/flashify",
    liveUrl: "https://flashify.pedroruviaro.com.br/",
  },
  {
    title: "wire",
    description:
      "Site da wire, feito com Nuxt e com animações em GSAP e SCSS em todas as seções",
    image: wire,
    tags: ["Nuxt", "GSAP", "SCSS", "TypeScript"],
    liveUrl: "https://www.wire.art.br/",
  },
  {
    title: "BrainStack",
    description:
      "Crie e compartilhe as ideias. Surgiu para pessoas compartilharem ideias de coisas (ou projetos) para criar.",
    image: brainstack,
    tags: ["Nuxt", "Supabase", "TypeScript", "PrimeVue"],
    githubUrl: "https://github.com/pedrodruviaro/brain-stack",
    liveUrl: "https://brainstack.pedroruviaro.com.br/",
  },
  {
    title: "CodeAndCoffee",
    description:
      "Um blog utilizando headless CMS. A ideia surgiu de uma postagem desse layout behance (créditos no README).",
    image: codeAndCoffee,
    tags: ["Nuxt", "HygraphCMS", "GraphQL", "TypeScript"],
    githubUrl: "https://github.com/pedrodruviaro/code-and-coffee-blog-nuxt",
    liveUrl: "https://code-and-coffee.pedroruviaro.com.br/",
  },
]
