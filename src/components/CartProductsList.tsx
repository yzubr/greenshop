import useSWR from 'swr'
import fetcher from '@/modules/fetcher'

interface Product {
  id: number
  name: string
}

export default function CartProductsList({ products }: { products: Map<number, number> }) {
  const productIds = [...products.keys()].join(',')
  const { data, error, isLoading } = useSWR<Product[], unknown>(`/api/products?ids=${productIds}`, fetcher)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error :(</p>
  }

  if (!data?.length) {
    return <p>No products found</p>
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {product.name} - {products.get(product.id)}
        </li>
      ))}
    </ul>
  )
}
