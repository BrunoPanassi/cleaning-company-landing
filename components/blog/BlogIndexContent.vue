<template>
  <section class="min-h-screen bg-primary">
    <main class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p class="text-sm font-medium text-primary">
        <NuxtLink to="/" class="text-primary">Home</NuxtLink>
        <span class="mx-2 text-primary">/</span>
        Blog
      </p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Writing</h1>
      <p class="mt-3 text-lg text-primary">
        Technical notes and some longer-form thoughts.
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row">
        <label class="flex-1">
          <span class="sr-only">Search posts by title</span>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search by title..."
            class="w-full rounded-full border border-theme bg-primary px-4 py-2.5 text-sm text-primary outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
          >
        </label>
        <label class="sm:w-56">
          <span class="sr-only">Filter posts by type</span>
          <select
            v-model="selectedType"
            class="w-full rounded-full border border-theme bg-primary px-4 py-2.5 text-sm text-primary outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
          >
            <option value="">All types</option>
            <option v-for="type in blogPostTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </label>
      </div>

      <ul class="mt-12 space-y-10">
        <li v-for="post in filteredPosts" :key="post.path">
          <article>
            <NuxtLink
              :to="post.path"
              class="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              <div class="flex flex-wrap items-center gap-3">
                <p v-if="post.date" class="text-sm text-slate-500 dark:text-slate-400">{{ formatDate(post.date) }}</p>
                <span
                  v-if="post.type"
                  class="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {{ post.type }}
                </span>
              </div>
              <h2 class="mt-1 text-xl font-semibold text-primary group-hover:underline">
                {{ post.title }}
              </h2>
              <p v-if="post.description" class="mt-2 text-primary">
                {{ post.description }}
              </p>
            </NuxtLink>
          </article>
        </li>
      </ul>

      <p v-if="!posts?.length" class="mt-12 text-primary">
        No posts yet. Add Markdown files under
        <code class="rounded bg-primary px-1.5 py-0.5 text-sm">content/blog/</code>.
      </p>
      <p v-else-if="!filteredPosts.length" class="mt-12 text-primary">
        No posts match your search or filter.
      </p>
    </main>
  </section>
</template>

<script setup lang="ts">
import { blogPostTypes, type BlogPostType } from '~/data/blog'

const props = defineProps<{
  posts: Array<{
    path: string
    title?: string
    description?: string
    date?: string
    type?: BlogPostType
  }> | null
}>()

const searchQuery = ref('')
const selectedType = ref<BlogPostType | ''>('')

const filteredPosts = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return (props.posts ?? []).filter((post) => {
    const matchesTitle = !query || post.title?.toLowerCase().includes(query)
    const matchesType = !selectedType.value || post.type === selectedType.value

    return matchesTitle && matchesType
  })
})

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
