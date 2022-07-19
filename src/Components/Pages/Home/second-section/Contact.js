import React from 'react';

const Contact = () => {
    return (
        <div className='mt-24 bg-appointment px-10 py-14'>
            <div className='pb-16'>
                <h1 className='text-1xl'>Contact Us</h1>
                <h1 className='text-2xl'>Stay connected with us</h1>
            </div>
            <div class="grid grid-cols-1 justify-items-center gap-5">
                <input type="text" placeholder="Your Email" class="input input-bordered w-full max-w-md" />
                <input type="text" placeholder="subject" class="input input-bordered w-full max-w-md" />
                <textarea type="text" placeholder="message" class="textarea w-full max-w-md textarea-bordered" rows={6} />
            </div>
        </div>
    );
};

export default Contact;