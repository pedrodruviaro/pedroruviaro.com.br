<script setup lang="ts">
useSeoMeta({
  title: "Início",
  description: "Olá, eu sou o Pedro. Desenvolvedor Front-End",
  ogTitle: "Início",
  ogDescription: "Olá, eu sou o Pedro. Desenvolvedor Front-End",
})

defineOgImageComponent("NuxtSeo", {
  title: "pedroruviaro",
  description: "Olá, eu sou o Pedro. Desenvolvedor-Front End",
  theme: "#111010",
  colorMode: "dark",
})
</script>

<template>
  <BaseContainer>
    <HomeHero />
    <HomeSocialLinks class="mt-6" />
    <HomeLatestPosts class="mt-10 lg:mt-20" />
  </BaseContainer>
</template>
