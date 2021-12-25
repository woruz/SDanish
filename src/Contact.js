import React, { useEffect } from 'react'
import './Contact.css'
import resume from './resume-1.pdf'
import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" id='Contact' className='Contact'>
            <div className='header'>
                <span className='Contactnum'>04.</span><span className='ContactHeader'> Get In Touch</span><hr className='ContactHr' />

                <p className='text'>
                    Whether you have an opportunity that you wish to discuss with me, have a question, or want to say hi, my inbox is always open. Drop me a message, and I'll do my best to get back to you!
                </p>
            </div>
            <div className="button">
                <button className='resume'><a href={resume}>Resume</a></button>
            </div>
        </div>
    )
}

export default Contact
