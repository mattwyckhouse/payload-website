import React, { Fragment } from 'react'

import { BackgroundGrid } from '@components/BackgroundGrid/index.js'
import { BackgroundScanline } from '@components/BackgroundScanline/index.js'
import { BlockWrapper } from '@components/BlockWrapper/index.js'
import { CMSLink } from '@components/CMSLink/index.js'
import { Gutter } from '@components/Gutter/index.js'
import { Media } from '@components/Media/index.js'
import { ArrowIcon } from '@root/icons/ArrowIcon/index.js'
import { Page } from '@root/payload-types.js'
import { Highlights } from './Highlights/index.js'

import classes from './index.module.scss'

export type HoverHighlightProps = Extract<Page['layout'][0], { blockType: 'hoverHL' }> & {
  hideBackground?: boolean
}

export const HoverHighlights: React.FC<HoverHighlightProps> = props => {
  const { fields, hideBackground } = props
  const { settings, beforeHighlights, hl, afterHighlights, link } =
    fields || {}

  return (
    <BlockWrapper
      settings={settings}
      className={classes.BlockWrapper}
      hideBackground={hideBackground}
    >
      <Gutter className={classes.gutter}>
        <div className={[classes.wrapper, 'grid'].join(' ')}>
          <Highlights
            beforeHighlights={beforeHighlights}
            afterHighlights={afterHighlights}
            button={link}
          >
            {hl &&
              Array.isArray(hl) && [
                ...hl.map((highlight, key) => {
                  const { top, bottom } = highlight.media || {}
                  return (
                    <Fragment key={key}>
                      <CMSLink className={classes.highlightText} {...highlight.link}>
                        {highlight.text}
                        <ArrowIcon className={classes.arrow} size="large" bold />
                      </CMSLink>
                      <div className={classes.highlightMediaTop}>
                        {top && typeof top !== 'number' && (
                          <Media
                            resource={top}
                            className={[classes.media, classes.mediaTop].join(' ')}
                          />
                        )}
                      </div>
                      <div className={classes.highlightMediaBottom}>
                        {bottom && typeof bottom !== 'number' && (
                          <Media
                            resource={bottom}
                            className={[classes.media, classes.mediaBottom].join(' ')}
                          />
                        )}
                      </div>
                    </Fragment>
                  )
                }),
              ]}
          </Highlights>
        </div>
      </Gutter>
      <BackgroundScanline className={classes.rightMargin} />
      <BackgroundGrid zIndex={0} />
    </BlockWrapper>
  )
}
