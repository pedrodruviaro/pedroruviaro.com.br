<script setup lang="ts"></script>

<template>
  <header class="my-6">
    <BaseCard>
      <div class="flex gap-4 flex-wrap justify-between items-center">
        <div>
          <NuxtLink to="/">
            <div>
              <NuxtImg
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
          <NuxtLink to="/notes" class="link">Notes</NuxtLink>
        </nav>
      </div>
    </BaseCard>
  </header>
</template>

<style scoped>
.link {
  @apply font-extrabold lg:text-lg hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-brand-500  focus:underline focus:decoration-2 focus:underline-offset-4 focus:decoration-brand-500 transition-all focus:outline-none focus:border-none;
}
</style>
