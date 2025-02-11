import getCategories from '@/queries/get-categories'
import CategoryButton from './CategoryButton'

export default async function ListOfCategories() {
  const categories = await getCategories()

  return (
    <>
      <h3>Categories</h3>
      <ul style={{ marginTop: '25px' }}>
        {categories.map((category) => (
          <li key={category.id} style={{ marginBottom: '25px' }}>
            <CategoryButton category={category} />
          </li>
        ))}
      </ul>
    </>
  )
}
