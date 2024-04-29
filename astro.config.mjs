import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeExternalLinks from 'rehype-external-links'
// import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
// import remarkBreaks from 'remark-breaks'
// import remarkGfm from 'remark-gfm'
import rehypeSectionize from '@hbsnow/rehype-sectionize'

// https://astro.build/config
/** @type {import('astro/config').defineConfig} */
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  site: 'https://taffo.dev',
  markdown: {
    shikiConfig: {
      theme: 'andromeeda',
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
      // rehypeSectionize,
    ],
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
