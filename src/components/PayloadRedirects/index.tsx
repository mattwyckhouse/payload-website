import type { CaseStudy, Page, Post } from '@types'
import type React from 'react'

import { getCachedDocument } from '@utilities/getDocument'
import { getCachedRedirects } from '@utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'

interface Props {
  disableNotFound?: boolean
  url: string
}

/* This component helps us with SSR based dynamic redirects */
export const PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
  const slug = url.startsWith('/') ? url : `${url}`

  const redirects = await getCachedRedirects()()

  const redirectItem = redirects.find(redirect => redirect.from === slug)

  if (redirectItem) {
    if (redirectItem.to?.url) {
      redirect(redirectItem.to.url)
    }

    let redirectUrl: string

    if (typeof redirectItem.to?.reference?.value === 'string') {
      const collection = redirectItem.to?.reference?.relationTo
      const id = redirectItem.to?.reference?.value

      const document = (await getCachedDocument(collection, id)()) as CaseStudy | Page | Post
      redirectUrl = `/${
        redirectItem.to?.reference?.relationTo === 'posts'
          ? 'blog/'
          : redirectItem.to?.reference?.relationTo === 'case-studies'
          ? 'case-studies/'
          : ''
      }${document.slug}`
    } else if (typeof redirectItem.to?.reference?.value === 'object' && redirectItem.to?.reference?.value !== null) {
      redirectUrl = `/${
        redirectItem.to?.reference?.relationTo === 'posts'
          ? 'blog/'
          : redirectItem.to?.reference?.relationTo === 'case-studies'
          ? 'case-studies/'
          : ''
      }${redirectItem.to?.reference?.value.slug}`
    } else {
      // Handle the case where value is a number or null
      console.error('Unexpected redirect value type')
      return null
    }

    if (redirectUrl) redirect(redirectUrl)
  }

  if (disableNotFound) return null
  return notFound()
}
