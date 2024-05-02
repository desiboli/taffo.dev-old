import { defineCollection, z } from 'astro:content'

const writingCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
})

const notesCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
})

const snippetsCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
})

export const collections = {
  writing: writingCollection,
  notes: notesCollection,
  snippets: snippetsCollection,
}
