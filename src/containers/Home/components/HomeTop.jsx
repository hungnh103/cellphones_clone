import 'styles/containers/home/home_top.scss'

import HomeTopNavigation from "./HomeTopNavigation"
import HomeTopCarousel from "./HomeTopCarousel"
import HomeTopPromotion from "./HomeTopPromotion"

const HomeTop = () => {
  return (
    <div className="home-top-wrapper">
      <HomeTopNavigation />
      <HomeTopCarousel />
      <HomeTopPromotion />
    </div>
  )
}

export default HomeTop
