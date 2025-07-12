<script setup lang="ts">
import { projects } from "~/constants/projects"

useSeoMeta({
  title: "Projetos",
  description: "Confira alguns dos projetos que realizei ao longo desse tempo",
})
</script>

<template>
  <BaseContainer size="lg">
    <BaseTitle
      center
      as="h1"
      size="xl"
      label="Portfólio de projetos"
      class="mb-10 lg:mb-16"
    />

    <section class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

    <section class="mt-10 lg:mt-16">
      <p class="text-sm md:text-base text-center text-balance">
        Quer conhecer outros projetos em que participei?
        <NuxtLink
          target="_blank"
          rel="nofollow"
          href="https://www.linkedin.com/in/pedroruviaro/"
          class="border-b border-dashed hover:opacity-80"
          >Entre em contato comigo e vamos conversar!
        </NuxtLink>
      </p>
    </section>
  </BaseContainer>
</template>
