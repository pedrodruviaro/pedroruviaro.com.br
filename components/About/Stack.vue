<script setup lang="ts">
const stack = [
  {
    path: "/images/about/vue.png",
    title: "Vue",
    width: 60,
    height: 52,
  },
  {
    path: "/images/about/nuxt.png",
    title: "Nuxt",
    width: 70,
    height: 50,
  },
  {
    path: "/images/about/ts.png",
    title: "TypeScript",
    width: 60,
    height: 60,
  },
  {
    path: "/images/about/laravel.png",
    title: "Laravel",
    width: 60,
    height: 62,
  },
]
</script>

<template>
  <AboutSection>
    <template #header>
      <BaseTitle size="md" label="Stack de trabalho" />
    </template>
    <p>
      Já trabalhei com alguns frameworks e bibliotecas JavaScript, no entanto,
      se eu tivesse que escolher minha stack de tecnologia dos sonhos (a que
      mais gosto de trabalhar), seria a seguinte:
    </p>

    <div class="flex items-center gap-6 pt-6 pb-5 lg:gap-8">
      <BaseTooltip v-for="logo in stack" :key="logo.path" :text="logo.title">
        <img
          :src="logo.path"
          :alt="logo.title"
          :width="logo.width"
          :height="logo.height"
          class="grayscale-[100%] opacity-60 pb-1 hover:grayscale-0 hover:opacity-80 transition-all"
        />
      </BaseTooltip>
    </div>

    <p>
      Por trabalhar muito de perto com designers, tenho conhecimentos em Figma e
      UI/UX. Da minha passagem por agência, trago uma forte bagagem de SEO e
      otimização web, além de experiência em lidar com clientes, prazos e
      mudanças de escopo.
    </p>
  </AboutSection>
</template>
