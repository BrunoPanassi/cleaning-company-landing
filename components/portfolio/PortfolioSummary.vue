<template>
  <section id="summary" class="scroll-mt-24 border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">At a glance</h2>
      <div class="mt-8 grid gap-10 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {{ summary }}
          </p>
          <ul class="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <li v-for="point in proofPoints" :key="point" class="flex gap-3">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900 dark:bg-slate-100" aria-hidden="true" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
        <aside class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Focus</h3>
          <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li v-for="item in focusAreas" :key="item">{{ item }}</li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const summary =
  'Experienced senior full-stack developer with a track record of owning features from discovery through production: aligning stakeholders, implementing maintainable systems, and operating them with observability and care. Comfortable leading technical direction without unnecessary complexity.'

const proofPoints = [
  'Delivers vertical slices: data model, APIs, UI, deployment, and monitoring hooks when needed.',
  'Writes for the next maintainer—tests where they earn their keep, docs where ambiguity hurts.',
  'Partners with product and design; translates constraints into shippable increments.',
] as const

const focusAreas = [
  'TypeScript / Node ecosystems',
  'Vue & React SPAs, Nuxt & SSR',
  'REST & event-driven integrations',
  'PostgreSQL, caching, performance',
  'CI/CD, cloud primitives, security hygiene',
] as const
</script>
