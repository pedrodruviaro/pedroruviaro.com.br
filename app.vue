<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - pedroruviaro` : "pedroruviaro"
  },
})
</script>

<template>
  <div>
    <LayoutBanner />
    <NuxtLayout>
      <NuxtLoadingIndicator :height="4" color="#f8f7f4" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.65rem);
}
</style>
