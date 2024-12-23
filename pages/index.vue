<script setup lang="ts">
useSeoMeta({
  title: "Início",
  description: "Olá, eu sou o Pedro. Desenvolvedor Front-End",
  ogTitle: "Início",
  ogDescription: "Olá, eu sou o Pedro. Desenvolvedor Front-End",
})
</script>

<template>
  <BaseContainer>
    <HomeHero />
    <HomeSocialLinks class="mt-6" />
    <HomeLatestPosts class="mt-10 lg:mt-20" />
    <HomeProjects class="mt-10 lg:mt-16" />
  </BaseContainer>
</template>
