import React from 'react'
import './download.css';
import phone from '../../Assests/images/Phone.png'

export default function Download() {
    return (
        <div className='download-main'>
            <div className='download-left'>
                <div className='download-title'>
                    Download Our App
                </div>
                <div className='download-content'>
                    The place to store various data that you can access at any time through the internet  and where you can carry it.
                    This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
                </div>
                <div className='download-button'>
                    Download
                </div>
            </div>
            <div className='download-right'>
                <img src={phone} alt="" className='download-image' />
            </div>
        </div>
    )
}
