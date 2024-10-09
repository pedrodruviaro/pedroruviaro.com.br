<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="mt-6">
    <BaseCard variant="dark">
      <div class="flex gap-2 flex-wrap items-center justify-between">
        <p class="font-bold">pedroruviaro.com.br</p>
        <p class="text-sm">
          &copy; Copyright {{ currentYear }} - Alguns direitos reservados.
        </p>
      </div>
    </BaseCard>
  </footer>
</template>
