<script setup lang="ts"></script>

<template>
  <BaseContainer>
    <LayoutHeader />
    <main class="mt-10 lg:mt-16 main-content">
      <slot />
    </main>
    <LayoutFooter />
  </BaseContainer>
</template>

<style scoped>
.main-content {
  min-height: calc(100vh - 55px);
}
</style>
