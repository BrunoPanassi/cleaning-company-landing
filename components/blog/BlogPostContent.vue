<template>
  <section class="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
    <main class="min-h-screen mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950">
      <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
        <NuxtLink to="/" class="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">Home</NuxtLink>
        <span class="mx-2 text-slate-300 dark:text-slate-600">/</span>
        <NuxtLink to="/blog" class="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">Blog</NuxtLink>
      </p>
      <header class="mt-8 border-b border-slate-200 pb-8 dark:border-slate-800">
        <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          {{ page.title }}
        </h1>
        <p v-if="page.date" class="mt-3 text-sm text-slate-500 dark:text-slate-400">{{ page.date }}</p>
        <p v-if="page.description" class="mt-4 text-lg text-slate-600 dark:text-slate-400">{{ page.description }}</p>
      </header>
      <div
        class="prose prose-slate mt-10 max-w-none prose-headings:scroll-mt-24 prose-a:text-slate-900 dark:prose-invert dark:prose-a:text-slate-100"
      >
        <ContentRenderer :value="page" />
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  page: Record<string, unknown>
}>()
</script>
