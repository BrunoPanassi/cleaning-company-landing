<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
      <NuxtLink to="/" class="text-sm font-semibold tracking-tight text-slate-900"> Bruno Panassi </NuxtLink>
      <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
        <a href="#summary" class="transition hover:text-slate-900">Summary</a>
        <a href="#experience" class="transition hover:text-slate-900">Experience</a>
        <a href="#skills" class="transition hover:text-slate-900">Skills</a>
        <a href="#blog" class="transition hover:text-slate-900">Blog</a>
        <a href="#contact" class="transition hover:text-slate-900">Contact</a>
      </nav>
      <a
        href="#contact"
        class="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 sm:text-sm"
      >
        Get in touch
      </a>
    </div>
  </header>
</template>
