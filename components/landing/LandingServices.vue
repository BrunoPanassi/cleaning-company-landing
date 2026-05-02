<template>
  <section id="services" class="scroll-mt-24 border-t border-slate-200 bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Landing pages, full sites, and the details that convert
          </h2>
          <p class="mt-4 text-lg text-slate-600">
            Whether you need a single high-performing landing page or a complete site with
            multiple pages, each block is tuned for residential cleaning buyers and quote intent.
          </p>
          <ul class="mt-8 space-y-4">
            <li
              v-for="line in lines"
              :key="line"
              class="flex gap-3 text-slate-700"
            >
              <span
                class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>{{ line }}</span>
            </li>
          </ul>
        </div>
        <div
          class="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-teal-50/60 p-8 shadow-inner"
        >
          <h3 class="text-sm font-semibold uppercase tracking-wide text-teal-800">
            Example deliverables
          </h3>
          <ul class="mt-6 space-y-4 text-slate-800">
            <li class="flex justify-between border-b border-slate-200/80 pb-4">
              <span class="font-medium">Conversion-focused homepage</span>
              <span class="text-sm text-slate-500">Core</span>
            </li>
            <li class="flex justify-between border-b border-slate-200/80 pb-4">
              <span class="font-medium">Service &amp; area pages</span>
              <span class="text-sm text-slate-500">SEO</span>
            </li>
            <li class="flex justify-between border-b border-slate-200/80 pb-4">
              <span class="font-medium">Quote / lead form</span>
              <span class="text-sm text-slate-500">Leads</span>
            </li>
            <li class="flex justify-between border-b border-slate-200/80 pb-4">
              <span class="font-medium">Google Business Profile alignment</span>
              <span class="text-sm text-slate-500">Local</span>
            </li>
            <li class="flex justify-between pt-1">
              <span class="font-medium">Optional: booking link integration</span>
              <span class="text-sm text-slate-500">Add-on</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const lines = [
  'Messaging tuned to residential cleaning services (recurring, deep clean, move-out, add-ons)',
  'Structured content so Google understands your service areas in USA/AUS markets',
  'Accessible, readable design—your brand colors, not a generic template dump',
  'Hands-off updates: we handle hosting setup guidance and launch checklist',
] as const
</script>
