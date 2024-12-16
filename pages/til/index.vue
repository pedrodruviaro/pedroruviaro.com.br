<script setup lang="ts">
useSeoMeta({
  title: "Today I Learned",
  description: "Documentando tudo que aprendi durante o dia",
})

const { data: content } = await useAsyncData("til-query", () =>
  queryContent("/til").sort({ date: -1 }).find()
)

defineOgImageComponent("NuxtSeo", {
  title: "pedroruviaro",
  description: "TIL - Compartilhando o que aprendi no dia",
  theme: "#111010",
  colorMode: "dark",
})
</script>

<template>
  <BaseContainer as="section">
    <BaseTitle
      as="h1"
      size="lg"
      label="Today I Learned (TIL)"
      class="mb-10 lg:mb-16"
    />

    <PostsList v-if="content && content.length > 0">
      <PostsCard
        v-for="note in content"
        :key="note._id"
        :path="note._path!"
        :title="note.title!"
        :tag="note.tag"
        :date="note.date"
      />
    </PostsList>
  </BaseContainer>
</template>
