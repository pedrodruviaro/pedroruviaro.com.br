<script setup lang="ts">
const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop
  const scrollHeight = doc.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / scrollHeight) * 100
}

onMounted(() => {
  window.addEventListener("scroll", updateScrollProgress)
})

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollProgress)
})
</script>

<template>
  <div
    class="fixed top-0 left-0 h-1 bg-brand-pink"
    :style="{ width: `${scrollProgress}%` }"
  ></div>
</template>
