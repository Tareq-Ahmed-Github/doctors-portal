import React from 'react';
import doctor from './../../../assets/images/doctor.png';
const MakeAppointment = () => {
    return (
        <section className='flex bg-appointment mt-20 px-12 h-[80%]'>
            <div className='w-[50%]'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex flex-col py-24 w-[50%]'>
                <div className='text-left'>
                    <h2 className='text-2xl'>Appointment</h2>
                    <h2 className='text-3xl'>Make an appointment Today</h2>
                    <p>It is a large established fact that a reader eill be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters as opposed to using 'content here, content here'.</p>
                </div>
                <button className='btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto'>Get started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;