<template>
  <section id="projects" class="scroll-mt-24 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Selected work</h2>
      <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        Some of the public repos of personal projects that i had been working on
      </p>
      <div class="mt-10 grid gap-8 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.title"
          class="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50"
        >
          <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ project.title }}</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ project.context }}</p>
          <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{{ project.outcome }}</p>
          <p class="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ project.stack }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Customer onboarding platform',
    context: 'B2B SaaS • high compliance expectations',
    outcome:
      'Rebuilt a fragile flow into a typed, test-backed module; fewer support tickets and faster approvals.',
    stack: 'TypeScript · Vue · Node · PostgreSQL',
  },
  {
    title: 'API hardening & performance',
    context: 'High-traffic read path',
    outcome:
      'Profiling-led changes: query batching, caching boundaries, and structured logging for incident response.',
    stack: 'Node · Redis · OpenTelemetry',
  },
  {
    title: 'Design system adoption',
    context: 'Multi-team product org',
    outcome:
      'Introduced shared primitives and documentation; improved consistency and cut UI regressions in QA.',
    stack: 'Vue · Storybook · CI visual checks',
  },
] as const
</script>
