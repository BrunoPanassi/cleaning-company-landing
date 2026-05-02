<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 antialiased">
    <LandingHeader />
    <main>
      <LandingHero />
      <LandingFounder />
      <LandingTemplates />
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
  title: 'BrunoPanassi — Residential cleaning websites (USA & Australia)',
  description:
    'Landing pages and websites for residential cleaning businesses. BrunoPanassi helps owners turn searches into WhatsApp leads.',
  ogTitle: 'BrunoPanassi — Websites for cleaning businesses',
  ogDescription:
    'Website templates and custom pages focused on residential cleaning companies in USA/Australia.',
  robots: 'index,follow',
})

useHead({
  link: [
    { rel: 'alternate', hreflang: 'en-US', href: 'https://brunopanassi.com/cleaning-company-services' },
    { rel: 'alternate', hreflang: 'en-AU', href: 'https://brunopanassi.com/cleaning-company-services' },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'BrunoPanassi',
        url: 'https://brunopanassi.com/cleaning-company-services',
        areaServed: ['United States', 'Australia'],
        serviceType: 'Website design for residential cleaning companies',
      }),
    },
  ],
})
</script>
