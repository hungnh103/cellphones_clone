import 'styles/containers/home/home_top_carousel.scss'

import Carousel from "react-material-ui-carousel"
import Paper from '@mui/material/Paper';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllFeaturedProducts } from 'store/slices/featuredProductSlice';

const Item = ({ product }) => {
  return (
    <Paper>
      <img src={product.image} alt="promotion" />
    </Paper>
  )
}

const HomeTopCarousel = () => {
  const featuredProducts = useSelector(state => state.featuredProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllFeaturedProducts())
  }, [dispatch])

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
