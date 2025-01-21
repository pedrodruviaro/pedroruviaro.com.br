---
date: "2025-01-22"
tag: "vue"
---

<!--more-->

# Helper Functions ou Composables? Quando criar cada um?

```ts
// @/helpers/formatDate.ts
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(date)
}

// @/composables/useFormattedDate.ts
export function useFormattedDate(date: Ref<Date>) {
  // toRef(date) ou toValue(date) se necessário
  const formatted = computed(() => {
    return new Intl.DateTimeFormat("pt-BR").format(date.value)
  })
  return { formatted }
}
```
