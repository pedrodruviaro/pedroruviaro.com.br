<script setup lang="ts">
useSeoMeta({
  title: "Jornais",
  description: "Documentando tudo o que ando aprendendo",
})

const { data: journals } = await useAsyncData("journals-query", () =>
  queryContent("/journals").sort({ date: -1 }).find()
)
</script>

<template>
  <BaseContainer as="section">
    <BaseTitle as="h1" size="lg" label="Meus jornais" class="mb-10 lg:mb-16" />

    <PostsList v-if="journals && journals.length > 0">
      <PostsCard
        v-for="note in journals"
        :key="note._id"
        :path="note._path!"
        :title="note.title!"
        :tag="note.tag"
        :date="note.date"
        :description="note.description"
      />
    </PostsList>

    <p v-else>Sem posts por aqui</p>
  </BaseContainer>
</template>
