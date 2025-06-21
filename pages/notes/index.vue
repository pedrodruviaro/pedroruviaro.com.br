<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content"

useSeoMeta({
  title: "Notas",
  description: "O que eu ando escrevendo",
})

const notes = ref<ParsedContent[]>([])

const LIMIT = 14
const skip = ref(0)
const numOfPages = ref(0)
const currentPage = ref(1)

const route = useRoute()

const initialPage = computed(() => parseInt(route.query.page as string) || 1)
currentPage.value = initialPage.value
skip.value = (currentPage.value - 1) * LIMIT

const { data: totalCount } = await useAsyncData("home-notes-count", () =>
  queryContent("/notes").count()
)

const { data } = await useAsyncData("home-notes", () =>
  queryContent("/notes").sort({ date: -1 }).limit(LIMIT).skip(skip.value).find()
)

if (data.value && totalCount.value) {
  numOfPages.value = Math.ceil(Number(totalCount.value) / LIMIT)
  notes.value = data.value
}

const router = useRouter()
const { y } = useWindowScroll()

async function fetchNotes(page: number) {
  if (page === currentPage.value) return

  currentPage.value = page
  skip.value = (currentPage.value - 1) * LIMIT

  try {
    const data = await queryContent("/notes")
      .sort({ date: -1 })
      .limit(LIMIT)
      .skip(skip.value)
      .find()

    notes.value = data
    y.value = 100

    router.push({ query: { page: currentPage.value.toString() } })
  } catch (error) {
    console.error(error)
  }
}

watch(
  () => initialPage.value,
  (val) => {
    fetchNotes(val)
  }
)
</script>

<template>
  <BaseContainer as="section">
    <div class="mb-10 lg:mb-16">
      <BaseTitle
        as="h1"
        size="lg"
        label="Compartilhando de tudo um pouco"
        class="mb-4"
      />

      <p>
        Por aqui eu gosto de compartilhar dicas, trechos de código algumas
        reflexões sobre carreira e tecnologia.
      </p>
    </div>

    <PostsList v-if="notes && notes.length > 0">
      <PostsCard
        v-for="note in notes"
        :key="note._id"
        :path="note._path!"
        :title="note.title!"
        :tag="note.tag"
        :date="note.date"
      />
    </PostsList>

    <p v-else>Sem posts por aqui</p>

    <div class="flex items-center justify-end gap-2 mt-10">
      <button
        class="p-2 w-10 border border-zinc-800 rounded-md text-sm grid place-items-center aspect-square hover:opacity-80 transition-all"
        v-for="index in numOfPages"
        :key="index"
        :class="{
          'bg-neutral-950/10 dark:bg-neutral-200/10': currentPage === index,
        }"
        @click="() => router.push({ query: { page: index } })"
      >
        {{ index }}
      </button>
    </div>
  </BaseContainer>
</template>
