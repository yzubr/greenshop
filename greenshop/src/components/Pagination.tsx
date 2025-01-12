'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import styles from '@/app/(app)/Page.module.css'

export default function Pagination({ pagesCount }: { pagesCount: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  function generateUrl(page: number) {
    const params = new URLSearchParams(searchParams)

    if (page <= 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }

    return `${pathname}?${params.toString()}`
  }

  if (pagesCount === 1) {
    return null
  }

  return (
    <ul className={styles.pagination}>
      {currentPage > 1 && (
        <li>
          <Link href={generateUrl(currentPage - 1)}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
              <path d="M1.375 0.75C1.375 0.75 6.625 3.858 6.625 6C6.625 8.14125 1.375 11.25 1.375 11.25" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </Link>
        </li>
      )}
      {Array.from(Array(pagesCount), (_, i) => i + 1).map((el) => (
        <li className={clsx({ [styles['page-is-active']]: currentPage === el })}>
          <Link href={generateUrl(el)}          >
            {el}
          </Link>
        </li>
      ))}
      {currentPage < pagesCount && (
        <li>
          <Link href={generateUrl(currentPage + 1)}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.375 0.75C1.375 0.75 6.625 3.858 6.625 6C6.625 8.14125 1.375 11.25 1.375 11.25" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </li>
      )}
    </ul>
  )
}
