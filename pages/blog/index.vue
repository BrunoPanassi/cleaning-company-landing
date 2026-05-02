<template>
  <div class="min-h-screen bg-white text-slate-900 antialiased">
    <PortfolioHeader />
    <main class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p class="text-sm font-medium text-slate-500">
        <NuxtLink to="/" class="text-slate-600 hover:text-slate-900">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        Blog
      </p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Writing</h1>
      <p class="mt-3 text-lg text-slate-600">
        Technical notes and longer-form thoughts. Replace placeholders with your own posts.
      </p>
      <ul class="mt-12 space-y-10">
        <li v-for="post in posts" :key="post.path">
          <article>
            <NuxtLink
              :to="post.path"
              class="group block rounded-lg border border-transparent outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              <p v-if="post.date" class="text-sm text-slate-500">{{ formatDate(post.date) }}</p>
              <h2 class="mt-1 text-xl font-semibold text-slate-900 group-hover:underline">
                {{ post.title }}
              </h2>
              <p v-if="post.description" class="mt-2 text-slate-600">
                {{ post.description }}
              </p>
            </NuxtLink>
          </article>
        </li>
      </ul>
      <p v-if="!posts?.length" class="mt-12 text-slate-600">No posts yet. Add Markdown files under <code class="rounded bg-slate-100 px-1.5 py-0.5 text-sm">content/blog/</code>.</p>
    </main>
    <PortfolioFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog — Bruno Panassi',
  description: 'Technical writing and notes on full-stack development, delivery, and engineering practice.',
})

const { data: posts } = await useAsyncData('blog-index', () =>
  queryCollection('blog').order('date', 'DESC').all(),
)

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' }).format(
      new Date(iso),
    )
  }
  catch {
    return iso
  }
}
</script>
