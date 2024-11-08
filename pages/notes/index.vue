<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content"

useSeoMeta({
  title: "Notas",
  description: "O que eu ando escrevendo",
})

const notes = ref<ParsedContent[]>([])

const LIMIT = 10
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
  <section>
    <h1 class="font-bold text-2xl lg:text-3xl mb-10 lg:mb-16">
      Compartilhando de tudo um pouco
    </h1>
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

    <div class="flex items-center gap-2 mt-10">
      <button
        v-for="index in numOfPages"
        :key="index"
        class="p-2 w-10 border border-zinc-800 rounded-md text-sm grid place-items-center aspect-square hover:opacity-80 transition-all"
        :class="{ 'bg-zinc-950': currentPage === index }"
        @click="() => router.push({ query: { page: index } })"
      >
        {{ index }}
      </button>
    </div>
  </section>
</template>
