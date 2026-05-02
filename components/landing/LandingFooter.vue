<template>
  <footer class="border-t border-slate-200 bg-slate-100/80">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8"
    >
      <div class="flex items-center gap-2">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-md bg-teal-600 text-sm font-semibold text-white"
          aria-hidden="true"
        >
          ✦
        </span>
        <span class="font-semibold text-slate-800">BrunoPanassi</span>
      </div>
      <p class="text-center text-sm text-slate-500 sm:text-left">
        © {{ year }} BrunoPanassi. Websites for residential cleaning companies in USA and Australia.
      </p>
      <div class="flex gap-6 text-sm font-medium text-slate-600">
        <a href="#founder" class="transition hover:text-teal-700">Bruno</a>
        <a href="#templates" class="transition hover:text-teal-700">Templates</a>
        <a href="#contact" class="transition hover:text-teal-700">CTA</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
