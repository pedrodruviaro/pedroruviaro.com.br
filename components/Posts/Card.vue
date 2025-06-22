<script setup lang="ts">
import { formatDate } from "~/utils/post/formatDate"

const props = defineProps<{
  path: string
  title: string
  date: string
  tag: string
  description?: string
}>()
</script>

<template>
  <NuxtLink
    :to="props.path"
    class="block article pb-6 border-b border-neutral-950/50 dark:border-neutral-200/50 border-dashed transition-all hover:transition-all hover:opacity-75 hover:border-zinc-400"
  >
    <div class="flex items-center gap-2 mb-3">
      <BaseTag v-if="props.tag">{{ props.tag }}</BaseTag>
      <p
        class="flex gap-2 items-center text-sm text-neutral-950/60 dark:text-neutral-200/60"
      >
        {{ formatDate(props.date) }}
      </p>
    </div>
    <BaseTitle as="h3" size="sm" :bold="false" :label="props.title" />
    <p v-if="props.description" class="mt-2 text-sm">{{ props.description }}</p>
  </NuxtLink>
</template>

<style scoped>
.article:last-child {
  border: none !important;
  padding-bottom: 0;
}
</style>
