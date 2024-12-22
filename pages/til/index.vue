<script setup lang="ts">
useSeoMeta({
  title: "Today I Learned",
  description: "Documentando tudo que aprendi durante o dia",
})

const { data: content } = await useAsyncData("til-query", () =>
  queryContent("/til").sort({ date: -1 }).find()
)
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
      <TILPostCard
        v-for="til in content"
        :key="til._id"
        :path="til._path!"
        :title="til.title!"
      />
    </PostsList>
  </BaseContainer>
</template>
