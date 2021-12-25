import React, {useEffect} from 'react'
import './About.css'
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div data-aos="zoom-in" id='About' className='About'>
            <div className='Aboutheader'>
                <span className='Aboutnum'>01.</span><span className='AboutHeader'> About Me</span><hr className='Abouthr' />
            </div>

            <div className="AboutText">
                <p>Hello! My name is Sabil, and I love building things that live on the web.</p><br />
                <p>My interest in computers started when I studied C programming language in my first year in college. </p><br />
                <p>My interest in web development started when I realized that I was more interested in creating the experience rather than using it. And few months later i decided to help my friend by building him an online coaching institute website.</p>
                <p>For the last 6 months i have been learning HTML, CSS, JAVASCRIPT, REACT and a little backend mainly NODE JS and EXPRESS JS</p><br />
                <p>Apart from that i have also completed my Btech in Mechanical Engineering and have worked as site in-charge for M/S TRINATH ENGINEERS in Indravati Project</p>
            </div>
        </div>
    )
}

export default About
