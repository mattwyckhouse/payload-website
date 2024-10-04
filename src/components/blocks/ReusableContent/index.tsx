import React from 'react'

import { RenderBlocks } from '@components/RenderBlocks/index.js'
import { Page } from '@root/payload-types.js'

export type Props = Extract<Page['layout'][0], { blockType: 'rcBlock' }>

export const ReusableContentBlock: React.FC<Props> = ({ fields }) => {
  const { reusableContent, customId } = fields

  if (typeof reusableContent === 'object' && reusableContent !== null) {
    return <RenderBlocks blocks={reusableContent.layout} disableGutter customId={customId} />
  }

  return null
}
