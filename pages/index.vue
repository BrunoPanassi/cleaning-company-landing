<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100"
  >
    <PortfolioHeader />
    <main>
      <PortfolioHero />
      <PortfolioSummary />
      <PortfolioExperience />
      <PortfolioSkills />
      <PortfolioBlogTeaser />
      <PortfolioContact />
    </main>
    <PortfolioFooter />
  </div>
</template>

<script setup lang="ts">
const { isDark } = usePortfolioTheme()

useSeoMeta({
  title: 'Bruno Panassi — Senior full-stack web developer',
  description:
    'Senior full-stack engineer: TypeScript, modern web platforms, APIs, and dependable delivery. Concise portfolio for recruiters and hiring teams.',
  ogTitle: 'Bruno Panassi — Senior full-stack developer',
  ogDescription:
    'Professional portfolio: experience, technical breadth, selected work, and writing.',
  robots: 'index,follow',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Bruno Panassi',
        url: 'https://brunopanassi.com/',
        jobTitle: 'Senior Full-Stack Web Developer',
        sameAs: [],
      }),
    },
  ],
})
</script>
