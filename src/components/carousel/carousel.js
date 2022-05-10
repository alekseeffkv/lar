import './carousel.scss';

import Slider from 'react-slick';

import Arrow from '../arrow';

import preview1 from './images/preview1.jpg';
import preview2 from './images/preview2.jpg';
import preview3 from './images/preview3.jpg';
import preview4 from './images/preview4.jpg';
import preview5 from './images/preview5.jpg';
import preview6 from './images/preview6.jpg';
import preview7 from './images/preview7.jpg';
import preview8 from './images/preview8.jpg';
import preview9 from './images/preview9.jpg';

const Carousel = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: true,
    dots: false,
    prevArrow: <Arrow prev />,
    nextArrow: <Arrow next />,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel__item">
          <img src={preview1} alt="preview1" />
        </div>
        <div className="carousel__item">
          <img src={preview2} alt="preview2" />
        </div>
        <div className="carousel__item">
          <img src={preview3} alt="preview3" />
        </div>
        <div className="carousel__item">
          <img src={preview4} alt="preview4" />
        </div>
        <div className="carousel__item">
          <img src={preview5} alt="preview5" />
        </div>
        <div className="carousel__item">
          <img src={preview6} alt="preview6" />
        </div>
        <div className="carousel__item">
          <img src={preview7} alt="preview7" />
        </div>
        <div className="carousel__item">
          <img src={preview8} alt="preview8" />
        </div>
        <div className="carousel__item">
          <img src={preview9} alt="preview9" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
