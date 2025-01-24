<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl: string
}>()
</script>

<template>
  <article
    class="border bg-white border-brand-black/20 rounded-lg grid grid-rows-[max-content_1fr_max-content] gap-6 overflow-hidden"
  >
    <!-- Image -->
    <div
      class="overflow-hidden bg-brand-white border-b border-brand-black/30 max-h-[19.375rem]"
    >
      <img
        :src="props.image"
        :alt="title"
        width="499"
        height="312"
        aria-hidden="true"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="p-4">
      <BaseTitle size="md" class="mb-2">{{ props.title }}</BaseTitle>
      <p>{{ props.description }}</p>
      <ul class="flex flex-wrap gap-1 mt-4">
        <BaseTag as="li" v-for="tag in props.tags" :key="tag">
          {{ tag }}
        </BaseTag>
      </ul>
    </div>

    <!-- Footer -->
    <div
      class="flex items-center gap-2 flex-wrap p-4"
      :class="{
        'justify-end': !props.githubUrl,
        'justify-between': props.githubUrl,
      }"
    >
      <NuxtLink
        v-if="props.githubUrl"
        :href="props.githubUrl"
        target="_blank"
        rel="nofollow"
        class="hover:opacity-70 flex items-center gap-1 py-2 text-sm"
      >
        <div>
          <img
            src="/public/images/github-logo.svg"
            alt=""
            aria-hidden="true"
            width="20"
            height="20"
          />
        </div>
        <span>GitHub</span>
      </NuxtLink>

      <NuxtLink
        :href="props.liveUrl"
        target="_blank"
        rel="nofollow"
        class="hover:opacity-70 flex items-center gap-1 py-2 text-sm"
      >
        <div>
          <img
            src="/public/images/live-demo-arrow.svg"
            alt=""
            aria-hidden="true"
            width="20"
            height="20"
          />
        </div>
        <span>Live</span>
      </NuxtLink>
    </div>
  </article>
</template>
