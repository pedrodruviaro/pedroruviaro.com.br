<script setup lang="ts">
const { data: notes } = await useAsyncData("home-notes", () =>
  queryContent("/notes").sort({ date: -1 }).limit(5).find()
)
</script>

<template>
  <section>
    <BaseTitle label="O que eu ando escrevendo" class="mb-8" />

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
      class="font-bold hover:opacity-75 text-xl mt-10 lg:mt-14 inline-block"
      >Veja mais</NuxtLink
    >
  </section>
</template>
