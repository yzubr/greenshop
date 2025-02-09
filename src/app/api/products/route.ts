import type { NextRequest } from 'next/server'
import getProductsByIds from '@/queries/get-products-by-ids'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const productIds = searchParams.get('ids')

  if (!productIds) {
    return Response.json([])
  }

  const products = await getProductsByIds(productIds.split(',').map(Number))

  return Response.json(products)
}
