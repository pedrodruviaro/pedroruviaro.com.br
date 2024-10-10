<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - pedroruviaro` : "pedroruviaro"
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="4" color="#C3BAAB" />
    <NuxtPage />
  </NuxtLayout>
</template>
