import type { Block } from 'payload'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'

export const LinkGrid: Block = {
  slug: 'linkGrid',
  dbName: 'lG',
  fields: [
    blockFields({
      name: 'fields',
      fields: [
        linkGroup({
          appearances: false,
        }),
      ],
    }),
  ],
}
