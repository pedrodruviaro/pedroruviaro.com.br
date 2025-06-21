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
    class="text-xs block max-w-max text-center px-2.5 pb-1 pt-px leading-none text-neutral-950/80 bg-neutral-950/10 dark:text-neutral-200/80 dark:bg-neutral-200/10 rounded-full"
  >
    <slot />
  </Component>
</template>
