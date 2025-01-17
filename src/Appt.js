import './Services.css';
import React from 'react';

function Appt() {
    return (
        <div className='services'>
            <h1>Services Center</h1>

            <div className='interior express'>
                <h2>Interior Detailing</h2>
                
                <div className='exp-container '>
                    <div className='interior' id="service">
                        <h2>Interior Detail</h2> 
                        <ul>
                            <li>Full Service 100% Hand Wash</li>
                            <li>Carpets & Mats Shampooed</li>
                            <li>Upholstry Shampoo</li>
                            <li>Leather Seats Cleaned/Treated</li>
                            <li>Door Jambs Cleaned</li>
                        </ul>
                        <h3 class="price">$250.00</h3>
                    </div>

                    <div className='exterior' id="service">
                        <h2>Express Detail</h2> 
                        <ul>
                            <li>Full Service 100% Hand Wash</li>
                            <li>Paint Cleaned & Polished</li>
                            <li>Hand Wax Applied</li>
                            <li>Moldings Cleaned & Dressed</li>
                            <li>Wheel Wells Cleaned</li>
                        </ul>

                        <h3 class="price">$250.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appt;