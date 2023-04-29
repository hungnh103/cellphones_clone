import 'styles/containers/home/home_hot_sales.scss'

import HomeHotSalesTop from "./HomeHotSalesTop"
import HomeHotSalesBody from "./HomeHotSalesBody"

const HomeHotSales = () => {
  return (
    <div className="home-hot-sales-wrapper">
      <HomeHotSalesTop />
      <HomeHotSalesBody />
    </div>
  )
}

export default HomeHotSales
