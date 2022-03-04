import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
export default function SliderF({ featuredata }) {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1530,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1019,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };
    return (
        <div className='slider-feature'>
            <Slider {...settings}
            >
                {
                    featuredata.map((data, index) => (


                        <div className='item-box' key={index}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>

                                <img src={data.image} alt="" className='featured-image' />
                            </div>
                            <div className='featured-title'>
                                {data.title}
                            </div>
                            <div className='featured-content'>
                                {data.content}
                            </div>
                            <div className='featured-learn'>
                                Learn More <span className='featured-line' /><span className='featured-arrow' />
                            </div>
                        </div>

                    ))
                }
            </Slider>

        </div>
    )
}
