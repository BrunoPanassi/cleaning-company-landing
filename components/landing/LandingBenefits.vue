<template>
  <section id="benefits" class="scroll-mt-24 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Your crew is spotless. Your website should be too.
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          Most cleaning owners win work through word of mouth—then lose deals when someone
          Googles the business and finds an empty profile or a broken form. We fix that gap
          with a site that looks as professional as your residential cleaning service.
        </p>
      </div>
      <ul
        class="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li
          v-for="item in items"
          :key="item.title"
          class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700"
            aria-hidden="true"
          >
            {{ item.icon }}
          </div>
          <h3 class="mt-4 text-lg font-semibold text-slate-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    icon: '◎',
    title: 'Trust at first glance',
    body: 'Photos, reviews, certifications, and guarantees—structured so visitors believe you before they call.',
  },
  {
    icon: '⌁',
    title: 'More booked jobs',
    body: 'Clear service areas, pricing cues, and strong calls-to-action so visitors know exactly what to do next.',
  },
  {
    icon: '⚡',
    title: 'Fast on phones',
    body: 'Your customers search on mobile. Every page is built to load quickly and read easily on small screens.',
  },
] as const
</script>
