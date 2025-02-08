import Image from 'next/image'
import imageComingSoon from '@/assets/images/imageComingSoon.png'
import ProductActions from '@/components/ProductActions'
import getProductById from '@/queries/get-product-by-id'
import styles from './ProductPage.module.css'

export default async function Page({ params }) {
  const { productId } = await params
  const response = await getProductById(productId)
  const product = response[0]
  console.log(productId)

  return (
    <>
      <section className={styles['product-section']}>
        <div className={styles['product-description']}>
          <article>
            {product.path === null
              ? (
                  <Image
                    src={imageComingSoon}
                    alt="Image coming soon"
                    priority
                    unoptimized
                  />
                )
              : (
                  <Image
                    src={product.path}
                    alt={product.name}
                    width={product.width}
                    height={product.height}
                    priority
                    unoptimized
                  />
                )}
          </article>
          <article className={styles['product-details-block']}>
            <h1>{product.name}</h1>
            <h2>${product.lPrice}</h2>
            <h3>Short Description:</h3>
            <p>{product.descriptionShort}</p>
            <div className={styles['button-container']}>
              <ProductActions productId={productId} />
            </div>
          </article>
        </div>
      </section>
      <section className={styles['carusel-section']}>
        <p>Здесь будет карусель (а может и не будет)</p>
      </section>
    </>
  )
}
