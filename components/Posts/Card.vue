<script setup lang="ts">
const props = defineProps<{
  path: string
  title: string
  date: string
  tag: string
}>()

const months = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
]

const formatDate = (date: string) => {
  // 2024-10-20
  const split = date.split("-")
  const monthIdx = Number(split[1]) - 1
  const month = months[monthIdx]

  return `${split[2]} ${month} ${split[0]}`
}
</script>

<template>
  <NuxtLink
    :to="props.path"
    class="block article pb-6 border-b border-zinc-700 border-dashed transition-all hover:transition-all hover:opacity-75 hover:border-zinc-400"
  >
    <div class="flex items-center gap-2 mb-3">
      <BaseTag v-if="props.tag">{{ props.tag }}</BaseTag>
      <p class="flex gap-2 items-center text-sm text-zinc-400">
        {{ formatDate(props.date) }}
      </p>
    </div>
    <h3 class="font-semibold text-lg lg:text-xl">{{ props.title }}</h3>
  </NuxtLink>
</template>

<style scoped>
.article:last-child {
  border: none !important;
  padding-bottom: 0;
}
</style>
