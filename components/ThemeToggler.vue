<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div>
    <!-- <h1>Color mode: {{ $colorMode.value }}</h1> -->
    <select v-model="$colorMode.preference">
      <option value="system">SY</option>
      <option value="light">LI</option>
      <option value="dark">DA</option>
    </select>
  </div>
</template>
