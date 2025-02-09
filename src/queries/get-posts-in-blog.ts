import database from '@/modules/database'

export default function getPostsInBlog() {
  return database
    .selectFrom('blog')
    .leftJoin('images', 'images.id', 'blog.imageId')
    .select(['blog.id', 'blog.name', 'blog.description', 'images.path'])
    .limit(4)
    .execute()
}
