<script setup lang="ts">
useSeoMeta({
  title: "Notas",
  description: "O que eu ando escrevendo",
})

const { data: notes } = await useAsyncData("home-notes", () =>
  queryContent("/notes").sort({ date: -1 }).find()
)
</script>

<template>
  <section>
    <h2 class="font-bold text-2xl lg:text-3xl mb-10 lg:mb-16">
      Compartilhando de tudo um pouco
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
  </section>
</template>
