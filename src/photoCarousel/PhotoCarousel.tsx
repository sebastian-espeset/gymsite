import './photoCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import pic1 from '../assets/stock-photo-1.png';
import pic2 from '../assets/stock-photo-2.png';

export function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };
  return (
    <div className='photoCarousel'>
      <Slider {...settings}>

          <img className='single-carousel-img' src={pic1} />
          <img className='single-carousel-img' src={pic2} />

          <img className='single-carousel-img' src="http://placekitten.com/g/400/200" />

          <img className='single-carousel-img' src="http://placekitten.com/g/400/200" />

      </Slider>
    </div>
  )
}
