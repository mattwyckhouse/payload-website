import type { Block } from 'payload'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'

export const BlogContent: Block = {
  slug: 'blogContent',
  dbName: 'bc10',
  fields: [
    blockFields({
      name: 'fields',
      fields: [richText()],
    }),
  ],
}
