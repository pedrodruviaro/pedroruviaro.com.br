<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
  content: string[]
  infos?: string
}>()
</script>

<template>
  <article class="space-y-1">
    <BaseTitle as="h3" size="sm" :label="props.title" :bold="false" />
    <p class="text-sm font-bold">{{ props.subtitle }}</p>
    <div>
      <p class="text-sm" v-for="exp in props.content" :key="exp">- {{ exp }}</p>
    </div>
    <p class="text-sm" v-if="!!props.infos">
      Stack de trabalho: <span class="font-semibold">{{ props.infos }}</span>
    </p>
  </article>
</template>
