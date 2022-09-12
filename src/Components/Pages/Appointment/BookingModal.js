import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({setTreatment, treatment, date}) => {
    const {_id, name, slots} = treatment;
    const handleForm = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="font-bold text-lg">booking for: {name}</h3>
                            <form onSubmit={handleForm} action="" className='grid grid-cols-1 gap-3 mt-3 justify-items-center'>
                            <input disabled value={format(date, 'PP')} placeholder="Type here" className="input w-full max-w-xs" />
                            <select name="slot" className="select select-bordered w-full max-w-xs">
                                {
                                    slots.map(slot=><option value={slot}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name="name" placeholder="Your name" className="input w-full max-w-xs" />
                            <input type="Email" name="Email" placeholder="Your Email" className="input w-full max-w-xs" />
                            <input type="text" name="phone" placeholder="Phone number" className="input w-full max-w-xs" />
                            <input type="submit" value='submit' className="btn btn-secondary w-full max-w-xs" />
                            </form>
                            
                            {/* <div class="modal-action">
                                <label for="booking-modal" class="btn">Yay!</label>
                            </div> */}
                        </div>
                    </div>
        </div>
    );
};

export default BookingModal;