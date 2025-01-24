<script setup lang="ts">
const { data: notes } = await useAsyncData("home-notes", () =>
  queryContent("/notes").sort({ date: -1 }).limit(7).find()
)
</script>

<template>
  <section>
    <BaseTitle size="lg" class="mb-8" label="O que eu ando escrevendo" />

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
      >Ver mais</NuxtLink
    >
  </section>
</template>
