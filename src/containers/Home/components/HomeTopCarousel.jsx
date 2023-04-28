import 'styles/containers/home/home_top_carousel.scss'

import Carousel from "react-material-ui-carousel"
import Paper from '@mui/material/Paper';

import { useSelector } from 'react-redux';

const Item = ({ product }) => {
  return (
    <Paper>
      <h2>{product.image}</h2>
    </Paper>
  )
}

const HomeTopCarousel = () => {
  const featuredProducts = useSelector(state => state.featuredProducts)
  const promotedTitles = featuredProducts.map(p => p.title)

  return (
    <div className='home-top-carousel-wrapper'>
      <Carousel
        IndicatorIcon={promotedTitles}
      >
        {featuredProducts.map((product, i) =>
          <Item key={i} product={product} />
        )}
      </Carousel>
    </div>
  )
}

export default HomeTopCarousel
