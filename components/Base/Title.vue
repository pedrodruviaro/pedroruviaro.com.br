<script setup lang="ts">
type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type Sizes = "sm" | "md" | "lg"

type SizeClasses = {
  [key in Sizes]: string
}

const props = withDefaults(
  defineProps<{
    as?: As
    size?: Sizes
    center?: boolean
    label?: string
  }>(),
  {
    as: "h2",
    size: "md",
    center: false,
  }
)

const sizeClasses: SizeClasses = {
  sm: "text-xl md:text-2xl",
  md: "text-2xl md:text-3xl",
  lg: "text-3xl md:text-4xl",
}
</script>

<template>
  <Component
    class="font-bold text-balance"
    :is="props.as"
    :class="[{ 'mx-auto text-center': props.center }, sizeClasses[props.size]]"
  >
    <template v-if="props.label">
      {{ props.label }}
    </template>

    <slot v-else />
  </Component>
</template>
