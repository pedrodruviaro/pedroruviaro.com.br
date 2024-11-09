<script setup lang="ts"></script>

<template>
  <div class="prose prose-invert max-w-[100%]">
    <ContentDoc>
      <template #not-found>
        <PostsNotFound />
      </template>
    </ContentDoc>
  </div>
</template>
