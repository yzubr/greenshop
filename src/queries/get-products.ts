import database from '@/modules/database'

interface Options {
  page?: number
  query?: string
}

export default function getProducts(options: Options = {}) {
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
    .limit(6)

  if (options.page) {
    query = query.offset((options.page - 1) * 6)
  }

  return query.execute()
}
