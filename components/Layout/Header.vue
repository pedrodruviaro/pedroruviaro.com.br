<script setup lang="ts"></script>

<template>
  <BaseContainer as="header" class="mt-6 pb-4 border-b border-zinc-600">
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
          <NuxtLink to="/notes" class="link">Notas</NuxtLink>
          <NuxtLink to="/projects" class="link">Projetos</NuxtLink>
        </nav>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
.link {
  @apply font-extrabold lg:text-lg hover:opacity-75 focus:opacity-75;
}

.router-link-active {
  @apply underline decoration-2 underline-offset-4 decoration-brand-500;
}
</style>
