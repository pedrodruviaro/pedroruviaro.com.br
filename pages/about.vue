<script setup lang="ts">
useSeoMeta({
  title: "Sobre",
  description:
    "Um pouco sobre mim, minha stack de trabalho e minha trajetória.",
  ogTitle: "Sobre",
  ogDescription:
    "Um pouco sobre mim, minha stack de trabalho e minha trajetória.",
})
</script>

<template>
  <BaseContainer>
    <article class="space-y-16 lg:space-y-24">
      <section class="grid gap-10 md:grid-cols-[1fr_0.5fr] md:items-center">
        <div class="space-y-4">
          <BaseTitle label="Sobre mim" as="h1" />
          <p>
            Desenvolvedor front-end apaixonado por tecnologia e aprendizado
            contínuo, com foco no desenvolvimento front-end e, mais
            recentemente, back-end. Tenho experiência em HTML, CSS, TypeScript,
            Vue e Nuxt, e estou buscando abranger todo o ecossistema JavaScript
            e TypeScript.
          </p>

          <p>
            Iniciei minha jornada em 2021, migrando da área de Química, e desde
            então tenho me aprofundado cada vez mais no universo do
            desenvolvimento. Gosto de estudar, ensinar e aprender coisas novas.
            Em 2024, comecei o projeto
            <NuxtLink
              class="border-b inline-block border-dashed hover:opacity-80"
              href="/about#wire"
              >wire</NuxtLink
            >, onde oferecemos serviços de desenvolvimento, design, e
            consultoria de marketing e SEO para empresas e pessoas físicas.
          </p>
        </div>

        <div class="rounded-lg overflow-hidden">
          <img
            src="/images/about/profile.png"
            width="460"
            height="460"
            alt=""
          />
        </div>
      </section>

      <section class="grid gap-10 md:flex md:flex-row-reverse md:items-center">
        <div class="space-y-4 md:flex-[2]">
          <BaseTitle label="Stack de trabalho" size="sm" />
          <p>Minha stack principal...</p>

          <p>Também estudo php, laravel...</p>
        </div>

        <div class="md:flex-1">
          <img
            src="/images/about/stack.png"
            width="401"
            height="332"
            alt="Stack de tecnologias"
            class="grayscale hover:grayscale-0 transition-all"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section
        class="grid gap-10 md:grid-cols-[1fr_0.5fr] md:items-center"
        id="wire"
      >
        <div class="space-y-4">
          <BaseTitle label="wire" size="sm" />
          <p>Nascida em 2024, a wire veio com a proposta de ...</p>
          <p>
            Com uma equipe multidisciplinar de especialistas, integramos design,
            estratégia e tecnologia em nossos projeto. O compromisso é entregar
            resultados impactantes para a sua marca com entregas artesanais,
            alinhadas aos seus objetivos.
          </p>
          <NuxtLink
            external
            href="https://www.wire.art.br/"
            target="_blank"
            rel="nofollow"
            class="inline-block border-b font-semibold border-dashed hover:opacity-80"
            >Conheça o projeto</NuxtLink
          >
        </div>

        <div class="rounded-lg overflow-hidden">
          <img
            src="/images/about/wire.png"
            alt=""
            class="grayscale hover:grayscale-0 transition-all"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <!-- <section class="grid gap-10 md:grid-cols-[1fr_0.5fr] md:items-start">
        <div>
          <p>experiencia</p>
        </div>

        <div>
          <p>não sei ainda</p>
        </div>
      </section> -->
    </article>
  </BaseContainer>
</template>
