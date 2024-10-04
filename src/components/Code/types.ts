import type { Page } from '@root/payload-types.js'

type CodeFeatureBlock = Extract<Page['layout'][0], { blockType: 'codeFt' }>

type CodeBlips = NonNullable<CodeFeatureBlock['fields']['ct']>[number]['blips']

export type CodeBlip = NonNullable<CodeBlips>[number]

export interface Props {
  className?: string
  title?: string
  children: string
  codeBlips?: CodeBlips
  disableMinHeight?: boolean
  showLineNumbers?: boolean
  parentClassName?: string
}
