import 'styles/containers/home/home_top_carousel.scss'

import Carousel from "react-material-ui-carousel"
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';

const Item = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
    </Paper>
  )
}

const HomeTopCarousel = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <div className='home-top-carousel-wrapper'>
      <Carousel
        IndicatorIcon={<HomeIcon />}
      >
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
        </Carousel>
    </div>
  )
}

export default HomeTopCarousel
