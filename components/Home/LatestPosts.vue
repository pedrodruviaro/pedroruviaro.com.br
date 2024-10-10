<script setup lang="ts">
const query = {
  path: "/notes",
  limit: 5,
  sort: [{ date: -1 }],
}
</script>

<template>
  <BaseCard>
    <div>
      <h2 class="font-extrabold text-2xl lg:text-3xl mb-6 lg:mb-7">
        Últimas publicações
      </h2>
      <div class="grid gap-6">
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
      </div>
    </div>
  </BaseCard>
</template>

<style scoped>
.link:last-child a {
  border: none !important;
  padding-bottom: 0;
}
</style>
