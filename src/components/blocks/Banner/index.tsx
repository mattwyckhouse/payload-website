import React from 'react'

import { Banner, Props as BannerProps } from '@components/Banner/index.js'
import { Gutter } from '@components/Gutter/index.js'
import { ReusableContent } from '@root/payload-types.js'

export type BannerBlockProps = Extract<ReusableContent['layout'][0], { blockType: 'banner' }>

export const BannerBlock: React.FC<{
  fields: BannerBlockProps['fields']
  marginAdjustment?: boolean
  disableGutter?: boolean
}> = ({ fields, disableGutter, marginAdjustment }) => {
  const bannerProps: BannerProps = {
    type: fields.type,
    content: fields.content,
    icon: fields.addCheckmark ? 'checkmark' : undefined,
    marginAdjustment: marginAdjustment,
  }

  return (
    <>
      {disableGutter ? (
        <Banner {...bannerProps} />
      ) : (
        <Gutter>
          <div className={'grid'}>
            <div className={'cols-8 start-5 cols-m-6 start-m-2 cols-s-8 start-s-1'}>
              <Banner {...bannerProps} />
            </div>
          </div>
        </Gutter>
      )}
    </>
  )
}
