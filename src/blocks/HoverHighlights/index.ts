import type { Block } from 'payload'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'

export const HoverHighlights: Block = {
  slug: 'hoverHL',
  dbName: 'hHL',
  labels: {
    singular: 'Hover Highlights Block',
    plural: 'Hover Highlights Blocks',
  },
  fields: [
    blockFields({
      name: 'fields',
      fields: [
        {
          name: 'beforeHighlights',
          type: 'textarea',
        },
        {
          name: 'hl',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              type: 'group',
              name: 'media',
              label: 'Media',
              admin: {
                hideGutter: true,
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'top',
                      type: 'upload',
                      relationTo: 'media',
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'bottom',
                      type: 'upload',
                      relationTo: 'media',
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
              ],
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'afterHighlights',
          type: 'textarea',
        },
        link({
          appearances: false,
        }),
      ],
    }),
  ],
}
