<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div tabindex="0" class="tooltip relative inline-block">
    <slot />
    <span
      class="tooltiptext bg-brand-black/10 dark:bg-brand-white/10 invisible text-brand-black dark:text-brand-white text-center text-sm p-1 px-2 rounded-md absolute z-[1]"
      >{{ props.text }}</span
    >
  </div>
</template>

<style scoped>
.tooltip:hover .tooltiptext,
.tooltip:focus .tooltiptext {
  visibility: visible;
}
</style>
