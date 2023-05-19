import './photoCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import pic1 from '../assets/stock-photo-1.png';

export function PhotoCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true
  };
  return (
    <div className='photoCarousel'>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={pic1} />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    </div>
  )
}
