import Image from 'next/image'
import imageComingSoon from '@/assets/images/imageComingSoon.png'
import getProductById from '@/queries/get-product-by-id'
import styles from './ProductPage.module.css'

export default async function Page({ params }) {
  const { productId } = await params
  const response = await getProductById(productId)
  const product = response[0]

  return (
    <>
      <section className={styles['product-section']}>
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
            <button type="button">-</button>
            <p>1</p>
            <button type="button">+</button>
            <button type="button">Buy now</button>
            <button type="button">Add to cart</button>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z" fill="#46A358" />
              </svg>
            </button>
          </div>
        </article>
      </section>
      <section className={styles['carusel-section']}>
        <p>Здесь будет карусель (а может и не будет)</p>
      </section>
    </>
  )
}
