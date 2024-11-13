<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
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
html,
body {
  font-family: "Raleway", sans-serif;
  @apply bg-zinc-950 text-zinc-300 scroll-smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.225s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
