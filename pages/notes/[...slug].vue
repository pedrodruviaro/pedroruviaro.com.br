<script setup lang="ts">
import { formatDate } from "~/utils/post/formatDate"
</script>

<template>
  <BaseContainer as="section">
    <BaseProgressBar />

    <div class="prose max-w-[100%]">
      <ContentDoc>
        <template v-slot="{ doc }">
          <div>
            <div class="mb-6 lg:mb-8 flex gap-3 items-center flex-wrap">
              <BaseTag>{{ doc.tag }}</BaseTag>
              <p class="text-sm mb-0 mt-0 text-brand-black/80">
                {{ formatDate(doc.date) }}
              </p>
            </div>
            <ContentRenderer :value="doc" />
          </div>
        </template>

        <template #not-found>
          <PostsNotFound />
        </template>
      </ContentDoc>
    </div>
  </BaseContainer>
</template>
