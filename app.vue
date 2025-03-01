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
    <NuxtLayout>
      <NuxtLoadingIndicator :height="4" color="#111" />
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
