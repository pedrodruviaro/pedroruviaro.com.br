export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Roboto: [400, 600, 700, 900],
    },
  },
  site: {
    url: "https://pedroruviaro.com.br/",
    name: "pedroruviaro - Desenvolvedor FrontEnd",
  },
})
