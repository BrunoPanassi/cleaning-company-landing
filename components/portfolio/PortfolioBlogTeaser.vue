<template>
  <section id="blog" class="bg-primary">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-primary">From the blog</h2>
          <p class="mt-3 max-w-xl text-primary">Non-AI-generated articles written by me.</p>
        </div>
        <NuxtLink
          to="/blog"
          class="shrink-0 text-sm font-semibold text-primary underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
        >
          View all posts
        </NuxtLink>
      </div>
      <ul class="mt-10 grid gap-6 lg:grid-cols-3">
        <li v-for="post in posts ?? []" :key="post.path">
          <NuxtLink
            :to="post.path"
            class="block h-full rounded-2xl border border-theme bg-primary p-6 shadow-sm transition"
          >
            <p v-if="post.date" class="text-xs text-primary">{{ post.date }}</p>
            <h3 class="mt-2 font-semibold text-primary">{{ post.title }}</h3>
            <p v-if="post.description" class="mt-2 text-sm text-primary line-clamp-3">{{ post.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('portfolio-blog-teaser', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).select('title', 'path', 'description', 'date').all(),
  { server: false}
)
</script>
