import './photoCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
            <img src="https://images.dickssportinggoods.com/marketing/FIT_0472_SCP_HomeGymsSEO_07-17-2021_Trending1_HomeGym0713160855.jpg" />
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
