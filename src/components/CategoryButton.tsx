'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export interface Category {
  id: number;
  name: string;
}

export default function CategoryButton({ category }: { category: Category }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategoryId = searchParams.get('category')

  useEffect(() => {
    if (!currentCategoryId) {
      router.replace(`${pathname}?category=1`)
    }
  }, [currentCategoryId, pathname, router])

  function generateUrl(categoryId: number) {
    const params = new URLSearchParams(searchParams)
    params.set('category', categoryId.toString())

    return `${pathname}?${params.toString()}`
  }

  const isActive = currentCategoryId === category.id.toString()

  return (
    <Link
      href={generateUrl(category.id)}
      style={{
        color: isActive ? 'rgba(70, 163, 88, 1)' : 'inherit',
        fontWeight: isActive ? 'bold' : 'normal'
      }}
    >
      {category.name}
    </Link>
  )
}
