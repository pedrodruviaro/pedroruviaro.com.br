<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <BaseContainer
    as="footer"
    class="mt-6 py-6 border-t border-brand-black/50 dark:border-brand-white/50"
  >
    <div variant="dark">
      <div class="flex gap-2 flex-wrap items-center justify-between">
        <NuxtLink to="/" class="font-bold">pedroruviaro.com.br</NuxtLink>
        <p class="text-sm">
          &copy; Copyright {{ currentYear }} - Todos os direitos reservados.
        </p>
      </div>
    </div>
  </BaseContainer>
</template>
