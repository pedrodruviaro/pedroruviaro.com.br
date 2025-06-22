export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
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
    storageKey: "pedroruviaro-color-mode",
  },
  content: {
    highlight: {
      theme: "dracula-soft",
      langs: [
        "vue",
        "html",
        "css",
        "javascript",
        "js",
        "jsx",
        "typescript",
        "ts",
        "php",
      ],
    },
  },
  googleFonts: {
    preload: true,
    preconnect: true,
    display: "swap",
    families: {
      Inter: true,
    },
  },
})
