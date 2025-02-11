'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Slide1, Slide2, Slide3 } from '@/assets/slides/slidesForGreetinCarouselInHomePage'
import styles from './Carousel.module.css'

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [Slide1, Slide2, Slide3]

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timerId)
  }, [slides.length])

  return (
    <div className={styles.carousel}>
      {slides.map((SlideComponent, index) => (
        // eslint-disable-next-line @eslint-react/no-array-index-key
        <div key={index} className={clsx(styles.slide, { [styles.active]: activeIndex === index })}>
          <SlideComponent />
        </div>
      ))}
    </div>
  )
}
