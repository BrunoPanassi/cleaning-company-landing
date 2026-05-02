<template>
  <section id="process" class="scroll-mt-24 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          A simple process—because you’re busy running crews
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          We keep meetings short and decisions clear. You bring the story of your business;
          we translate it into a site that works.
        </p>
      </div>
      <ol
        class="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-3 md:gap-6"
      >
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative rounded-2xl border border-slate-200 bg-white p-6 pt-10 shadow-sm"
        >
          <span
            class="absolute left-6 top-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow"
            aria-hidden="true"
          >
            {{ index + 1 }}
          </span>
          <h3 class="font-semibold text-slate-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ step.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discovery call',
    body: 'We learn your services, service area, ideal customer, and what makes your team different.',
  },
  {
    title: 'Design & build',
    body: 'You review a focused prototype, then we build the live site, forms, and on-page SEO basics.',
  },
  {
    title: 'Launch & handoff',
    body: 'We connect your domain, test forms, and give you a short guide for small text updates.',
  },
] as const
</script>
