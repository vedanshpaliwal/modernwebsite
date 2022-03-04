import React from 'react';
import heroimage from '../../Assests/HeroImage/cloud.png'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className='hero'>

            {/* hero left part */}
            <div className='hero-left'>
                <div className='hero-heading'>
                    Save your data storage here.
                </div>
                <div className='sub-heading'>
                    Insignia is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                </div>
                <div>
                    <button className='hero-button'>Learn More</button>
                </div>
            </div>

            {/* hero right part */}
            <div className='hero-right'>
                <img src={heroimage} alt="hero-image" className='hero-image' />
            </div>
        </div>

    )
}
