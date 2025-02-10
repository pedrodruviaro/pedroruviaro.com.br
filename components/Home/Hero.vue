<script setup lang="ts"></script>

<template>
  <section>
    <div class="rounded-full overflow-hidden w-20 h-20">
      <img
        src="/images/avatar-80.webp"
        srcset="/images/avatar-160.webp 2x, /images/avatar-240.webp 3x"
        alt="Pedro, visto de frente"
        width="80"
        height="80"
      />
    </div>

    <BaseTitle as="h1" size="xl" class="font-medium my-4">
      Olá, eu sou o Pedro. <br />
      <strong class="font-extrabold">Desenvolvedor Front End</strong>
    </BaseTitle>
    <div class="space-y-3">
      <p class="lg:text-lg">
        Desenvolvedor web com mais de três anos de experiência focado em
        front-end, especialmente na stack
        <strong>Vue</strong>, <strong>Nuxt</strong> e
        <strong>TypeScript</strong>. Atualmente, também navego no universo
        <strong>PHP/Laravel</strong> e <strong>Node.js</strong>, expandindo
        minhas habilidades para o back-end e projetos fullstack.
      </p>
    </div>
  </section>
</template>
