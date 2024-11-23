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
    <BaseTooltip text="* Today I Learned" class="mb-10 lg:mb-16">
      <h1 class="font-bold text-2xl lg:text-3xl">
        TIL* - Meus jornais
      </h1></BaseTooltip
    >

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
