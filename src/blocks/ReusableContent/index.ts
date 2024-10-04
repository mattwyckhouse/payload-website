import type { Block } from 'payload'

import { blockFields } from '../../fields/blockFields'

export const ReusableContent: Block = {
  slug: 'rcBlock',
  dbName: 'rcB',
  fields: [
    blockFields({
      name: 'fields',
      fields: [
        {
          name: 'reusableContent',
          type: 'relationship',
          relationTo: 'reusable-content',
          required: true,
        },
        {
          name: 'customId',
          type: 'text',
          admin: {
            description: () =>
              'This is a custom ID that can be used to target this block with CSS or JavaScript.',
          },
        },
      ],
    }),
  ],
}
