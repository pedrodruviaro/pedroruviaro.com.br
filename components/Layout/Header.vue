<script setup lang="ts"></script>

<template>
  <header class="mt-6 pb-4 border-b border-zinc-600">
    <div>
      <div class="flex gap-4 flex-wrap justify-between items-center">
        <div>
          <NuxtLink to="/">
            <div>
              <img
                src="/images/logo.svg"
                width="214"
                height="38"
                alt="pedroruviaro"
              />
            </div>
          </NuxtLink>
        </div>

        <nav class="flex gap-4 items-center">
          <NuxtLink to="/" class="link">Início</NuxtLink>
          <NuxtLink to="/projects" class="link">Projetos</NuxtLink>
          <NuxtLink to="/notes" class="link">Notas</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.link {
  @apply font-extrabold lg:text-lg hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-brand-500  focus:underline focus:decoration-2 focus:underline-offset-4 focus:decoration-brand-500  focus:outline-none focus:border-none;
}
</style>
