// import getCategories from '@/queries/get-categories'

// export default async function ListOfCategories() {
//   const categories = await getCategories()

//   return (
//     <>
//       <h3>Categories</h3>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>
//             <button type="button" onClick={}>{category.name}</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

import getCategories from '@/queries/get-categories'
import CategoryButton from './CategoryButton'

export default async function ListOfCategories() {
  const categories = await getCategories()

  return (
    <>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, i) => (
          i === 0
            ? (
                <li key={category.id}>
                  <CategoryButton category={category} firstElementId={category.id} />
                </li>
              )
            : (
                <li key={category.id}>
                  <CategoryButton category={category} />
                </li>
              )

        ))}
      </ul>
    </>
  )
}
