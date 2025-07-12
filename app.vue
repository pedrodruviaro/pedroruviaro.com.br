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
      <NuxtLoadingIndicator :height="3" color="#17171785" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  @apply bg-neutral-200 text-neutral-900 scroll-smooth overflow-x-hidden dark:bg-neutral-900 dark:text-neutral-200 transition-colors duration-200;
}

a {
  @apply border-neutral-900 dark:border-neutral-200;
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
