import database from '@/modules/database'

export default function getProducts(id: number) {
  return database
    .selectFrom('products')
    .innerJoin('prices', 'productId', 'products.id')
    .leftJoin('images', 'images.id', 'products.imageId')
    .select([
      'products.id',
      'products.name',
      'products.descriptionShort',
      'products.descriptionFull',
      'prices.lPrice',
      'images.path',
      'images.width',
      'images.height'
    ])
    .where('productId', '=', id)
    .execute()
}
