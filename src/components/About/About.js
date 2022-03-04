import React from 'react';
import './About.css'
import aboutimg from '../../Assests/About/about.png'
export default function About() {
    return (
        <div className='about-main'>
            <div className='about-left'>
                <img src={aboutimg} alt="about-image" />
            </div>
            <div className='about-right'>
                <div className='about-heading'>
                    We are a high-level data storage bank
                </div>
                <div className='about-content'>
                    The place to store various data that you can access at any time through the internet  and where you can carry it.
                    This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
                </div>
            </div>
        </div>
    )
}
