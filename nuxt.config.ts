export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@zadigetvoltaire/nuxt-gtm",
  ],
  googleFonts: {
    base64: true,
    fontsDir: "/assets/fonts",
    overwriting: true,
    families: {
      Raleway: [300, 400, 500, 600, 700, 800],
    },
  },
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
  content: {
    highlight: {
      theme: "dracula",
    },
  },
  gtm: {
    id: "GTM-KMZTKMNX",
    defer: true,
  },
})
