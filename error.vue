<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: "/" })
</script>

<template>
  <main
    class="container mx-auto grid place-items-center min-h-screen text-center"
  >
    <div>
      <h2 class="font-black text-9xl">{{ props.error?.statusCode }}</h2>
      <div v-if="props.error?.message">
        <p class="mt-5 mb-10 text-lg lg:text-xl">Parece que você se perdeu</p>
      </div>
      <button @click="handleError" class="inline border-b border-dashed">
        Voltar para o início
      </button>
    </div>
  </main>
</template>
