<script setup lang="ts">
const links = [
  {
    label: "Início",
    to: "/",
  },
  // {
  //   label: "Sobre",
  //   to: "/about",
  // },
  {
    label: "Notas",
    to: "/notes",
  },
  {
    label: "Projetos",
    to: "/projects",
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
  <BaseContainer
    as="header"
    class="py-6 border-b border-brand-black/50 relative"
  >
    <div>
      <div class="flex gap-4 justify-between items-center">
        <div>
          <NuxtLink to="/" @click="handleCloseMenu">
            <div>
              <img
                src="/images/logo.svg"
                width="214"
                height="38"
                alt="pedroruviaro"
              />
            </div>
          </NuxtLink>
        </div>

        <button
          class="grid justify-center gap-1 rounded p-1 [@media(min-width:900px)]:hidden"
          @click="isMenuOpen = !isMenuOpen"
          ref="hamburguerButtonRef"
        >
          <span
            class="w-8 h-1 bg-brand-black relative right-0 ml-auto transition-all"
          ></span>
          <span
            class="w-8 h-1 bg-brand-black relative right-0 ml-auto transition-all"
            :class="{ 'w-6': isMenuOpen }"
          ></span>
          <span
            class="w-8 h-1 bg-brand-black relative right-0 ml-auto transition-all"
            :class="{ 'w-4': isMenuOpen }"
          ></span>
        </button>

        <Transition>
          <nav
            v-show="isMenuOpen || isLargeScreen"
            class="menu flex flex-col gap-3 items-center absolute left-0 right-0 top-[100%] py-4 mt-px z-10 bg-brand-white [@media(min-width:900px)]:flex-row [@media(min-width:900px)]:relative [@media(min-width:900px)]:top-0 [@media(min-width:900px)]:p-0 [@media(min-width:900px)]:mt-auto [@media(min-width:900px)]:bg-transparent [@media(min-width:900px)]:z-0 [@media(min-width:900px)]:visible [@media(min-width:900px)]:translate-x-0 [@media(min-width:900px)]:opacity-1"
            ref="menuRef"
          >
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              @click="handleCloseMenu"
              class="font-extrabold [@media(min-width:900px)]:text-lg hover:opacity-75 focus:opacity-75 text-lg"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </Transition>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
.router-link-active {
  @apply underline decoration-2 underline-offset-4 decoration-brand-black;
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
