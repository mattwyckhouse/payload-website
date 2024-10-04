import { notFound } from 'next/navigation'

import { BackgroundGrid } from '@components/BackgroundGrid'
import { Gutter } from '@components/Gutter'
import { BlockWrapper } from '@components/BlockWrapper'
import { PartnerDirectory } from '@components/PartnerDirectory'
import { PartnerGrid } from '@components/PartnerGrid'
import { RenderBlocks } from '@components/RenderBlocks'
import { fetchFilters, fetchPartnerProgram, fetchPartners } from '@data'
import BreadcrumbsBar from '@components/Hero/BreadcrumbsBar'
import { Metadata } from 'next/types'

import classes from './index.module.scss'

export const metadata: Metadata = {
  title: 'Find a Payload Partner',
  description:
    'Connect with a Payload expert to help you build, launch, and scale your digital products.',
}

export default async function Partners() {
  const partnerProgram = await fetchPartnerProgram()

  if (!partnerProgram) {
    return notFound()
  }
  const { featuredPartners, contentBlocks } = partnerProgram

  const partners = await fetchPartners()
  const partnerList = partners.map(partner => ({
    ...partner,
    industries: partner.industries.map(industry => 
      typeof industry === 'number' ? industry : { id: industry.id, value: industry.value }
    ),
    specialties: partner.specialties.map(specialty => 
      typeof specialty === 'number' ? specialty : { id: specialty.id, value: specialty.value }
    ),
    regions: partner.regions.map(region => 
      typeof region === 'number' ? region : { id: region.id, value: region.value }
    ),
    budgets: partner.budgets.map(budget => 
      typeof budget === 'number' ? budget : { id: budget.id, value: budget.value }
    ),
  }))

  const filters = await fetchFilters()

  const filterOptions = {
    industries: filters.industries.filter(industry => {
      return partnerList.some(partner => partner.industries.includes(industry.id))
    }),
    specialties: filters.specialties.filter(specialty => {
      return partnerList.some(partner => partner.specialties.includes(specialty.id))
    }),
    regions: filters.regions.filter(region => {
      return partnerList.some(partner => partner.regions.includes(region.id))
    }),
    budgets: filters.budgets.filter(budget => {
      return partnerList.some(partner => partner.budgets.includes(budget.id))
    }),
  }

  return (
    <BlockWrapper settings={{}}>
      <BreadcrumbsBar
        breadcrumbs={[
          {
            label: 'Agency Partners',
          },
        ]}
        links={[
          {
            url: '/partners',
            label: 'Become a Partner',
          },
        ]}
      />
      <Gutter className={[classes.hero, 'grid'].join(' ')}>
        <div className={[classes.featuredPartnersWrapper, 'cols-16'].join(' ')}>
          <div className={[classes.featuredPartnersHeader, 'cols-16 grid'].join(' ')}>
            <h2 className="cols-12 cols-m-8">Featured Partners</h2>
            <p className="cols-4 start-13 cols-m-8 start-m-1">{featuredPartners.description}</p>
          </div>
          <PartnerGrid partners={featuredPartners.partners} featured />
        </div>
      </Gutter>
      {contentBlocks?.beforeDirectory && <RenderBlocks blocks={contentBlocks?.beforeDirectory} />}
      <PartnerDirectory partnerList={partnerList} filterOptions={filterOptions} />
      {contentBlocks?.afterDirectory && <RenderBlocks blocks={contentBlocks?.afterDirectory} />}
      <BackgroundGrid />
    </BlockWrapper>
  )
}
