import type { Block } from 'payload'

import { blockFields } from '../../fields/blockFields'

export const BlogMarkdown: Block = {
  slug: 'blogMarkdown',
  dbName: 'bm',
  fields: [
    blockFields({
      name: 'fields',
      fields: [
        {
          name: 'markdown',
          type: 'text',
          admin: {
            components: {
              Field: '@root/blocks/BlogMarkdown/Field#BlogMarkdownField',
            },
          },
          required: true,
        },
      ],
    }),
  ],
  labels: {
    plural: 'Markdown Blocks',
    singular: 'Markdown',
  },
}
