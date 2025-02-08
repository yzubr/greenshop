import database from '@/modules/database'

export default async function getProductsCount(categoryId:number) {
  const { count } = await database
    .selectFrom('products')
    .select(({ fn }) => fn.count('id').as('count'))
    .where('products.categories', '=', categoryId)
    .executeTakeFirstOrThrow()

  return Number(count)
}
