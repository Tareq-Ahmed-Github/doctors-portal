import React from 'react';
import treatment from '../../../assets/images/treatment.png';
const DentalCard = () => {
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl p-12">
                <figure><img src={treatment} alt="Movie"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Excecptional dental care, on your terms</h2>
                    <p class='text-left'>It is a long established fact that a reader will be distracted by the readable content od a page when looking at its layout. The point of using Lorem ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. </p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCard;