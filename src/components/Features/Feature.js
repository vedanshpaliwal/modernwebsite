import React from 'react';
import './feature.css';
import { featuredata } from './Featuredata/Featuredata';
import SliderF from './SliderF';

export default function Feature() {


    return (
        <div className='feature-main'>
            <div className='feature-heading'>
                Feature
            </div>
            <SliderF featuredata={featuredata} />


        </div>
    )
}
