'use client'

import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function ProductSortMenu() {
  const router = useRouter()
  const [sortValue, setSortValue] = useState('def')
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function generateUrl(value) {
    const params = new URLSearchParams(searchParams)
    params.set('sort', value.toString())

    return `${pathname}?${params.toString()}`
  }

  function handleSortChange(value) {
    const newUrl = generateUrl(value)
    setSortValue(value)

    return router.push(newUrl, { scroll: false })
  }

  return (
    <form>
      <select
        name="sort"
        id="sort-select"
        value={sortValue}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="def">Default sorting</option>
        <option value="asc">Price (Lowest first)</option>
        <option value="desc">Price (Highest first)</option>
      </select>
    </form>
  )
}
