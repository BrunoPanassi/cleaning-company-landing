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
        <span class="font-semibold text-slate-800">SparkSite</span>
      </div>
      <p class="text-center text-sm text-slate-500 sm:text-left">
        © {{ year }} SparkSite. Websites and landing pages for cleaning company owners.
      </p>
      <div class="flex gap-6 text-sm font-medium text-slate-600">
        <a href="#benefits" class="transition hover:text-teal-700">Why</a>
        <a href="#services" class="transition hover:text-teal-700">Services</a>
        <a href="#contact" class="transition hover:text-teal-700">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
