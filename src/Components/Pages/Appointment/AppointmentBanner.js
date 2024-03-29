import chair from './../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import React from 'react';

const AppointmentBanner = ({ date , setDate }) => {


    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;