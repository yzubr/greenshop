import database from '@/modules/database'

interface Options {
  category: number
  page?: number
  query?: string
  sort?: string
}

export default function getProducts(options: Options) {
  let query = database
    .selectFrom('products')
    .innerJoin('prices', 'productId', 'products.id')
    .leftJoin('images', 'images.id', 'products.imageId')
    .select([
      'products.id',
      'products.name',
      'prices.lPrice',
      'images.path',
      'images.width',
      'images.height'
    ])
    .where('products.categories', '=', options.category)
    .limit(6)

  if (options.page) {
    query = query.offset((options.page - 1) * 6)
  }

  if (options.sort === 'asc') {
    query = query.orderBy('prices.lPrice', 'asc')
  } else if (options.sort === 'desc') {
    query = query.orderBy('prices.lPrice', 'desc')
  }

  return query.execute()
}
