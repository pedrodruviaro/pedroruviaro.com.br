<script setup lang="ts">
import flashify from "@/assets/images/portfolio/flashify.webp"
import brainstack from "@/assets/images/portfolio/brainstack.webp"
import codeAndCoffee from "@/assets/images/portfolio/code-and-coffee.webp"

const projects = [
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
</script>

<template>
  <div>
    <PortfolioHeadline class="mb-10 lg:mb-16" />

    <section class="grid gap-6 md:grid-cols-2">
      <PortfolioCard
        v-for="project in projects"
        :key="project.title"
        :image="project.image"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :github-url="project.githubUrl"
        :live-url="project.liveUrl"
      />
    </section>
  </div>
</template>
