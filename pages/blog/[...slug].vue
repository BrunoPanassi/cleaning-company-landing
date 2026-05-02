<template>
  <div class="min-h-screen bg-white text-slate-900 antialiased">
    <PortfolioHeader />
    <main v-if="page" class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p class="text-sm font-medium text-slate-500">
        <NuxtLink to="/" class="text-slate-600 hover:text-slate-900">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <NuxtLink to="/blog" class="text-slate-600 hover:text-slate-900">Blog</NuxtLink>
      </p>
      <header class="mt-8 border-b border-slate-200 pb-8">
        <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ page.title }}
        </h1>
        <p v-if="page.date" class="mt-3 text-sm text-slate-500">{{ page.date }}</p>
        <p v-if="page.description" class="mt-4 text-lg text-slate-600">{{ page.description }}</p>
      </header>
      <div class="prose prose-slate mt-10 max-w-none prose-headings:scroll-mt-24 prose-a:text-slate-900">
        <ContentRenderer :value="page" />
      </div>
    </main>
    <main v-else class="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-slate-900">Post not found</h1>
      <p class="mt-2 text-slate-600">That article does not exist or was moved.</p>
      <NuxtLink to="/blog" class="mt-6 inline-block text-sm font-medium text-slate-900 underline">
        Back to blog
      </NuxtLink>
    </main>
    <PortfolioFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

const { data: page } = await useAsyncData(() => `blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first(),
)

useSeoMeta({
  title: computed(() => (page.value ? `${page.value.title} — Bruno Panassi` : 'Bruno Panassi')),
  description: computed(() => page.value?.description),
})
</script>
