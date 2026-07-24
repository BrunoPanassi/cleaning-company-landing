export const blogPostTypes = [
  'Database',
  'Back-end',
  'Front-End',
  'Version Control',
  'Toughts',
] as const

export type BlogPostType = (typeof blogPostTypes)[number]
