<script setup lang="ts">
import { jobExperiences } from "~/constants/experiences"
</script>

<template>
  <AboutSection>
    <template #header>
      <BaseTitle size="md" label="Experiência profissional" />
    </template>

    <AboutExperienceList>
      <AboutExperienceCard
        v-for="job in jobExperiences"
        :key="job.title"
        :title="job.title"
        :subtitle="job.subtitle"
        :content="job.content"
        :infos="job.stack"
      />
    </AboutExperienceList>
  </AboutSection>
</template>
