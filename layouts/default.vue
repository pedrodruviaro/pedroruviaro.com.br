<script setup lang="ts"></script>

<template>
  <LayoutHeader />
  <main class="my-10 lg:my-16 main-content">
    <slot />
  </main>
  <LayoutFooter />
</template>

<style scoped>
.main-content {
  min-height: calc(100vh - 55px);
}
</style>
