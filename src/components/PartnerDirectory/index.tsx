'use client'

import { useEffect, useState } from 'react'

import { BackgroundGrid } from '@components/BackgroundGrid'
import { Gutter } from '@components/Gutter'
import { PartnerGrid } from '@components/PartnerGrid'
import { ChevronDownIcon } from '@root/icons/ChevronDownIcon'
import { CloseIcon } from '@root/icons/CloseIcon'
import type { Budget, Industry, Partner, Region, Specialty } from '@root/payload-types'

import classes from './index.module.scss'
import { BlockWrapper } from '@components/BlockWrapper'

type FilterablePartner = Omit<Partner, 'industries' | 'specialties' | 'regions' | 'budgets'> & {
  industries: (number | { id: number; value: string })[]
  specialties: (number | { id: number; value: string })[]
  regions: (number | { id: number; value: string })[]
  budgets: (number | { id: number; value: string })[]
}

export const PartnerDirectory: React.FC<{
  partnerList: FilterablePartner[]
  filterOptions: {
    industries: Industry[]
    specialties: Specialty[]
    regions: Region[]
    budgets: Budget[]
  }
}> = props => {
  const { partnerList, filterOptions } = props

  const [filters, setFilters] = useState<{
    industries: string[]
    specialties: string[]
    regions: string[]
    budgets: string[]
  }>({
    industries: [],
    specialties: [],
    regions: [],
    budgets: [],
  })

  const [openFilters, setOpenFilters] = useState<boolean>(false)

  const [filteredPartners, setFilteredPartners] = useState<FilterablePartner[]>(partnerList)

  const [validFilters, setValidFilters] = useState<{
    industries: string[]
    specialties: string[]
    regions: string[]
    budgets: string[]
  }>({
    industries: [],
    specialties: [],
    regions: [],
    budgets: [],
  })

  useEffect(() => {
    setFilteredPartners(
      partnerList.filter(partner => {
        const matchesFilter = (filterArray: string[], partnerArray: (number | { id: number; value: string })[]) =>
          filterArray.length === 0 || filterArray.every(filter =>
            partnerArray.some(item => (typeof item === 'number' ? item.toString() : item.value) === filter)
          );

        return (
          matchesFilter(filters.industries, partner.industries) &&
          matchesFilter(filters.specialties, partner.specialties) &&
          matchesFilter(filters.regions, partner.regions) &&
          matchesFilter(filters.budgets, partner.budgets)
        );
      }),
    )
  }, [filters, partnerList])

  useEffect(() => {
    let filterSet: {
      industries: string[]
      specialties: string[]
      regions: string[]
      budgets: string[]
    } = {
      industries: [],
      specialties: [],
      regions: [],
      budgets: [],
    }

    filteredPartners.forEach(partner => {
      filterSet.industries.push(...partner.industries.map(i => typeof i === 'object' ? i.value : String(i)))
      filterSet.specialties.push(...partner.specialties.map(s => typeof s === 'object' ? s.value : String(s)))
      filterSet.regions.push(...partner.regions.map(r => typeof r === 'object' ? r.value : String(r)))
      filterSet.budgets.push(...partner.budgets.map(b => typeof b === 'object' ? b.value : String(b)))
    })

    filterSet.industries = Array.from(new Set(filterSet.industries))
    filterSet.specialties = Array.from(new Set(filterSet.specialties))
    filterSet.regions = Array.from(new Set(filterSet.regions))
    filterSet.budgets = Array.from(new Set(filterSet.budgets))

    setValidFilters(filterSet)
  }, [filteredPartners])

  const hasFilters = Object.values(filters).some(filter => filter.length > 0)

  const handleFilters = (
    group: 'industries' | 'specialties' | 'regions' | 'budgets',
    filter: string,
    checked: boolean,
  ) => {
    setFilters(prev => {
      return {
        ...prev,
        [group]: checked ? [...prev[group], filter] : prev[group].filter(f => f !== filter),
      }
    })
  }

  const handleReset = () => {
    setFilters({
      industries: [],
      specialties: [],
      regions: [],
      budgets: [],
    })
  }

  const toggleFilterGroup = () => {
    setOpenFilters(!openFilters)
  }

  return (
    <BlockWrapper settings={{ theme: 'dark' }}>
      <Gutter className={['grid', classes.partnerDirectory].join(' ')}>
        <div className={['cols-16', classes.directoryHeader].join(' ')}>
          <h2>All Partners</h2>
          <h4>
            {filteredPartners.length} result{filteredPartners.length === 1 ? '' : 's'}
          </h4>
        </div>
        <div className={['cols-4 cols-m-8', classes.sidebar].join(' ')}>
          <div className={classes.filterHeader}>
            <button
              onClick={() => toggleFilterGroup()}
              className={classes.filterToggle}
              aria-label="Show Filters"
            >
              <CloseIcon className={openFilters ? classes.openToggle : ''} />
            </button>
            <span>Filters</span>
            <button onClick={() => handleReset()} disabled={!hasFilters}>
              Clear
            </button>
          </div>
          <div
            className={[classes.filterWrapper, openFilters ? classes.openFilters : '']
              .filter(Boolean)
              .join(' ')}
          >
            <FilterGroup
              group={'industries'}
              filters={filters['industries']}
              handleFilters={handleFilters}
              options={filterOptions['industries']}
              validOptions={validFilters.industries}
            />
            <FilterGroup
              group={'specialties'}
              filters={filters['specialties']}
              handleFilters={handleFilters}
              options={filterOptions['specialties']}
              validOptions={validFilters.specialties}
            />
            <FilterGroup
              group={'regions'}
              filters={filters['regions']}
              handleFilters={handleFilters}
              options={filterOptions['regions']}
              validOptions={validFilters.regions}
            />
            <FilterGroup
              group={'budgets'}
              filters={filters['budgets']}
              handleFilters={handleFilters}
              options={filterOptions['budgets']}
              validOptions={validFilters.budgets}
            />
          </div>
        </div>
        <div className="cols-12">
          <PartnerGrid
            partners={filteredPartners.map(partner => ({
              ...partner,
              industries: partner.industries.map(i => (typeof i === 'number' ? i : i.id)),
              specialties: partner.specialties.map(s => (typeof s === 'number' ? s : s.id)),
              regions: partner.regions.map(r => (typeof r === 'number' ? r : r.id)),
              budgets: partner.budgets.map(b => (typeof b === 'number' ? b : b.id)),
            }))}
          />
        </div>
      </Gutter>
      <BackgroundGrid zIndex={0} />
    </BlockWrapper>
  )
}

