import React from 'react';
import "./Footer.css";

function Footer () {
    return (
        <div className='footer'>
            <div className='footer-title'>
                <h2>Campos Mobile Car Wash</h2>
                <h3>Servicing the San Francisco Bay Area</h3>
            </div>

            <div className='ft-container'>
            <div className='column'>
                <h3><b>Contact Us Directly</b></h3>
                <h4>Antonio (415) 810-3067</h4>
                <h4>Rudy (415) 902-0339</h4>
            </div>
            <div className='column'>
                <h3><b>Director of Sales</b></h3>
                <h4>Christian Pagnia</h4>
                <h4>camposdetailing24@gmail.com</h4>
            </div>
            <div className='column'>
               <h3><b>Insured & Bonded</b></h3>
               <h4>LIC. 1160284</h4>
            </div>
            </div>
        </div>
    )
}

export default Footer ;