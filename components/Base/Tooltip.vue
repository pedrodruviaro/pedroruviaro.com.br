<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div class="tooltip relative inline-block">
    <slot />
    <span
      class="tooltiptext bg-neutral-900 invisible text-neutral-400 text-center text-sm p-1 px-2 rounded-md absolute z-[1]"
      >{{ props.text }}</span
    >
  </div>
</template>

<style scoped>
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
