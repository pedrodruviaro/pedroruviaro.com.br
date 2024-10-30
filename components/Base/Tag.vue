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
    class="text-xs block max-w-max text-center px-2.5 py-px bg-zinc-600 rounded-full"
  >
    <slot />
  </Component>
</template>
