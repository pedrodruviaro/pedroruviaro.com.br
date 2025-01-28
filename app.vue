<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - pedroruviaro` : "pedroruviaro"
  },
})

useScript("https://rum.cronitor.io/script.js")

onMounted(() => {
  window.cronitor =
    window.cronitor ||
    function () {
      ;(window.cronitor.q = window.cronitor.q || []).push(arguments)
    }

  //@ts-ignore
  cronitor("config", { clientKey: "2c7f65d1581b7c10d8715205e8601209" })
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
      </select>
    </div>
    <NuxtLayout>
      <NuxtLoadingIndicator
        :height="4"
        :color="colorMode.preference === 'light' ? '#111' : '#f8f7f2'"
      />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  @apply bg-brand-white text-brand-black dark:bg-brand-black dark:text-brand-white scroll-smooth overflow-x-hidden;
}

a {
  @apply border-brand-black/50 dark:border-brand-white/50;
}

p {
  @apply text-brand-black dark:text-brand-white;
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
