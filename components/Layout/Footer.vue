<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <BaseContainer as="footer" class="mt-6 py-6 border-t border-zinc-700">
    <div class="grid gap-6 md:flex md:items-center md:justify-between">
      <LayoutSocialLinks />

      <div class="flex flex-col gap-2 lg:flex-row lg:items-center">
        <p class="font-bold">pedroruviaro.com.br</p>
        <p class="text-sm">
          &copy; Copyright {{ currentYear }} - Todos os direitos reservados.
        </p>
      </div>
    </div>
  </BaseContainer>
</template>
