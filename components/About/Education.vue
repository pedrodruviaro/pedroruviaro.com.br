<script setup lang="ts">
import { jobExperiences } from "~/constants/experiences"
</script>

<template>
  <AboutSection>
    <template #header>
      <BaseTitle size="md" label="Educação" />
    </template>

    <article class="space-y-1">
      <BaseTitle
        as="h3"
        size="sm"
        label="Engenharia de Software @ UNIASSELVI"
        :bold="false"
      />
      <p class="text-sm font-bold">Jan de 2025 - atual</p>
      <div>
        <p class="text-sm">
          Depois de anos atuando como desenvolvedor e adquirindo experiência
          prática, senti a necessidade de aprofundar meus conhecimentos e
          estruturar melhor minha base teórica. Por isso, decidi iniciar a
          graduação, não apenas para aprimorar habilidades técnicas, mas também
          expandir minha visão sobre arquitetura, boas práticas e inovação na
          área.
        </p>
      </div>
    </article>
  </AboutSection>
</template>
