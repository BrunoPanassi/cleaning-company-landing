<template>
  <footer class="bg-primary">
    <div class="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p class="text-sm textprimary">
        © {{ year }} Bruno Panassi. Built with Nuxt—content ready to extend.
      </p>
      <div class="flex gap-6 text-sm font-medium text-primary">
        <NuxtLink to="/blog" class="text-button">Blog</NuxtLink>
        <a href="#experience" class="text-button">Experience</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
