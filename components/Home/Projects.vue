<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="border border-brand-black rounded-xl p-5 grid gap-5 md:p-8 md:grid-cols-[1fr_.5fr] md:items-center"
    >
      <div>
        <BaseTitle
          size="sm"
          label="Conheça alguns de meus projetos"
          class="mb-1"
        />
        <p>
          Explore o que eu ando produzinho no meu tempo livre. Caso queira saber
          mais sobre projetos profissionais e outras experiências, entre em
          contato pelo meu
          <a
            href="mailto:pedrodruviaro@gmail.com"
            class="border-b border-dashed border-brand-black/80"
            >email</a
          >.
        </p>
      </div>

      <div class="md:grid md:justify-end">
        <NuxtLink
          to="/projects"
          class="leading-snug bg-brand-accent rounded-lg border border-brand-black text-brand-black py-2 px-4 hover:bg-brand-accent/50 transition-all"
        >
          Explorar projetos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
