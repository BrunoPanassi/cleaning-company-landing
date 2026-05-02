<template>
  <section id="experience" class="scroll-mt-24 border-b border-slate-200 bg-white">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900">Experience</h2>
      <p class="mt-3 max-w-2xl text-slate-600">
        Representative roles—replace company names, dates, and bullets with your verified history.
      </p>
      <ol class="mt-12 space-y-12">
        <li v-for="role in roles" :key="role.id" class="border-l-2 border-slate-200 pl-8">
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 class="text-lg font-semibold text-slate-900">{{ role.title }}</h3>
              <p class="text-sm font-medium text-slate-700">{{ role.company }}</p>
            </div>
            <p class="text-sm text-slate-500">{{ role.period }}</p>
          </div>
          <ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
            <li v-for="bullet in role.bullets" :key="bullet" class="flex gap-2">
              <span class="text-slate-400" aria-hidden="true">—</span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const roles = [
  {
    id: '1',
    title: 'Senior Full-Stack Engineer',
    company: 'Company name (replace)',
    period: '20XX — Present',
    bullets: [
      'Owned mission-critical flows; reduced incident rate through better validation, monitoring, and runbooks.',
      'Partnered with product to sequence delivery; cut time-to-first-value by tightening scope and instrumentation.',
      'Mentored engineers on TypeScript, testing strategy, and pragmatic code review.',
    ],
  },
  {
    id: '2',
    title: 'Full-Stack Engineer',
    company: 'Company name (replace)',
    period: '20XX — 20XX',
    bullets: [
      'Built and evolved customer-facing web apps with accessible, responsive UI and resilient APIs.',
      'Improved performance (TTFB, bundle size, DB queries) with profiling-driven changes.',
      'Contributed to platform foundations: shared UI kit, auth patterns, deployment pipelines.',
    ],
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'Company name (replace)',
    period: '20XX — 20XX',
    bullets: [
      'Shipped features across the stack; collaborated in agile teams with clear ownership.',
      'Participated in on-call rotation; diagnosed production issues and shipped fixes quickly.',
    ],
  },
] as const
</script>
