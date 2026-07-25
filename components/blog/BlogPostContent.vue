<template>
  <section class="bg-primary">
    <main class="min-h-screen mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p class="text-sm font-medium text-primary">
        <NuxtLink to="/" class="text-primary text-button">Home</NuxtLink>
        <span class="mx-2 text-primary">/</span>
        <NuxtLink to="/blog" class="text-button">Blog</NuxtLink>
      </p>
      <header class="mt-8 pb-8">
        <h1 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {{ page.title }}
        </h1>
        <p v-if="page.date" class="mt-3 text-sm text-primary">{{ page.date }}</p>
        <p v-if="page.description" class="mt-4 text-lg text-secondary">{{ page.description }}</p>
      </header>
      <div
        class="text-primary mt-10 max-w-none"
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
