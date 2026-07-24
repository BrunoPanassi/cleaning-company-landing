<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur dark:border-slate-800/90 dark:bg-slate-950/95"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
      <NuxtLink to="/" class="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        <img
          :src="logoSrc"
          alt="Bruno Panassi, founder of BrunoPanassi"
          class="h-14 w-14"
        >
      </NuxtLink>
      <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400 sm:flex">
        <a href="#summary" class="transition hover:text-slate-900 dark:hover:text-slate-100">Summary</a>
        <a href="#experience" class="transition hover:text-slate-900 dark:hover:text-slate-100">Experience</a>
        <a href="#skills" class="transition hover:text-slate-900 dark:hover:text-slate-100">Skills</a>
        <a href="#blog" class="transition hover:text-slate-900 dark:hover:text-slate-100">Blog</a>
        <a href="#contact" class="transition hover:text-slate-900 dark:hover:text-slate-100">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
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
          class="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white sm:text-sm"
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
