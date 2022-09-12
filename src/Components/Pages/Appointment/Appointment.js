import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableAppoinments date={date}/>
        </div>
    );
};

export default Appointment;