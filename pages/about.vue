<script setup lang="ts">
import { AboutEducation, AboutExperienceCard } from "#components"

useSeoMeta({
  title: "Sobre",
  description: "Conheça mais sobre mim.",
  ogTitle: "Sobre",
  ogDescription: "Conheça mais sobre mim.",
})
</script>

<template>
  <BaseContainer class="space-y-10 lg:space-y-12">
    <AboutMe />
    <AboutStack />
    <AboutExperiences />
    <AboutEducation />
    <AboutVolunteer />
    <AboutContact />
  </BaseContainer>
</template>
