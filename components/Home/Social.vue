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
  <BaseCard>
    <ul class="flex justify-around gap-2 items-center">
      <li v-for="link in links" :key="link.href">
        <NuxtLink
          :aria-label="link.label"
          :href="link.href"
          :target="link.target"
          :rel="link.rel"
          class="hover:opacity-85"
        >
          <img
            :src="`/images/${link.iconPath}`"
            alt=""
            aria-hidden="true"
            width="36"
            height="36"
          />
        </NuxtLink>
      </li>
    </ul>
  </BaseCard>
</template>
