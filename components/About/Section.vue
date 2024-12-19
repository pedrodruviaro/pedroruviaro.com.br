<script setup lang="ts"></script>

<template>
  <section class="space-y-4 lg:space-y-5">
    <div>
      <slot name="header" />
    </div>
    <div class="space-y-2 lg:space-y-3">
      <slot />
    </div>
  </section>
</template>
