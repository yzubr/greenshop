import database from '@/modules/database'

export default function getProductsByIds(ids: number[]) {
  return database
    .selectFrom('products')
    .innerJoin('prices', 'productId', 'products.id')
    .leftJoin('images', 'images.id', 'products.imageId')
    .select([
      'products.id',
      'products.name',
      'images.path',
      'prices.lPrice'
    ])
    .where('products.id', 'in', ids)
    .execute()
}
