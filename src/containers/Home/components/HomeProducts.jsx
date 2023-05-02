import 'styles/containers/home/home_products.scss'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "store/slices/productSlice"

const HomeProducts = () => {
  const products = useSelector(state => state.products.list)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="home-products-wrapper">
      {products.map(product => (
        <div key={product.id} className='product-container'>
          <div>
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div>{product.name}</div>
          <div>{product.sale_price}</div>
          <div>{product.listed_price}</div>
          <div>{product.avg_rate}</div>
        </div>
      ))}
    </div>
  )
}

export default HomeProducts
