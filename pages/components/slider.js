
import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link'

export default function PhotoSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const photos = [
          {
            url: "/1.png"
          },
          {
            url: "/2.jpg"
        },
        {
            url: "/3.jpg"
        },
        {
            url: "/4.jpg"
        },
        {
            url: "/5.jpg"
        },
      ]

    return (
        <div id="projects-id" className="slider">

            <Slider {...settings}>
                {
                    photos.map((s, i) => {
                        return (
                            <div key={`slider-key=${i}`} className="slider__slide">
                                <img src={s.url}/>
                            </div>
                        )
                    })
                }
                </Slider> 

        </div>
    )
  }