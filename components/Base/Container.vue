<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: "div",
  }
)
</script>

<template>
  <Component
    :is="props.as"
    class="w-full max-w-4xl px-4 md:px-6 lg:px-8 mx-auto"
  >
    <slot />
  </Component>
</template>
