import React from 'react';

const Review = ({reviews}) => {
    return (
        <div className='shadow-xl p-10'>
            <div className='mb-10'>
                <article>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam culpa nulla repudiandae sed odio aut et quod perspiciatis optio tenetur.</article>
            </div>
            <div class="flex items-center">
                <div class="w-24 rounded-full">
                    <img src={reviews.img}/>
                </div>
                <div>
                    <h1>{reviews.name}</h1>
                    <h1>{reviews.location}</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;