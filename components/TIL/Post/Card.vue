<script setup lang="ts">
const props = defineProps<{
  path: string
  title: string
}>()
</script>

<template>
  <NuxtLink
    :to="props.path"
    class="block article pb-6 border-b border-brand-black/50 border-dashed transition-all hover:transition-all hover:opacity-75 hover:border-zinc-400"
  >
    <div class="flex items-center gap-2 mb-3"></div>
    <BaseTitle as="h3" size="sm" :bold="false" :label="props.title" />
  </NuxtLink>
</template>

<style scoped>
.article:last-child {
  border: none !important;
  padding-bottom: 0;
}
</style>
