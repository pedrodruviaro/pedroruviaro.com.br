<script setup lang="ts"></script>

<template>
  <section>
    <div class="rounded-full overflow-hidden w-20 h-20">
      <img
        src="/images/avatar.png"
        alt="Pedro, visto de frente"
        width="80"
        height="80"
      />
    </div>

    <h1 class="text-3xl lg:text-4xl font-medium my-4">
      Olá, eu sou o Pedro. <br />
      <strong class="font-extrabold">Desenvolvedor Front End</strong>
    </h1>
    <div class="space-y-3">
      <p class="font-medium max-w-[72ch]">
        Desenvolvedor front-end apaixonado por tecnologia e aprendizado
        contínuo, com foco no desenvolvimento front-end e, mais recentemente,
        back-end. Tenho experiência em HTML, CSS, TypeScript, Vue e Nuxt, e
        estou buscando abranger todo o ecossistema JavaScript e TypeScript.
        <NuxtLink
          to="/about"
          class="border-b font-semibold border-dashed hover:opacity-80"
          >Conheça mais sobre mim</NuxtLink
        >.
      </p>

      <p>Se preferir, entre em contato por um dos links abaixo.</p>
    </div>
  </section>
</template>
