<template>
  <NuxtLink :href="props.href" target="_blank">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: "",
  },
})
</script>
