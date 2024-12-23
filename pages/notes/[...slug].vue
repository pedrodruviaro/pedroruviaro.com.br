<script setup lang="ts"></script>

<template>
  <BaseContainer as="section">
    <BaseProgressBar />

    <div class="prose max-w-[100%]">
      <ContentDoc>
        <template #not-found>
          <PostsNotFound />
        </template>
      </ContentDoc>
    </div>
  </BaseContainer>
</template>
