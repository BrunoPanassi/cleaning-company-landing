<template>
  <section id="templates" class="scroll-mt-24 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Website templates made for residential cleaning companies
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          These are sample directions to show what your next site can look like. We can customize colors, offers,
          and service structure for your brand.
        </p>
      </div>
      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <article
          v-for="template in cleaningTemplates"
          :key="template.id"
          class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div class="h-40 border-b border-slate-200 bg-gradient-to-br from-teal-100 to-cyan-50 p-5">
            <div class="rounded-xl border border-teal-200/60 bg-white/80 p-3 text-xs text-slate-600">
              <p class="font-semibold text-slate-700">{{ template.name }}</p>
              <p class="mt-1">{{ template.audience }}</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate-900">{{ template.name }}</h3>
            <p class="mt-2 text-sm text-slate-600">{{ template.description }}</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-700">
              <li v-for="highlight in template.highlights" :key="highlight" class="flex gap-2">
                <span class="text-teal-700" aria-hidden="true">✓</span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cleaningTemplates } from '~/data/site'
</script>
