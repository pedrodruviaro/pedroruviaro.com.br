<script setup lang="ts">
const { data: notes } = await useAsyncData("home-notes", () =>
  queryContent("/notes").sort({ date: -1 }).limit(5).find()
)
</script>

<template>
  <section>
    <h2 class="font-bold text-2xl lg:text-3xl mb-8">
      O que eu ando escrevendo
    </h2>

    <PostsList>
      <PostsCard
        v-for="note in notes"
        :key="note._id"
        :path="note._path!"
        :title="note.title!"
        :tag="note.tag"
        :date="note.date"
      />
    </PostsList>

    <NuxtLink
      to="/notes"
      class="font-bold border-b border-dashed hover:opacity-75 text-lg mt-10 lg:mt-16 inline-block"
      >Ver todos</NuxtLink
    >
  </section>
</template>
