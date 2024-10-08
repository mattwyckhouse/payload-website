'use client'
import React, { createRef, Fragment, useEffect, useRef, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleGroup,
  CollapsibleToggler,
} from '@faceless-ui/collapsibles'
import Image from 'next/image'

import { BackgroundScanline } from '@components/BackgroundScanline/index.js'
import { CMSLink } from '@components/CMSLink/index.js'
import { Media } from '@components/Media/index.js'
import { RichText } from '@components/RichText/index.js'
import SplitAnimate from '@components/SplitAnimate/index.js'
import { ArrowRightIcon } from '@root/icons/ArrowRightIcon/index.js'
import { ChevronDownIcon } from '@root/icons/ChevronDownIcon/index.js'
import { CrosshairIcon } from '@root/icons/CrosshairIcon/index.js'
import { Page } from '@root/payload-types.js'

import classes from './index.module.scss'

export type MediaContentAccordionProps = Extract<
  Page['layout'][0],
  { blockType: 'mAccordian' }
> & {
  className?: string
}

export const DesktopMediaContentAccordion: React.FC<MediaContentAccordionProps> = ({
  fields,
  className,
}) => {
  const { alignment, leader, heading, acc } = fields || {}

  const mediaRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([])
  const [containerHeight, setContainerHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const hasAccordion = Array.isArray(acc) && acc.length > 0
  const [activeAccordion, setActiveAccordion] = useState<number>(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(index)
  }

  if (acc && acc.length > 0 && mediaRefs.current.length !== acc.length) {
    mediaRefs.current = acc.map((_, i) => mediaRefs.current[i] || createRef())
  }

  useEffect(() => {
    const updateContainerHeight = () => {
      const activeMediaRef = mediaRefs.current[activeAccordion]
      if (activeMediaRef && activeMediaRef.current) {
        const activeMediaHeight = activeMediaRef.current.offsetHeight
        setContainerHeight(activeMediaHeight)
      }
    }

    const updateContentWidth = () => {
      const newContentWidth = contentRef.current ? contentRef.current.offsetWidth : 0
      setContentWidth(newContentWidth)
    }

    updateContainerHeight()
    updateContentWidth()

    const resizeObserver = new ResizeObserver(entries => {
      updateContainerHeight()
      updateContentWidth()
    })

    const activeMediaRef = mediaRefs.current[activeAccordion]
    if (activeMediaRef && activeMediaRef.current) {
      resizeObserver.observe(activeMediaRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [activeAccordion])

  const rightPositionClassMap = {
    normal: 'start-9 cols-8 start-m-1 cols-m-8',
    inset: 'start-10 cols-6 start-m-1 cols-m-8',
    wide: 'start-7 cols-12 start-m-1 cols-m-8',
  }

  const leftPositionClassMap = {
    normal: 'start-1 cols-8 start-m-1 cols-m-8',
    inset: 'start-2 cols-6 start-m-1 cols-m-8',
    wide: 'start-1 cols-12 start-m-1 cols-m-8',
  }

  return (
    <div
      className={[classes.desktopAccordionWrapper, 'grid', className && className]
        .filter(Boolean)
        .join(' ')}
    >
      {alignment === 'mediaContent' ? (
        <Fragment>
          {hasAccordion &&
            acc.map((item, index) => (
              <Fragment key={item.id || index}>
                {index === activeAccordion && (
                  <>
                    {item.bg === 'gradient' && (
                      <div
                        className={[
                          classes.gradientDesktopWrapper,
                          'start-1 cols-8 start-m-1 cols-m-8',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        style={{ height: `calc(${containerHeight}px + 8rem)` }}
                      >
                        <Image
                          alt=""
                          className={classes.gradientBg}
                          width={1920}
                          height={946}
                          src={`/images/gradients/1.jpg`}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopTwo].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomTwo].filter(Boolean).join(' ')}
                        />
                      </div>
                    )}
                    {item.bg === 'scanlines' && (
                      <div
                        className={[
                          classes.scanlineDesktopWrapper,
                          'start-1 cols-8 start-m-1 cols-m-8',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        style={{ height: `calc(${containerHeight}px + 8rem)` }}
                      >
                        <BackgroundScanline
                          className={[classes.scanlineDesktop].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopTwo].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomTwo].filter(Boolean).join(' ')}
                        />
                      </div>
                    )}
                    {item.bg === 'none' && (
                      <div
                        className={[
                          classes.transparentDesktopWrapper,
                          'start-1 cols-8 start-m-1 cols-m-8',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        style={{ height: `calc(${containerHeight}px + 8rem)` }}
                      >
                        <div className={classes.transparentBg} />
                      </div>
                    )}
                  </>
                )}
                <div
                  ref={mediaRefs.current[index]}
                  className={[
                    classes.mediaDesktopContainer,
                    leftPositionClassMap[item.pos as keyof typeof leftPositionClassMap],
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{
                    opacity: index === activeAccordion ? 1 : 0,
                    width: '100%',
                    left: item.pos === 'wide' ? `calc(-1 * ${contentWidth}px / 2)` : '0px',
                  }}
                >
                  {typeof item.media === 'object' && item.media !== null && (
                    <Media resource={item.media} />
                  )}
                </div>
              </Fragment>
            ))}
          <div ref={contentRef} className={['cols-4 start-13 cols-m-8'].filter(Boolean).join(' ')}>
            <div className={[classes.introWrapper].filter(Boolean).join(' ')}>
              {leader && <div className={classes.leader}>{leader}</div>}
              {heading && (
                <h3 className={classes.heading}>
                  <SplitAnimate text={heading} />
                </h3>
              )}
            </div>
            <div>
              <CollapsibleGroup allowMultiple={false} transTime={500} transCurve="ease-in-out">
                {hasAccordion &&
                  acc.map((item, index) => (
                    <div
                      key={item.id || index}
                      className={[
                        classes.collapsibleWrapper,
                        activeAccordion === index ? classes.activeLeftBorder : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <Collapsible
                        onToggle={() => toggleAccordion(index)}
                        open={activeAccordion === index}
                      >
                        <CollapsibleToggler
                          className={[
                            classes.collapsibleToggler,
                            activeAccordion === index ? classes.activeItem : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onClick={() => toggleAccordion(index)}
                        >
                          <div className={classes.togglerTitle}>{item.mediaLabel}</div>
                          <ChevronDownIcon
                            className={[
                              classes.chevronDownIcon,
                              activeAccordion === index ? classes.rotateChevron : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          />
                        </CollapsibleToggler>
                        <CollapsibleContent className={classes.collapsibleContent}>
                          <div className={classes.contentWrapper}>
                            <RichText
                              className={classes.mediaDescription}
                              content={item.mediaDescription}
                            />
                            {item.enableLink && item.link && (
                              <CMSLink className={classes.link} {...item.link}>
                                <ArrowRightIcon className={classes.arrowIcon} />
                              </CMSLink>
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  ))}
              </CollapsibleGroup>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div ref={contentRef} className={['cols-4 start-1 cols-m-8'].filter(Boolean).join(' ')}>
            <div className={[classes.introWrapper].filter(Boolean).join(' ')}>
              {leader && <div className={classes.leader}>{leader}</div>}
              {heading && (
                <h3 className={classes.heading}>
                  <SplitAnimate text={heading} />
                </h3>
              )}
            </div>
            <div>
              <CollapsibleGroup allowMultiple={false} transTime={500} transCurve="ease-in-out">
                {hasAccordion &&
                  acc.map((item, index) => (
                    <div
                      key={item.id || index}
                      className={[
                        classes.collapsibleWrapper,
                        activeAccordion === index ? classes.activeLeftBorder : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <Collapsible
                        onToggle={() => toggleAccordion(index)}
                        open={activeAccordion === index}
                      >
                        <CollapsibleToggler
                          className={[
                            classes.collapsibleToggler,
                            activeAccordion === index ? classes.activeItem : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onClick={() => toggleAccordion(index)}
                        >
                          <div className={classes.togglerTitle}>{item.mediaLabel}</div>
                          <ChevronDownIcon
                            className={[
                              classes.chevronDownIcon,
                              activeAccordion === index ? classes.rotateChevron : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          />
                        </CollapsibleToggler>
                        <CollapsibleContent className={classes.collapsibleContent}>
                          <div className={classes.contentWrapper}>
                            <RichText
                              className={classes.mediaDescription}
                              content={item.mediaDescription}
                            />
                            {item.enableLink && item.link && (
                              <CMSLink className={classes.link} {...item.link}>
                                <ArrowRightIcon className={classes.arrowIcon} />
                              </CMSLink>
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  ))}
              </CollapsibleGroup>
            </div>
          </div>
          {hasAccordion &&
            acc.map((item, index) => (
              <Fragment key={item.id || index}>
                {index === activeAccordion && (
                  <>
                    {item.bg === 'gradient' && (
                      <div
                        className={[
                          classes.gradientDesktopWrapper,
                          'start-9 cols-8 start-m-1 cols-m-8',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        style={{ height: `calc(${containerHeight}px + 8rem)` }}
                      >
                        <Image
                          alt=""
                          className={classes.gradientBg}
                          width={1920}
                          height={946}
                          src={`/images/gradients/1.jpg`}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopTwo].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomTwo].filter(Boolean).join(' ')}
                        />
                      </div>
                    )}
                    {item.bg === 'scanlines' && (
                      <div
                        className={[
                          classes.scanlineDesktopWrapper,
                          'start-9 cols-8 start-m-1 cols-m-8',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        style={{ height: `calc(${containerHeight}px + 8rem)` }}
                      >
                        <BackgroundScanline
                          className={[classes.scanlineDesktop].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairTopTwo].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomOne].filter(Boolean).join(' ')}
                        />
                        <CrosshairIcon
                          className={[classes.crosshairBottomTwo].filter(Boolean).join(' ')}
                        />
                      </div>
                    )}
                    {item.bg === 'none' && (
                      <div
                        className={[
                          classes.transparentDesktopWrapper,
                          'start-9 cols-8 start-m-1 cols-m-8',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        style={{ height: `calc(${containerHeight}px + 8rem)` }}
                      >
                        <div className={classes.transparentBg} />
                      </div>
                    )}
                  </>
                )}
                <div
                  ref={mediaRefs.current[index]}
                  className={[
                    classes.mediaDesktopContainer,
                    rightPositionClassMap[item.pos as keyof typeof rightPositionClassMap],
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{
                    opacity: index === activeAccordion ? 1 : 0,
                    width: item.pos === 'wide' ? `calc(100% + ${contentWidth}px / 2)` : '100%',
                  }}
                >
                  {typeof item.media === 'object' && item.media !== null && (
                    <Media resource={item.media} />
                  )}
                </div>
              </Fragment>
            ))}
        </Fragment>
      )}
    </div>
  )
}
