<script setup lang="ts"></script>

<template>
  <div class="grid gap-6 lg:grid-cols-[3fr_1fr]">
    <HomeHero />
    <div class="grid gap-6">
      <HomeImage />
      <HomeSocial />
    </div>
  </div>

  <div class="grid gap-6 mt-6 lg:grid-cols-[1fr_1.5fr]">
    <HomeExperiences />
    <HomeLatestPosts />
  </div>
</template>
