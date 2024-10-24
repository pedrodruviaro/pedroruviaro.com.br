<script setup lang="ts"></script>

<template>
  <NuxtLink
    external
    href="https://www.wire.art.br/"
    target="_blank"
    rel="noreferrer"
    id="banner"
    class="block py-2.5"
  >
    <BaseContainer
      class="hover:opacity-70 flex items-center justify-between gap-2"
    >
      <span class="font-semibold text-sm md:text-base text-white">
        Conheça a wire e transforme sua presença digital
      </span>

      <div class="max-w-14">
        <img
          src="https://www.wire.art.br/_vercel/image?url=%2Flogo-white.svg&w=320&q=100"
          alt="wire"
          width="320"
          height="100"
        />
      </div>
    </BaseContainer>
  </NuxtLink>
</template>

<style scoped>
#banner {
  background: linear-gradient(20deg, #ab00f49a 0, #06102d 100%);
}
</style>
