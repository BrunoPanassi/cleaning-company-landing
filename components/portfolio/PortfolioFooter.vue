<template>
  <footer class="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
    <div class="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p class="text-sm text-slate-600 dark:text-slate-400">
        © {{ year }} Bruno Panassi. Built with Nuxt—content ready to extend.
      </p>
      <div class="flex gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
        <NuxtLink to="/blog" class="hover:text-slate-900 dark:hover:text-slate-100">Blog</NuxtLink>
        <a href="#experience" class="hover:text-slate-900 dark:hover:text-slate-100">Experience</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
