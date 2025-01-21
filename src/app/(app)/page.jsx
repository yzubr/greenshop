import Image from 'next/image'
import Link from 'next/link'
import imageComingSoon from '@/assets/images/imageComingSoon.png'
import ListOfCategories from '@/components/ListOfCategories'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import getProducts from '@/queries/get-products'
import getProductCount from '@/queries/get-products-count'
import BeachSpiderLily from '../../assets/images/BeachSpiderLily.png'
import style from './Page.module.css'

export default async function Page({ searchParams }) {
  const { page, query } = await searchParams
  const params = { page, query }
  const products = await getProducts(params)
  const productCount = await getProductCount(params)
  const pagesCount = Math.ceil(productCount / 6)

  return (
    <>
      <section className={style['greeting-section']}>
        <div className={style['greeting-section-text-block']}>
          <h2>Welcome to GreenShop</h2>
          <h1>
            Let’s Make a Better
            {/* */}
            <span> Planet</span>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and trendy plants.
            Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <Link href="/shop" className={style.button}>Shop now</Link>
        </div>
        <Image src={BeachSpiderLily} alt="Beach Spider Lily" placeholder="blur" width={507} height={550} />
      </section>
      <section className={style['products-section']}>
        <aside>
          <ListOfCategories />
        </aside>
        <article>
          <header>
            <ul>
              <button type="button">All Plants</button>
              <button type="button">New Arrivals</button>
              <button type="button">Sale</button>
            </ul>
            <form>
              <label htmlFor="sort-select">Sort by: </label>
              <select name="sort" id="sort-select">
                <option value="Default sorting">Default sorting</option>
                <option value="Price (lowest first)">Price (Lowest first)</option>
                <option value="Price (highest first)">Price (highest first)</option>
              </select>
            </form>
          </header>
          <ul className={style['products-container']}>
            {products.map((product) => (
              <li key={product.id} className={style.product}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
          <Pagination pagesCount={pagesCount} />
        </article>
      </section>
    </>
  )
}
