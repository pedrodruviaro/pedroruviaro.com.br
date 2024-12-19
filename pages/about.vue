<script setup lang="ts">
useSeoMeta({
  title: "Sobre mim",
  description: "Conheça mais sobre mim.",
  ogTitle: "Sobre mim",
  ogDescription: "Conheça mais sobre mim.",
})

defineOgImageComponent("NuxtSeo", {
  title: "pedroruviaro",
  description: "Olá, eu sou o Pedro. Desenvolvedor-Front End",
  theme: "#111010",
  colorMode: "dark",
})
</script>

<template>
  <BaseContainer class="space-y-10 lg:space-y-12">
    <AboutMe />
    <AboutStack />
    <AboutJobs />
    <AboutVolunteer />
    <AboutContact />
  </BaseContainer>
</template>
