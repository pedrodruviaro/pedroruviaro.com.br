<script setup lang="ts">
type Sizes = "base" | "lg"

type SizeClasses = {
  [key in Sizes]: string
}

const props = withDefaults(
  defineProps<{
    as?: string
    size?: Sizes
  }>(),
  {
    as: "div",
    size: "base",
  }
)

const sizeClasses: SizeClasses = {
  base: "max-w-4xl",
  lg: "max-w-[100rem]",
}
</script>

<template>
  <Component
    :is="props.as"
    class="w-full px-4 md:px-6 lg:px-8 mx-auto"
    :class="[sizeClasses[props.size]]"
  >
    <slot />
  </Component>
</template>
