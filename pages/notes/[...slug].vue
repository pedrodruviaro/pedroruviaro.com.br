<script setup lang="ts"></script>

<template>
  <BaseContainer as="section">
    <div class="prose prose-invert max-w-[100%]">
      <ContentDoc>
        <template #not-found>
          <PostsNotFound />
        </template>
      </ContentDoc>
    </div>
  </BaseContainer>
</template>
