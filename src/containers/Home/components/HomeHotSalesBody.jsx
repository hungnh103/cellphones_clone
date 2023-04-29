import 'styles/containers/home/home_hot_sales_body.scss'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHotSaleProducts } from "store/slices/productSlice";

const HomeHotSalesBody = () => {
  const hotSaleProducts = useSelector(state => state.products.hot_sales)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHotSaleProducts())
  }, [dispatch])

  return (
    <div className="home-hot-sales-body-wrapper">
      {hotSaleProducts.map(product => (
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

export default HomeHotSalesBody
