<script setup lang="ts"></script>

<template>
  <NuxtLink
    external
    href="https://www.wire.art.br/"
    target="_blank"
    rel="noreferrer"
    aria-label="Conheça a wire e transforme sua presença digital"
    id="banner"
    class="block py-3 sm:py-2.5 group"
  >
    <BaseContainer
      class="hover:opacity-70 flex items-center justify-between gap-2"
    >
      <span
        class="font-semibold text-sm md:text-base text-brand-white group-hover:underline"
      >
        <span class="md:hidden">Impulsione sua marca com a gente.</span>
        <span class="hidden md:block">
          Conheça a wire e transforme sua presença digital
        </span>
      </span>

      <div class="max-w-14">
        <img
          src="/images/wire.svg"
          alt="wire"
          aria-hidden="true"
          width="50"
          height="15"
        />
      </div>
    </BaseContainer>
  </NuxtLink>
</template>

<style scoped>
#banner {
  background: linear-gradient(20deg, #ab00f49a 0, #0071e2 100%);
}
</style>
