<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <button
    v-if="colorMode"
    aria-label="Change site theme"
    type="button"
    class="h-6 w-12 relative rounded-full bg-neutral-800 dark:bg-neutral-300 flex items-center px-1 transition-colors"
    @click="
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    "
  >
    <span
      class="inline-block transition-transform"
      :class="{ 'translate-x-5': colorMode.value === 'light' }"
    >
      <!-- Moon -->
      <svg
        v-if="colorMode.value === 'dark'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-neutral-800"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 12.79A9 9 0 0112.21 3 7 7 0 0012 17a7 7 0 009-4.21z" />
      </svg>

      <!-- Sun -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-neutral-200"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 4.5a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1zm0 13a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1zM4.5 12a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1zm13 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1zM7.22 7.22a1 1 0 0 1 1.42 0l.07.07a1 1 0 0 1-1.42 1.42l-.07-.07a1 1 0 0 1 0-1.42zm8.07 8.07a1 1 0 0 1 1.42 0l.07.07a1 1 0 0 1-1.42 1.42l-.07-.07a1 1 0 0 1 0-1.42zM7.22 16.78a1 1 0 0 1 0-1.42l.07-.07a1 1 0 0 1 1.42 1.42l-.07.07a1 1 0 0 1-1.42 0zm8.07-8.07a1 1 0 0 1 0-1.42l.07-.07a1 1 0 1 1 1.42 1.42l-.07.07a1 1 0 0 1-1.42 0zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
        />
      </svg>
    </span>
  </button>
</template>
