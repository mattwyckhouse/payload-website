import type { Block } from 'payload'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const Statement: Block = {
  slug: 'statement',
  dbName: 'stmt',
  fields: [
    blockFields({
      name: 'fields',
      fields: [
        richText(),
        linkGroup({
          appearances: false,
        }),
        {
          name: 'assetType',
          type: 'select',
          defaultValue: 'media',
          label: 'Asset Type',
          options: [
            {
              label: 'Media',
              value: 'media',
            },
            {
              label: 'Code',
              value: 'code',
            },
          ],
        },
        {
          name: 'media',
          type: 'upload',
          admin: {
            condition: (_, siblingData) => siblingData.assetType === 'media',
          },
          label: 'Media',
          relationTo: 'media',
        },
        {
          name: 'code',
          type: 'code',
          admin: {
            condition: (_, siblingData) => siblingData.assetType === 'code',
          },
          label: 'Code',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'mediaWidth',
              type: 'select',
              admin: {
                condition: (_, siblingData) => siblingData.assetType === 'media',
                width: '50%',
              },
              defaultValue: 'medium',
              label: 'Media Width',
              options: [
                {
                  label: 'Small',
                  value: 'small',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'Large',
                  value: 'large',
                },
                {
                  label: 'Full',
                  value: 'full',
                },
              ],
            },
            {
              name: 'backgroundGlow',
              type: 'select',
              defaultValue: 'none',
              label: 'Background Glow',
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'Colorful',
                  value: 'colorful',
                },
                {
                  label: 'White',
                  value: 'white',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  labels: {
    plural: 'Statements',
    singular: 'Statement',
  },
}
