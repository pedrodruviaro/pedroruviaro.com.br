export default defineNuxtPlugin(() => {
  useScript("https://rum.cronitor.io/script.js")

  const initCronitor = () => {
    ;(window as any).cronitor =
      (window as any).cronitor ||
      function () {
        ;((window as any).cronitor.q = (window as any).cronitor.q || []).push(
          arguments
        )
      }
    ;(window as any).cronitor("config", {
      clientKey: "2c7f65d1581b7c10d8715205e8601209",
    })
  }

  if (import.meta.client) {
    nextTick(() => initCronitor())
  }
})
