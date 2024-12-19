<script setup lang="ts">
import { volunteerExperiences } from "~/constants/experiences"
</script>

<template>
  <AboutSection>
    <template #header>
      <BaseTitle size="md" label="Voluntariado" />
    </template>
    <p>
      Contribuo com causas sociais desenvolvendo sites, melhorando
      acessibilidade e ajudando organizações a terem uma melhor presença
      digital, utilizando de todo conhecimento adquirido até hoje.
    </p>

    <AboutExperienceList>
      <AboutExperienceCard
        v-for="volunteer in volunteerExperiences"
        :key="volunteer.title"
        :title="volunteer.title"
        :subtitle="volunteer.subtitle"
        :content="volunteer.content"
        :infos="volunteer.stack"
      />
    </AboutExperienceList>
  </AboutSection>
</template>
