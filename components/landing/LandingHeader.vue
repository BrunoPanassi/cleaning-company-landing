<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
    >
      <a href="#" class="group flex items-center gap-2">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-lg font-semibold text-white shadow-sm transition group-hover:bg-teal-700"
          aria-hidden="true"
        >
          ✦
        </span>
        <span class="text-lg font-semibold tracking-tight text-slate-900">
          SparkSite
        </span>
      </a>
      <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        <a href="#benefits" class="transition hover:text-teal-700">Why it matters</a>
        <a href="#services" class="transition hover:text-teal-700">What we build</a>
        <a href="#process" class="transition hover:text-teal-700">How it works</a>
      </nav>
      <a
        href="#contact"
        class="rounded-full bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Get a free plan
      </a>
    </div>
  </header>
</template>
