<script setup lang="ts">
type Sizes = "xs" | "sm" | "md" | "lg" | "xl"

type SizeClasses = {
  [key in Sizes]: string
}

const props = withDefaults(
  defineProps<{
    as?: string
    size?: Sizes
    center?: boolean
    label?: string
    bold?: boolean
  }>(),
  {
    as: "h2",
    size: "md",
    center: false,
    bold: true,
  }
)

const isBold = computed(() => {
  return props.bold ? "font-bold" : "font-semibold"
})

const sizeClasses: SizeClasses = {
  xs: "text-base md:text-lg",
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl",
  xl: "text-3xl md:text-4xl",
}
</script>

<template>
  <Component
    class="font-bold text-balance text-brand-black dark:text-brand-white"
    :is="props.as"
    :class="[
      { 'mx-auto text-center': props.center },
      sizeClasses[props.size],
      isBold,
    ]"
  >
    <template v-if="props.label">
      {{ props.label }}
    </template>

    <slot v-else />
  </Component>
</template>
