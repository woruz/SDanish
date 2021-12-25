import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <div className='Navbar'>
            <nav>
                <div className="logo">
                </div>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={ clicked? "menu-list" : "menu-list close"}>
                    <li><a href="#About"><span className='Navnum'> 01.</span> About</a></li>
                    <li><a href="#Skills"><span className='Navnum'>02.</span> Skills</a></li>
                    <li><a href="#Work"><span className='Navnum'>03.</span> Work</a></li>
                    <li><a href="#Contact"><span className='Navnum'>04.</span> Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
