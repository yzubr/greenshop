'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export interface Category {
  id: number;
  name: string;
}

export default function CategoryButton({ category, firstElement }:
{ category: Category; firstElement: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentCategoryId = searchParams.get('category')
    if (!currentCategoryId) {
      const newUrl = `${pathname}?category=${firstElement}`
      window.history.replaceState({}, '', newUrl)
    }
  }, [pathname, searchParams, firstElement])

  function generateUrl(categoryId:number) {
    const params = new URLSearchParams(searchParams)
    params.set('category', categoryId.toString())

    return `${pathname}?${params.toString()}`
  }

  return (
    <Link
      href={generateUrl(category.id)}
    >
      {category.name}
    </Link>
  )
}
