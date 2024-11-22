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
  ],
  routeRules: {
    "/": { swr: 1800 },
    "/notes": { swr: 1800 },
    "/notes/**": { swr: 1800 },
    "/projects": { prerender: true },
    "/about": { prerender: true },
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
      theme: "min-dark",
    },
  },
})
