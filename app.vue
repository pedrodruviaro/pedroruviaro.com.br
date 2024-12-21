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
</script>

<template>
  <div>
    <LayoutBanner />
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
