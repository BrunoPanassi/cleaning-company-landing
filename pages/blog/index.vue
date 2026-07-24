<template>
  <BlogShell>
    <BlogIndexContent :posts="posts" />
  </BlogShell>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog — Bruno Panassi',
  description: 'Technical writing and notes on full-stack development, delivery, and engineering practice.',
})

const { data: posts } = await useAsyncData('blog-index', () =>
  queryCollection('blog').order('date', 'DESC').select('title', 'path', 'description', 'date', 'type').all(),
)
</script>
