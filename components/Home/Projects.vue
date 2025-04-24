<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="border border-brand-black rounded-xl p-5 md:grid md:gap-10 md:relative"
    >
      <div class="md:max-w-[70%]">
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
            class="border-b border-dashed border-brand-black/80"
            >email</a
          >.
        </p>

        <NuxtLink
          to="/projects"
          class="block max-w-max mt-6 leading-snug bg-brand-black rounded-lg text-brand-white py-2 px-4 hover:bg-brand-black/85 transition-all"
        >
          Explorar projetos
        </NuxtLink>
      </div>

      <div
        class="hidden md:block absolute right-2.5 top-2.5 bottom-2.5 max-w-max"
      >
        <img
          src="/images/projects-shape.svg"
          alt=""
          aria-hidden="true"
          class="w-full h-full"
          width="75"
          height="149"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>
