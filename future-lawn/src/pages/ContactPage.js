import React from 'react'
import Hero from '../components/Hero';

function ContactPage(props) {
    return (

        
        <div>

            <div className="hero">
                <Hero title={props.title} />
            </div>
            
            <p className="contacts">
                Email: xxxx@xxxx.com
                <hr/>
                Contact Number: xxx-xxx-xxxx
                <hr/>
                Instagram: xxxxxxxxx
                <hr/>
                Other references
            </p>
        </div>
        
    )
}

export default ContactPage