const FilterGroup: React.FC<{
  group: 'industries' | 'specialties' | 'regions' | 'budgets'
  filters: string[]
  options: (Industry | Specialty | Region | Budget)[]
  validOptions?: string[]
  handleFilters: (
    group: 'industries' | 'specialties' | 'regions' | 'budgets',
    filter: string,
    checked: boolean,
  ) => void
}> = props => {
  const { group, filters, options, validOptions, handleFilters } = props

  const [open, setOpen] = useState(true)

  return (
    <div className={[classes.filterGroup, open ? classes.open : ''].filter(Boolean).join(' ')}>
      <button
        className={classes.filterGroupHeader}
        onClick={() => {
          setOpen(!open)
        }}
      >
        {group.charAt(0).toUpperCase() + group.slice(1) + ' '}
        {filters.length > 0 && <div className={classes.pill}>{filters.length}</div>}
        <ChevronDownIcon size="small" className={classes.chevron} />
      </button>
      <div className={classes.checkboxes}>
        {options
          .sort((a, b) => a.value.localeCompare(b.value))
          .map(option => (
            <label key={option.id}>
              <input
                type="checkbox"
                name={option.value}
                onChange={e => handleFilters(group, option.value, e.target.checked)}
                checked={filters.includes(option.value)}
                disabled={validOptions?.includes(option.value) ? false : true}
              />
              {option.name}
            </label>
          ))}
      </div>
    </div>
  )
}
