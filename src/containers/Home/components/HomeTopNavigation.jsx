import { useSelector } from "react-redux"

const HomeTopNavigation = () => {
  const categories = useSelector(state => state.categories)

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
