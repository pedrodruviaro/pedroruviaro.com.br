<script setup lang="ts">
const { data: notes } = await useAsyncData("home-notes", () =>
  queryContent("/notes").sort({ date: -1 }).find()
)
</script>

<template>
  <section>
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
