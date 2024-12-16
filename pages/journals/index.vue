<script setup lang="ts">
useSeoMeta({
  title: "Jornais",
  description: "Documentando resumos do que ando aprendendo",
})

const { data: journals } = await useAsyncData("journals-query", () =>
  queryContent("/journals").sort({ date: -1 }).find()
)

defineOgImageComponent("NuxtSeo", {
  title: "pedroruviaro",
  description: "Journals - Documentando resumos do que ando aprendendo",
  theme: "#111010",
  colorMode: "dark",
})
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
