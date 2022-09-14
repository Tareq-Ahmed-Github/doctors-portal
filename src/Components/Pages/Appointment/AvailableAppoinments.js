import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p>Available appointments on {format(date, 'PP')}.</p>
            <div className='grid md:grid-cols-3 gap 4 p-12'>
                {
                    services.map(service => <Service 
                        service={service} 
                        key={service._id}
                        setTreatment={setTreatment}
                        treatment={treatment}
                        date={date}
                        ></Service>)
                }
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                treatment={treatment}
                date={date}               
            ></BookingModal>}
        </div>

    );
};

export default AvailableAppoinments;