<template>
  <header
    class="sticky top-0 z-50 border-slate-200/90 bg-primary backdrop-blur"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
      <NuxtLink to="/" class="text-sm font-semibold tracking-tight text-primary">
        <img
          :src="logoSrc"
          alt="Bruno Panassi, founder of BrunoPanassi"
          class="h-14 w-14"
        >
      </NuxtLink>
      <nav class="hidden items-center gap-8 text-sm font-medium text-primary sm:flex">
        <a href="#summary" class="transition text-button">Summary</a>
        <a href="#experience" class="transition text-button">Experience</a>
        <a href="#skills" class="transition text-button">Skills</a>
        <a href="#blog" class="transition text-button">Blog</a>
        <a href="#contact" class="transition text-button">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-theme text-primary bg-button text-button transition"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
        <a
          href="#contact"
          class="rounded-full bg-primary px-4 py-2 text-xs border border-theme font-semibold text-primary text-button bg-button transition"
        >
          Get in touch
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = usePortfolioTheme()

const logoSrc = computed(() =>
  isDark.value
    ? '/bruno_panassi_logo_favicon_white.png'
    : '/bruno_panassi_logo_favicon_black.png',
)
</script>
