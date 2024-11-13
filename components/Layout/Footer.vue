<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <BaseContainer as="footer" class="mt-6 py-6 border-t border-zinc-700">
    <div variant="dark">
      <div class="flex gap-2 flex-wrap items-center justify-between">
        <p class="font-bold">pedroruviaro.com.br</p>
        <p class="text-sm">
          &copy; Copyright {{ currentYear }} - Todos os direitos reservados.
        </p>
      </div>
    </div>
  </BaseContainer>
</template>
