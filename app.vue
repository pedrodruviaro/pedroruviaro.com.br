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
      <NuxtLoadingIndicator :height="3" color="#17171785" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  @apply bg-brand-white text-brand-black scroll-smooth overflow-x-hidden;
}

a {
  @apply border-brand-black/50;
}

p {
  @apply text-brand-black;
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
