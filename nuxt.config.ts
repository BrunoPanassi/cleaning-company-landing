// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/seo'],
  site: {
    url: 'https://brunopanassi.com',
    name: 'Bruno Panassi',
    description:
      'Senior full-stack web developer. TypeScript, modern web platforms, APIs, and dependable product delivery.',
    defaultLocale: 'en',
  },
  app: {
    head: {
      title: 'Bruno Panassi — Senior full-stack developer',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content:
            'Senior full-stack engineer: TypeScript, Vue/Nuxt, Node, APIs, and production-minded delivery.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f172a' },
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
  ogImage: {
    enabled: false,
  },
  css: [
    "~/assets/css/theme.css"
  ]
})
