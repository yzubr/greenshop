import clsx from 'clsx'
import Link from 'next/link'
import getPostsInBlog from '../../queries/get-posts-in-blog'
import style from './Blog.module.css'

export default async function Page() {
  const postsInBlog = await getPostsInBlog()
  console.log(postsInBlog)

  return (
    <>
      <section>
        <p>carusel</p>
      </section>
      <section>
        <ul className={style['blog-post-container']}>
          {postsInBlog.map((post, i) => (
            <li key={post.id} className={clsx(style['grid-block'], style[`item${i + 1}`])} style={{ backgroundImage: `url(${post.path})` }}>
              <h3>{post.name}</h3>
              <p>{post.description}</p>
              <Link href={`/blog/${post.id}`}>
                Read more
              </Link>
            </li>
          ))}
        </ul>
        {/* <Pagination pagesCount={pagesCount} /> */}
      </section>
    </>
  )
}
