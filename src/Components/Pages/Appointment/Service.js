import React from 'react';

const Service = ({ service, treatment, date, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mt-4 ">
            <div class="card-body">
                <h2 class="card-title mx-auto">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-600'>Try another date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                <div class="card-actions justify-center">
                    {/* <!-- The button to open modal --> */}
                    <label for="booking-modal" 
                        class="btn btn-secondary text-white uppercase"
                        disabled={slots.length === 0}
                        onClick={()=> setTreatment(service)}
                        >book appointment</label>

                    {/* <!-- Put this part before </body> tag --> */}
                    
                </div>
            </div>
        </div >
    );
};

export default Service;