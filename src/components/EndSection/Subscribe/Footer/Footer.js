import React from 'react';
import './footer.css'
import logo from '../../../../Assests/logo.png';
import facebook from '../../../../Assests/social-media/FacebookLogo.png';
import instagram from '../../../../Assests/social-media/InstagramLogo.png';
import twitter from '../../../../Assests/social-media/TwitterLogo.png';
import chat from '../../../../Assests/Union.png'


export default function Footer() {
    return (
        <div className='footer-main'>

            <div className='footer-above'>
                <div className='footer-above-left'>
                    <div className='try-free'>
                        Try for free!
                    </div>
                    <div className='limited'>
                        Get limited 1 week free try our features!
                    </div>
                </div>
                <div className='footer-above-right'>
                    <button type="submit" className='learn-footer'>Learn More</button>
                    <button type="submit" className='footer-demo'>Request Demo <span className='line' /><span className='arrow' /> </button>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-col1'>
                    <img src={logo} alt="" />
                    <div className='footer-address'>
                        Insignia Society, 234
                        <br />
                        Bahagia Ave Street
                        PRBW 29281

                    </div>
                    <div className='email-number'>
                        info@insignia.com<br />
                        1-232-3434 (Main)
                    </div>
                </div>
                <div className='footer-bottom-col2'>
                    <div className='col-2-heading'>
                        About
                    </div>
                    <div className='col-2'>

                        <div className='col-2-item'>
                            Profile
                        </div>
                        <div className='col-2-item'>
                            Features
                        </div>
                        <div className='col-2-item'>
                            Careers
                        </div>
                        <div className='col-2-item'>
                            DW News
                        </div>
                    </div>
                </div>
                <div className='footer-bottom-col3'>
                    <div className='col-3-heading'>
                        Help
                    </div>
                    <div className='col-3'>

                        <div className='col-3-item'>
                            Support
                        </div>
                        <div className='col-3-item'>
                            Sign Up
                        </div>
                        <div className='col-3-item'>
                            Guide
                        </div>
                        <div className='col-3-item'>
                            Reports
                        </div>
                        <div className='col-3-item'>
                            Q&A
                        </div>
                    </div>
                </div>
                <div className='footer-bottom-col4'>
                    <div className='social-media'>
                        Social Media
                    </div>
                    <div className='footer-logo'>
                        <div className='logo-icon'>
                            <img src={facebook} alt="" />
                        </div>
                        <div className='logo-icon m-left'>
                            <img src={twitter} alt="" />
                        </div>
                        <div className='logo-icon m-left'>
                            <img src={instagram} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-last'>

                <div className='copyright'>
                    © Insignia™, 2020. All rights reserved.
                </div>
                <div className='chat'>
                    <img src={chat} alt="" />
                </div>
            </div>
        </div>
    )
}
