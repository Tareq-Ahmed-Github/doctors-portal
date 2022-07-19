import React from 'react';
import Review from './Review';
import people1 from './../../../assets/images/people1.png';
import people2 from './../../../assets/images/people2.png';
import people3 from './../../../assets/images/people3.png';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <div className=''>
            <div className='text-left ml-10'>
                <h1 className='text-2xl'>testimonials</h1>
                <h1 className='text-3xl'>What Our Parents Says</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 text-left m-10'>
                {
                    reviews.map(reviews => <Review key={reviews._id} reviews={reviews}></Review>)
                }
            </div>

        </div>
    );
};

export default Testimonials;