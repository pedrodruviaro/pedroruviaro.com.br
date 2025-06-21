<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - pedroruviaro` : "pedroruviaro"
  },
})

const colorMode = useColorMode()
</script>

<template>
  <div>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

    <NuxtLayout>
      <NuxtLoadingIndicator :height="3" color="#17171785" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  @apply bg-neutral-200 text-neutral-900 scroll-smooth overflow-x-hidden font-[Inter] dark:bg-neutral-900 dark:text-neutral-200;
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
