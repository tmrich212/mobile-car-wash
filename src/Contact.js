import React from 'react';
import './Contact.css'

function Contact () {
    return (
        <div className='Contact'>
        <h2>Get in Touch</h2>

        <form target="_blank" action="https://formsubmit.co/tmrichards295@gmail.com" method="POST">
            <div className="form-group">
            <div className="form-row">
                <div className="col">
                <input type="text" className="className" className="form-control" placeholder="Full className" required />
                </div>
                <div className="col">
                <input type="email" className="email" className="form-control" placeholder="Email Address" required />
                </div>
            </div>
            </div>
            <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" className="message" rows="10" required></textarea>
            </div>
            <button type="submit" className="btn">Submit Form</button>
        </form>
    </div>
    )
}

export default Contact ;