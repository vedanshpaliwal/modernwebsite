import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderT.css';





function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
        <div
            className='prev-arrow-slider'
            onClick={onClick}
        />
    );
}
export default function SliderT({ TestimonialData }) {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ],
    };
    return (
        <div className='slider-feature-t'>
            <Slider {...settings}
            >
                {
                    TestimonialData.map((data, index) => (
                        <div>

                            <div className='test-card'>

                                <div className='test-card-slider'>
                                    <div className='card-left-test'>
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div className='card-right-test'>
                                        <div className='card-test-title'>
                                            {data.title}
                                        </div>
                                        <div className='card-test-sub'>
                                            <div>

                                                {data.sub}
                                            </div>

                                            <span className='rating' style={{ marginLeft: 20 }}></span>
                                            <span className='rating'></span>
                                            <span className='rating'></span>
                                            <span className='rating'></span>
                                            <span className='rating-non'></span>

                                        </div>
                                        <div className='card-test-content'>
                                            {data.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </Slider>
            <div className='previous-arrow'>

            </div>
        </div>
    )
}
