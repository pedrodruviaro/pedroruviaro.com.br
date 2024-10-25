<script setup lang="ts">
const { data: notes } = await useAsyncData("home-notes", () =>
  queryContent("/notes").sort({ date: -1 }).limit(5).find()
)

const formatDate = (date: string) => {
  // edit
  return "20/out/2024"
}
</script>

<template>
  <section>
    <h2 class="font-bold text-2xl lg:text-3xl mb-4">
      O que eu ando escrevendo
    </h2>

    <div
      v-for="note in notes"
      :key="note._id"
      class="article mt-8 pb-6 border-b border-zinc-700 border-dashed transition-all hover:transition-all hover:opacity-75 hover:border-zinc-400"
    >
      <NuxtLink :to="note._path" class="block font-medium">
        <div class="flex items-center gap-2 mb-3">
          <span
            v-if="note.tag"
            class="text-xs block max-w-max text-center px-2.5 py-px bg-zinc-600 rounded-full"
          >
            {{ note.tag }}</span
          >
          <p class="flex gap-2 items-center text-sm text-zinc-400">
            {{ formatDate(note.date) }}
          </p>
        </div>
        <h3 class="font-semibold text-lg lg:text-xl">{{ note.title }}</h3>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.article:last-child {
  border: none !important;
  padding-bottom: 0;
}
</style>
