<script setup lang="ts">
useSeoMeta({
  title: "Início",
  description: "Olá, eu sou o Pedro. Desenvolvedor Front End",
  ogTitle: "Início",
  ogDescription: "Olá, eu sou o Pedro. Desenvolvedor Front End",
})
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-[3fr_1fr]">
    <HomeHero />
    <div class="grid gap-6 grid-rows-[1fr_max-content]">
      <HomeImage />
      <HomeSocial />
    </div>
  </div>

  <div class="grid gap-6 mt-6 lg:grid-cols-[1fr_1.5fr]">
    <HomeExperiences />
    <HomeLatestPosts />
  </div>
</template>
