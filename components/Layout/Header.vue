<script setup lang="ts">
const links = [
  {
    label: "Início",
    to: "/",
  },
  {
    label: "Sobre",
    to: "/about",
  },
  {
    label: "Notas",
    to: "/notes",
  },
]

const isMenuOpen = ref(false)
const handleCloseMenu = () => (isMenuOpen.value = false)

const menuRef = ref(null)
const hamburguerButtonRef = ref()

onClickOutside(
  menuRef,
  () => {
    handleCloseMenu()
  },
  { ignore: [hamburguerButtonRef] }
)

const isLargeScreen = useMediaQuery("(min-width: 900px)")
</script>

<template>
  <BaseContainer as="header" class="py-6 relative">
    <div class="flex gap-4 justify-between items-center">
      <NuxtLink
        aria-label="Início"
        to="/"
        @click="handleCloseMenu"
        class="hover:opacity-75 focus:opacity-75 transition-all !no-underline"
      >
        <Logo />
      </NuxtLink>

      <div class="flex-1 flex items-center justify-end gap-4">
        <button
          class="grid justify-center gap-1 rounded p-1 [@media(min-width:900px)]:hidden"
          ref="hamburguerButtonRef"
          @click="isMenuOpen = !isMenuOpen"
          :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        >
          <span
            class="w-8 h-1 bg-neutral-950 dark:bg-neutral-200 relative right-0 ml-auto transition-all rounded-sm"
          ></span>
          <span
            class="h-1 bg-neutral-950 dark:bg-neutral-200 relative right-0 ml-auto transition-all rounded-sm"
            :class="{ 'w-6': isMenuOpen, 'w-8': !isMenuOpen }"
          ></span>
          <span
            class="h-1 bg-neutral-950 dark:bg-neutral-200 relative right-0 ml-auto transition-all rounded-sm"
            :class="{ 'w-4': isMenuOpen, 'w-8': !isMenuOpen }"
          ></span>
        </button>

        <Transition>
          <nav
            v-show="isMenuOpen || isLargeScreen"
            class="menu flex flex-col gap-3 items-center absolute left-0 right-0 top-[100%] py-4 mt-px z-10 bg-neutral-200 dark:bg-neutral-800 [@media(min-width:900px)]:flex-row [@media(min-width:900px)]:relative [@media(min-width:900px)]:top-0 [@media(min-width:900px)]:p-0 [@media(min-width:900px)]:mt-auto [@media(min-width:900px)]:bg-transparent [@media(min-width:900px)]:z-0 [@media(min-width:900px)]:visible [@media(min-width:900px)]:translate-x-0 [@media(min-width:900px)]:opacity-1"
            ref="menuRef"
          >
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              @click="handleCloseMenu"
              class="font-bold hover:opacity-75 focus:opacity-75"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </Transition>

        <ClientOnly>
          <template #fallback>
            <div
              class="h-6 w-12 relative rounded-full bg-neutral-800 dark:bg-neutral-300 flex items-center px-1 transition-colors"
            ></div>
          </template>
          <DarkModeToggler />
        </ClientOnly>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
.router-link-active {
  @apply underline decoration-1 underline-offset-4;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(25%);
  opacity: 0;
}

@media (max-width: 900px) {
  .menu {
    box-shadow: 0px 100px 100px rgba(0 0 0 / 0.1);
  }
}

@media (min-width: 900px) {
  .menu {
    display: flex !important;
  }
}
</style>
