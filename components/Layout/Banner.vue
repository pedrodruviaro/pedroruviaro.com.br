<script setup lang="ts"></script>

<template>
  <NuxtLink
    external
    href="https://www.wire.art.br/"
    target="_blank"
    rel="noreferrer"
    aria-label="Conheça a wire e transforme sua presença digital"
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
  background: linear-gradient(20deg, #ab00f49a 0, #06102d 100%);
}
</style>
