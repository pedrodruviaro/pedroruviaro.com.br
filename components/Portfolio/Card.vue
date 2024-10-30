<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}>()
</script>

<template>
  <article
    class="border border-zinc-600 p-4 rounded-xl grid grid-rows-[max-content_1fr_max-content] gap-6"
  >
    <!-- Image -->
    <div class="rounded-lg overflow-hidden bg-white">
      <img :src="props.image" alt="" aria-hidden="true" />
    </div>

    <!-- Content -->
    <div>
      <h2 class="mb-2 font-bold text-xl lg:text-2xl">
        {{ props.title }}
      </h2>
      <p class="text-sm">{{ props.description }}</p>
      <ul class="flex flex-wrap gap-1 mt-4">
        <BaseTag as="li" v-for="tag in props.tags" :key="tag">
          {{ tag }}
        </BaseTag>
      </ul>
    </div>

    <!-- Footer -->
    <div class="flex items-center gap-2 justify-between flex-wrap">
      <NuxtLink
        :href="props.githubUrl"
        target="_blank"
        rel="nofollow"
        class="opacity-75 hover:opacity-50 flex items-center gap-1 py-2 text-sm"
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
        class="opacity-75 hover:opacity-50 flex items-center gap-1 py-2 text-sm"
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
        <span>Live Demo</span>
      </NuxtLink>
    </div>
  </article>
</template>
