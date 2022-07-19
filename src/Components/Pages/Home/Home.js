import React from 'react';
import chair from './../../assets/images/chair.png';
import clock from './../../assets/icons/clock.svg';
import phone from './../../assets/icons/phone.svg';
import marker from './../../assets/icons/marker.svg';
import Services from './second-section/services';
import DentalCard from './second-section/DentalCard';
import MakeAppointment from './second-section/MakeAppointment';
import Testimonials from './second-section/Testimonials';
import Contact from './second-section/Contact';
const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 bg-bg-chair bg-opacity-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-2xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-left text-[#3A4256]">YOUR NEW SMILE STARTS HERE</h1>
                        <p class="py-6 text-left text-[#3A4256]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex justify-start'>
                            <button class="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-5 mt-5 p-12'>
                <div class="card w-96 shadow-xl flex-1 bg-gradient-to-r from-cyan-500 to-blue-500">
                    <figure class="px-10 pt-10">
                        <img src={clock} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl flex-1 border-white border-2">
                    <figure class="px-10 pt-10">
                        <img src={phone} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 shadow-xl flex-1 bg-gradient-to-r from-cyan-500 to-blue-500">
                    <figure class="px-10 pt-10">
                        <img src={marker} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>

            </div>
            <Services></Services>
            <DentalCard></DentalCard>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Home;