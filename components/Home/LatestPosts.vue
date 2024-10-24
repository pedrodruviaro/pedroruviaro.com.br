<script setup lang="ts">
const query = {
  path: "/notes",
  limit: 5,
  sort: [{ date: -1 }],
}
</script>

<template>
  <section>
    <h2 class="font-bold text-2xl lg:text-3xl mb-4">Algumas notas</h2>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="link">
        <NuxtLink
          :to="article._path"
          class="border-b border-b-brand-400 block pb-4 font-medium hover:opacity-70 transition-all"
        >
          <h3>{{ article.title }}</h3>
        </NuxtLink>
      </div>
    </ContentList>
  </section>
</template>
