<script setup lang="ts">
const query = {
  path: "/notes",
  limit: 5,
  sort: [{ date: -1 }],
}
</script>

<template>
  <section>
    <h2 class="font-bold text-2xl lg:text-3xl mb-4">
      O que eu ando escrevendo
    </h2>
    <ContentList :query="query" v-slot="{ list }">
      <div
        v-for="article in list"
        :key="article._path"
        class="article mt-8 pb-6 border-b border-zinc-700 border-dashed transition-all hover:transition-all hover:opacity-75 hover:border-zinc-400"
      >
        <NuxtLink :to="article._path" class="block font-medium">
          <p class="flex gap-2 items-center text-sm text-zinc-400 mb-2">
            <span class="w-1 h-3 block bg-zinc-500"></span>20/out/2025
          </p>
          <h3 class="font-semibold text-lg lg:text-xl">{{ article.title }}</h3>
          <p class="text-zinc-400 text-base mt-1">
            Um resumo sobre CSS box model
          </p>
        </NuxtLink>
      </div>
    </ContentList>
  </section>
</template>

<style scoped>
.article:last-child {
  border: none !important;
  padding-bottom: 0;
}
</style>
