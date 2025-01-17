import "./Services.css"
import React from 'react';

function Services () {
    return (
        <div className='services'>
            <h1>Services Center</h1>

            <div className='interior express'>
                <h2>Express Detailing</h2>
                <h3>No Appointment Necessary! We do it while you wait. Most services take 20 minutes.</h3>
                
                <div className='exp-container'>
                    <div className='interior' id="service">
                        <h2>Express Interior</h2> 
                        <ul>
                            <li>Upholstry Shampoo   $100</li>
                            <li>Leather Conditioning  $100</li>
                            <li>Carpet Shampoo   $100</li>
                            <li>Dash Console Panels   $100</li>
                        </ul>
                    </div>

                    <div className='exterior' id="service">
                        <h2>Express Exterior</h2> 
                        <ul>
                            <li>Hand Wax   $100</li>
                            <li>Clay Wax  $150</li>
                            <li>Headlight   $100</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services ;