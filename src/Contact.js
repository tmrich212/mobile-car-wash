import React from 'react';
import './Contact.css'

function Contact () {
    return (
        <div className='Contact'>
        <h2>Get in Touch</h2>

        <form target="_blank" action="https://formsubmit.co/tmrichards295@gmail.com" method="POST">
            <div class="form-group">
            <div class="form-row">
                <div class="col">
                <input type="text" className="className" class="form-control" placeholder="Full className" required />
                </div>
                <div class="col">
                <input type="email" className="email" classclassclassName="form-control" placeholder="Email Address" required />
                </div>
            </div>
            </div>
            <div class="form-group">
            <textarea placeholder="Your Message" class="form-control" classclassName="message" rows="10" required></textarea>
            </div>
            <button type="submit" className="btn">Submit Form</button>
        </form>
    </div>
    )
}

export default Contact ;