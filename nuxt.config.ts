export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/content",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    base64: true,
    fontsDir: "/assets/fonts",
    overwriting: true,
    families: {
      Raleway: true,
    },
  },
  site: {
    url: "https://pedroruviaro.com.br/",
    name: "pedroruviaro - Desenvolvedor FrontEnd",
  },

  extends: "@nuxt-themes/typography",
})
