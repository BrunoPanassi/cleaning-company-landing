import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'
import { blogPostTypes } from './data/blog'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        type: z.enum(blogPostTypes),
      }),
    }),
  },
})
