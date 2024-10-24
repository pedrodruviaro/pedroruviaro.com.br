<template>
  <div class="w-full h-full calc-h grid place-items-center">
    <div>
      <h1
        class="font-bold text-2xl lg:text-3xl text-balance mx-auto text-center"
      >
        Parece que essa nota não existe
      </h1>
      <span class="w-full max-w-20 block bg-brand-300 h-px mx-auto my-5"></span>
      <NuxtLink
        to="/notes"
        class="mx-auto text-lg lg:text-xl block max-w-max font-medium lg:text-lg hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-brand-500 focus:underline focus:decoration-2 focus:underline-offset-4 focus:decoration-brand-500 focus:outline-none focus:border-none"
        >Voltar</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.calc-h {
  min-height: calc(100vh - (75px + 56px));
}
</style>
