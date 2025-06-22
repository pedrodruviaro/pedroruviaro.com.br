<script setup lang="ts"></script>

<template>
  <section>
    <div>
      <div class="md:max-w-[90%]">
        <BaseTitle
          size="sm"
          label="Conheça alguns de meus projetos"
          class="mb-3"
        />
        <p>
          Explore o que eu ando produzinho no meu tempo livre. Caso queira saber
          mais sobre projetos profissionais e outras experiências, entre em
          contato pelo meu
          <a
            href="mailto:pedrodruviaro@gmail.com"
            class="border-b border-dashed border-neutral-950/80 dark:border-neutral-200/80"
            >email</a
          >.
        </p>

        <NuxtLink
          to="/projects"
          class="block max-w-max mt-6 leading-snug bg-neutral-950 dark:bg-neutral-300 rounded-lg text-neutral-200 dark:text-neutral-800 py-2 px-4 hover:bg-neutral-950/85 dark:hover:bg-neutral-400/85 transition-all"
        >
          Explorar projetos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
