import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import './Home.css'


const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className='Home'>
           <h4 className='first' data-aos="fade-up">Hi, my name is</h4>
           <h1 className='second' data-aos="fade-up">Sabil Danish</h1>
           <h2 className='third' data-aos="fade-up">I build things that live on web.</h2>
           <h4 className='fourth' data-aos="fade-up">I'm a self-taught software developer looking for the right company to begin my career, creating exceptional experiences on the web.</h4>
        </div>
    )
}

export default Home
