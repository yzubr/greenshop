import database from '@/modules/database'

export default function getProductsByIds(ids: number[]) {
  return database
    .selectFrom('products')
    .select(['id', 'name'])
    .where('id', 'in', ids)
    .execute()
}
