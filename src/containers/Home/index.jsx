import HomeTop from "./components/HomeTop"
import HomeBanner from "./components/HomeBanner"
import HomeHotSales from "./components/HomeHotSales"
import HomeProducts from "./components/HomeProducts"
import HomeFooter from "./components/HomeFooter"

const HomeContainer = () => {
  return (
    <div>
      <HomeTop />
      <HomeBanner />
      <HomeHotSales />
      <HomeProducts />
      <HomeFooter />
    </div>
  )
}

export default HomeContainer
