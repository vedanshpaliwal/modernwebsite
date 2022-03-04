import React from 'react';
import './subscribe.css'

export default function Subscribe() {
    return (
        <div className='subscribe-main'>
            <div className='subscribe-left'>
                <div className='subscribe-heading'>
                    Subscribe
                </div>
                <div className='subscribe-content'>
                    Join our newsletter to never miss any latest news.
                </div>
            </div>
            <div className='subscribe-right'>
                <div className='subscribe-input'>
                    <input type="email" placeholder='Enter your e-mail address here' />
                    <button type="submit" className='join-us'>Join Us</button>
                </div>
            </div>

        </div>
    )
}
