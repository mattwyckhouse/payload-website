import type { Block } from 'payload'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'

export const MediaContent: Block = {
  slug: 'mediaContent',
  dbName: 'mC',
  fields: [
    blockFields({
      name: 'fields',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'alignment',
              type: 'select',
              defaultValue: 'contentMedia',
              options: [
                {
                  label: 'Content + Media',
                  value: 'contentMedia',
                },
                {
                  label: 'Media + Content',
                  value: 'mediaContent',
                },
              ],
              admin: {
                description: 'Choose how to align the content for this block.',
                width: '50%',
              },
            },
          ],
        },
        richText(),
        {
          name: 'enableLink',
          type: 'checkbox',
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              condition: (_, { enableLink }) => enableLink,
            },
          },
        }),
        {
          name: 'images',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    }),
  ],
}
