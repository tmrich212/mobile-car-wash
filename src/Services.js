import "./Services.css"
import React from 'react';

function Services () {
    return (
        <div className='services'>
            <h1>Services Center</h1>

            <div className='interior express'>
                <h2>Express Detailing</h2>
                <h3>No Appointment Necessary! We do it while you wait.</h3> 
                <h3 className="time">(Most services take 20 minutes)</h3>
                
                <div className='container'>
                    <div className='interior' id="service">
                        <h2>Express Interior</h2> 
                        <ul>
                            <li>Upholstery Shampoo   <b>$100</b></li>
                            <li>Leather Conditioning  <b>$100</b></li>
                            <li>Carpet Shampoo   <b>$100</b></li>
                            <li>Dash Console Panels   <b>$100</b></li>
                        </ul>
                    </div>

                    <div className='exterior' id="service">
                        <h2>Express Exterior</h2> 
                        <ul>
                            <li>Hand Wax   <b>$100</b></li>
                            <li>Clay Wax  <b>$150</b></li>
                            <li>Headlight   <b>$75</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services ;