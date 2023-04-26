import HomeTop from "./components/HomeTop"
import HomeBanner from "./components/HomeBanner"
import HomeHotSales from "./components/HomeHotSales"
import HomeCategories from "./components/HomeCategories"

const HomeContainer = () => {
  return (
    <div>
      <HomeTop />
      <HomeBanner />
      <HomeHotSales />
      <HomeCategories />
    </div>
  )
}

export default HomeContainer
