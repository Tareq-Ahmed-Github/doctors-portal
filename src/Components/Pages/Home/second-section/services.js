import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './service';
const services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: " ",
            image: fluoride
        },
        {
            _id: 2,
            name: 'Fluoride Treatment',
            description: " ",
            image: cavity
        },
        {
            _id: 3,
            name: 'Fluoride Treatment',
            description: " ",
            image: whitening
        }
    ]
    return (
        <div className='bg-slate-500'>
            <div>
                <h1>OUR SERVICES</h1>
                <h1>Services we provide</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-12'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default services;