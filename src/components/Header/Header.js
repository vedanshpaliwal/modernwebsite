import React from 'react';
import './Header.css';
import logo from '../../Assests/logo.png'
import { useState } from 'react';
import Hamburger from 'hamburger-react'

import { useEffect } from 'react';

export default function Header() {
    const [isOpen, setOpen] = useState(false)
    const [overlay, setoverlay] = useState(false)


    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight,
    });
    const updateSize = () =>
        setSize({
            x: window.innerWidth,
            y: window.innerHeight,
        });
    useEffect(() => (window.onresize = updateSize), []);




    const showoption = () => {
        if (!overlay) {
            document.getElementById("option-overlay").style.width = "100vw"
            document.getElementById("option-overlay").style.overflow = "hidden";
            document.body.style.overflowY = "hidden"
            setOpen(true)
            document.body.style.height = "100vh";
            setoverlay(true)
        }
        else {
            document.getElementById("option-overlay").style.width = "0%"
            document.body.style.height = "auto";
            document.body.style.overflowY = "scroll";
            setoverlay(false)

        }
    }

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                {
                    size.x > 1100 ?
                        <div className='nav-tabs' >
                            <span className='nav-item'>
                                About
                            </span>
                            <span className='nav-item'>
                                Help
                            </span>
                            <span className='nav-item'>
                                Feature
                            </span>
                            <span className='nav-item'>
                                SignUp
                            </span>
                            <button className='requestdemo'>Request Demo <span className='line' /><span className='arrow' />  </button>
                        </div>
                        : <span onClick={() => showoption()}> <Hamburger color='white' toggled={isOpen} toggle={setOpen} /></span>

                }


            </div>
            <div className="options-overlay-mobile" id="option-overlay" >
                <div className='nav-tabs' >
                    <span className='nav-item'>
                        About
                    </span>
                    <span className='nav-item'>
                        Help
                    </span>
                    <span className='nav-item'>
                        Feature
                    </span>
                    <span className='nav-item'>
                        SignUp
                    </span>
                    <button className='requestdemo'>Request Demo <span className='line' /><span className='arrow' />  </button>
                </div>
            </div>
        </>
    )
}
