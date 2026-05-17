<template>
  <section id="skills" class="scroll-mt-24 border-b border-slate-200 bg-slate-50">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900">Technical breadth</h2>
      <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="group in groups"
          :key="group.name"
          class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500">{{ group.name }}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="tag in group.tags"
              :key="tag"
              class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const groups = [
  { name: 'Languages', tags: ['TypeScript', 'JavaScript', 'SQL', 'HTML / CSS', 'Python', 'Java'] },
  { name: 'Frontend', tags: ['Vue', 'Nuxt', 'React', 'Vite', 'Vuetify', 'Quasar', 'Accessibility', 'Design systems'] },
  { name: 'Backend & data', tags: ['Node.js', 'Spring Boot', 'REST', 'PostgreSQL'] },
  { name: 'Platform', tags: ['Docker', 'GitHub Actions', 'Nginx', 'Observability'] },
  { name: 'Practices', tags: ['Code review', 'Unit-Testing', 'Trunk-based flow', 'RFCs', 'Design Patterns', 'SOLID'] },
] as const
</script>
