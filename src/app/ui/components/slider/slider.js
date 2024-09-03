'use client'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Slider_slick({ children }){

    const settings = {
        dots: true,
        initialSlide: 0,
        slidesToShow: 6,
        speed: 500,
        rows: 4,
        autoplay: true,
        draggable: true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
        
      };

    return(
        <Slider {...settings}>
          { children }
        </Slider>
    )
}