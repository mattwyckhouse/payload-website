import { PartnerCard } from '@components/cards/PartnerCard'
import { Partner } from '@root/payload-types'

import classes from './index.module.scss'

type PartnerGridProps = {
  partners: (Partner | number)[]
  featured?: boolean
}

export const PartnerGrid = (props: PartnerGridProps) => {
  const { partners, featured } = props
  return (
    <div className={classes.PartnerGridWrap}>
      {partners.map(partner => {
        return (
          typeof partner !== 'number' && (
            <PartnerCard {...partner} key={`${partner.id}_${featured ? '_featured' : ''}`} />
          )
        )
      })}
    </div>
  )
}
