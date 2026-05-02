// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  site: {
    url: 'https://brunopanassi.com',
    name: 'BrunoPanassi',
    description:
      'Websites and landing pages focused on residential cleaning companies in USA and Australia.',
    defaultLocale: 'en',
  },
  app: {
    head: {
      title: 'BrunoPanassi — Cleaning Business Websites',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content:
            'Professional websites for residential cleaning company owners in USA and Australia. Built by Bruno Panassi.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f766e' },
        { name: 'geo.region', content: 'US-AU' },
        { name: 'geo.placename', content: 'United States and Australia' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate', hreflang: 'en-us', href: 'https://brunopanassi.com/' },
        { rel: 'alternate', hreflang: 'en-au', href: 'https://brunopanassi.com/' },
      ],
    },
  },
  linkChecker: {
    failOnError: false,
  },
  // Dynamic OG image generation is optional; disabling avoids dev-time renderer setup prompts.
  ogImage: {
    enabled: false,
  },
})
