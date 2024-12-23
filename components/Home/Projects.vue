<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="border border-brand-black/50 rounded-xl p-5 grid gap-5 md:p-10 md:grid-cols-[1fr_.5fr] md:items-center"
    >
      <div>
        <BaseTitle
          size="sm"
          label="Quer conhecer meus projetos?"
          class="mb-1"
        />
        <p>
          Conheça o que ando produzinho no meu tempo livre. Caso queira saber
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
          class="bg-brand-black rounded-lg text-brand-white py-2 px-4 hover:bg-brand-black/85 transition-all"
        >
          Explorar projetos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
