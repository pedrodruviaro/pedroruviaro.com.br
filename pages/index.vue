<script setup lang="ts">
useSeoMeta({
  title: "Início",
  description: "Olá, eu sou o Pedro. Desenvolvedor Front End",
  ogTitle: "Início",
  ogDescription: "Olá, eu sou o Pedro. Desenvolvedor Front End",
})
</script>

<template>
  <BaseContainer>
    <HomeHero />
    <LayoutSocialLinks class="mt-10" />
    <HomeLatestPosts class="mt-10 lg:mt-20" />
  </BaseContainer>
</template>
