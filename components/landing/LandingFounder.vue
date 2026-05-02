<template>
  <section id="founder" class="scroll-mt-24 border-t border-slate-200 bg-white py-20 sm:py-24">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <div class="mx-auto max-w-md lg:mx-0">
        <img
          src="/bruno-panassi-photo.svg"
          alt="Bruno Panassi, founder of BrunoPanassi"
          class="w-full rounded-3xl border border-slate-200 object-cover shadow-sm"
        >
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-teal-700">Real person, real support</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Work directly with Bruno Panassi
        </h2>
        <p class="mt-5 text-lg text-slate-600">
          I build websites for cleaning companies with a practical focus: clearer positioning, better local trust,
          and more quote requests. You speak with me directly from briefing to launch.
        </p>
        <p class="mt-4 text-slate-600">
          No agency handoffs, no hidden process. Just a direct partnership and a website shaped for residential
          cleaning clients in your market.
        </p>
        <NuxtLink
          :to="portfolioPath"
          class="mt-8 inline-flex items-center justify-center rounded-full border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
        >
          View developer portfolio &amp; experience
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioPath } from '~/data/site'
</script>
