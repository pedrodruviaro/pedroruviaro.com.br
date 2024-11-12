<script setup lang="ts">
const links = [
  {
    label: "Github",
    iconPath: "github-logo.svg",
    href: "https://github.com/pedrodruviaro",
    target: "_blank",
    rel: "nofollow",
  },
  {
    label: "Linkedin",
    iconPath: "linkedin-logo.svg",
    href: "https://www.linkedin.com/in/pedroruviaro/",
    target: "_blank",
    rel: "nofollow",
  },
  {
    label: "Codepen",
    iconPath: "codepen-logo.svg",
    href: "https://codepen.io/pedrodruviaro/",
    target: "_blank",
    rel: "nofollow",
  },
  {
    label: "Email",
    iconPath: "email-logo.svg",
    href: "mailto:pedrodruviaro@gmail.com",
    target: "_self",
    rel: "nofollow",
  },
]
</script>

<template>
  <section>
    <ul class="flex gap-4 items-center">
      <li v-for="link in links" :key="link.href">
        <BaseTooltip :text="link.label">
          <NuxtLink
            :aria-label="link.label"
            :href="link.href"
            :target="link.target"
            :rel="link.rel"
            class="opacity-75 hover:opacity-50"
          >
            <img
              :src="`/images/${link.iconPath}`"
              alt=""
              aria-hidden="true"
              width="30"
              height="30"
            /> </NuxtLink
        ></BaseTooltip>
      </li>
    </ul>
  </section>
</template>
