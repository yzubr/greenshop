import database from '@/modules/database'

export default function getProductInCartById(id: number) {
  return database
    .selectFrom('products')
    .innerJoin('prices', 'productId', 'products.id')
    .leftJoin('images', 'images.id', 'products.imageId')
    .select([
      'products.id',
      'products.name',
      'prices.lPrice',
      'images.path'
    ])
    .where('products.id', '=', id)
    .execute()
}
