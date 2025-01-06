export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxt/scripts",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
  ],
  site: {
    url: "https://pedroruviaro.com.br/",
    name: "pedroruviaro - Desenvolvedor Front-End",
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  colorMode: {
    preference: "light",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    storageKey: "pedroruviaro-color-mode",
  },
  content: {
    highlight: {
      theme: "dracula",
      langs: ["vue", "html", "css", "js", "ts", "php", "blade"],
    },
  },
  ogImage: {
    defaults: {
      component: "Custom",
    },
    strictNuxtContentPaths: true,
  },
})
