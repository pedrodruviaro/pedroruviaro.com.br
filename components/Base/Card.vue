<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "light" | "dark"
  }>(),
  {
    variant: "light",
  }
)
</script>

<template>
  <div class="rounded-xl p-3 md:p-4" :class="{ [props.variant]: true }">
    <slot />
  </div>
</template>

<style scoped>
.light {
  @apply bg-brand-300 text-brand-700;
}

.dark {
  @apply bg-brand-500 text-brand-300;
}
</style>
