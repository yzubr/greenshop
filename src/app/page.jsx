import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel/Carousel'
import ListOfCategories from '@/components/ListOfCategories'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import ProductSortMenu from '@/components/ProductSortMenu'
import getPostsInBlog from '@/queries/get-posts-in-blog'
import getProducts from '@/queries/get-products'
import getProductCount from '@/queries/get-products-count'
import style from './Page.module.css'

export default async function Page({ searchParams }) {
  const { category, page, query, sort } = await searchParams
  console.log({ category, page, query })
  const params = { category, page, query, sort }
  const products = await getProducts(params)
  console.log(products)
  const postsInBlog = await getPostsInBlog()
  const productCount = await getProductCount(category)
  const pagesCount = Math.ceil(productCount / 6)

  return (
    <>
      <section className={style['greeting-section']}>
        <Carousel />
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
            <ProductSortMenu />
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
      <section className={style['link-to-blog-section']}>
        <h2>Our Blog Posts</h2>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        <ul className={style['post-in-blog-container']}>
          {postsInBlog.map((post) => (
            <li key={post.id} className={style['post-in-blog']}>
              <Image
                src={post.path}
                alt={post.name}
                width={268}
                height={198}
                priority
                unoptimized
              />
              <div>
                <h3>{post.name}</h3>
                <p>
                  {post.description}
                </p>
                <Link href={`/blog/${post.id}`}>
                  Read more
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
