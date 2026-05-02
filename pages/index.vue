<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 antialiased">
    <LandingHeader />
    <main>
      <LandingHero />
      <LandingStats />
      <LandingBenefits />
      <LandingServices />
      <LandingProcess />
      <LandingCta />
    </main>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'SparkSite — Websites built for cleaning businesses',
  description:
    'Professional websites and landing pages for residential & commercial cleaning owners. More visibility, more booked jobs.',
  ogTitle: 'SparkSite — Websites for cleaning companies',
  ogDescription:
    'We design fast, trustworthy sites that turn local searches into real leads.',
})
</script>
