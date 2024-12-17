<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  { as: "span" }
)
</script>

<template>
  <Component
    :is="props.as"
    class="text-xs block max-w-max text-center px-2.5 py-px bg-brand-black/10 rounded-full"
  >
    <slot />
  </Component>
</template>
