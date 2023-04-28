import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCategories } from "store/slices/categorySlice"

const HomeTopNavigation = () => {
  const categories = useSelector(state => state.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div>
      <ul>
        {categories.map(category =>
          <li key={category.id}>{category.name}</li>
        )}
      </ul>
    </div>
  )
}

export default HomeTopNavigation
