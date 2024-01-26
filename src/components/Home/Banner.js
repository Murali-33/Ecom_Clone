import React from 'react';
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from '../../assets/images/index';

function Banner() {
  const settings = {
    arrows:false,
    dots:false,
    autoplay:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='relative z-10 h-40'>
      <Slider {...settings}>
        <div>
          <img src={bannerImgOne} alt="bannerImg" />
        </div>
        <div>
          <img src={bannerImgTwo} alt="bannerImg" />
        </div>
        <div>
          <img src={bannerImgThree} alt="bannerImg" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
