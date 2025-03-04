import React from 'react';
import './Contact.css';
import {PopupWidget} from 'react-calendly';

function Contact () {
    return (
        <div className='Contact'>
            <h1>Appointments</h1>
            <h3 className='appt'>Once you have scheduled a time for services, we will reach out to confirm or reschedule your appointment if needed.</h3>

        <PopupWidget
        url="https://calendly.com/tmrichards295"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Schedule my appointment"
        textColor="ffffff"
        color="#00a2ff"
      />
    </div>
    )
}

export default Contact ;