import * as React from 'react'
import Link from 'next/link'

import { BackgroundGrid } from '@components/BackgroundGrid/index.js'
import { BackgroundScanline } from '@components/BackgroundScanline/index.js'
import { BlockSpacing } from '@components/BlockSpacing/index.js'
import { BlockWrapper, PaddingProps } from '@components/BlockWrapper/index.js'
import { Gutter } from '@components/Gutter/index.js'
import { Media } from '@components/Media/index.js'
import { PixelBackground } from '@components/PixelBackground/index.js'
import { RichText } from '@components/RichText/index.js'
import { Page } from '@root/payload-types.js'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'csCards' }> & {
  padding?: PaddingProps
  hideBackground?: boolean
}

export const CaseStudyCards: React.FC<Props> = props => {
  const { fields, padding, hideBackground } = props

  if (fields?.cards && fields?.cards?.length > 0) {
    return (
      <BlockWrapper
        className={classes.caseStudyCards}
        settings={fields.settings}
        hideBackground={hideBackground}
        padding={padding}
      >
        <BackgroundGrid />
        <Gutter className={classes.gutter}>
          <BackgroundScanline className={classes.scanline} />
          {fields?.cards?.length > 0 && (
            <div className={classes.cards}>
              {fields.cards.map((card, i) => {
                if (typeof card.caseStudy === 'object' && card.caseStudy !== null) {
                  return (
                    <Link
                      href={`/case-studies/${card.caseStudy.slug}`}
                      key={i}
                      className={classes.card}
                      prefetch={false}
                    >
                      <RichText className={classes.content} content={card.richText} />
                      <div className={classes.media}>
                        {typeof card.caseStudy.featuredImage !== 'number' && (
                          <Media resource={card.caseStudy.featuredImage} fill />
                        )}
                      </div>
                    </Link>
                  )
                }

                return null
              })}
            </div>
          )}
        </Gutter>
      </BlockWrapper>
    )
  }

  return null
}
