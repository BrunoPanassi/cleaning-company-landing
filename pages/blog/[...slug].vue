<template>
  <BlogShell>
    <BlogPostContent v-if="page" :page="page" />
    <BlogNotFound v-else />
  </BlogShell>
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
