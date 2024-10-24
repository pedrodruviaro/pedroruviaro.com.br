<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - pedroruviaro` : "pedroruviaro"
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="4" color="#f8f7f4" />
    <NuxtPage />
  </NuxtLayout>
</template>
