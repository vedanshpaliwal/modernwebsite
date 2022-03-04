import React from 'react'
import Footer from './Subscribe/Footer/Footer'
import Subscribe from './Subscribe/Subscribe'

export default function EndSection() {
    return (
        <div>
            <Subscribe />
            <div className='hr' />
            <Footer />
        </div>
    )
}
