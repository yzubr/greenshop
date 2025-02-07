import { CamelCasePlugin, type GeneratedAlways, Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

export interface CategoriesTable {
  id: GeneratedAlways<number>
  name: string
  createdAt: GeneratedAlways<Date>
}

export interface ImagesTable {
  id: GeneratedAlways<number>
  height: number
  path: string
  width: number
  createdAt: GeneratedAlways<Date>
}

export interface ProductsTable {
  id: GeneratedAlways<number>
  imageId: number
  categories: number
  descriptionFull: string
  descriptionShort: string
  name: string
  createdAt: GeneratedAlways<Date>
}

export interface PricesTable {
  id: GeneratedAlways<number>
  productId: number
  lPrice: number
  createdAt: GeneratedAlways<Date>
}

export interface Database {
  categories: CategoriesTable
  images: ImagesTable
  prices: PricesTable
  products: ProductsTable
}

const database = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_CONNECTION_STRING
    })
  }),
  plugins: [
    new CamelCasePlugin({
      maintainNestedObjectKeys: true
    })
  ]
})

export default database
