import './Services.css';
import React from 'react';

function Appt() {
    return (
        <div className='services'>
            <h1>Services By Appointment</h1>

            <div className='interior express'>
                
                <div className='exp-container'>
                    <div className='interior' id="service">
                        <h2>Interior Detail</h2> 
                        <ul>
                            <li>Full Service 100% Hand Wash</li>
                            <li>Carpets & Mats Shampooed</li>
                            <li>Upholstery Shampooed</li>
                            <li>Leather Seats Cleaned/Treated</li>
                            <li>Door Jambs Cleaned</li>
                        </ul>
                        <h3 class="price"><b>$250.00</b></h3>
                    </div>

                    <div className='exterior' id="service">
                        <h2>Exterior Detail</h2> 
                        <ul>
                            <li>Full Service 100% Hand Wash</li>
                            <li>Paint Cleaned & Polished</li>
                            <li>Hand Wax Applied</li>
                            <li>Moldings Cleaned & Dressed</li>
                            <li>Wheel Wells Cleaned</li>
                        </ul>

                        <h3 class="price"><b>$250.00</b></h3>
                    </div>
                </div>
            </div>

            <div className='fullprice'>
            <h2>Complete Detail</h2>
            <h2>Interior & Exterior</h2>
            <h2>$450.00</h2>
            </div>
        </div>
    )
}

export default Appt;