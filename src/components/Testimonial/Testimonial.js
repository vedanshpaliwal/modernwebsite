import React from 'react';
import SliderT from './SliderT';
import './Testimonial.css';
import { TestimonialData } from './Data/TestimonialData';


export default function Testimonial() {
    return (
        <div className='testimonial-main'>
            <div className='testimonial-left'>
                <div className='test-heading'>
                    Testimonials
                </div>
                <SliderT TestimonialData={TestimonialData} />
            </div>
        </div>
    )
}
