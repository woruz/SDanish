import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import './Work.css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"

const Works = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div id='Work' className="Work">
            <div className="WorkHeader">
                <span className='Worknum'>03.</span><span className='WorkHeaderin'>Work</span><hr className='WorkHr' />
            </div>

            <div className="main">
                <div data-aos="zoom-in" className="maincard1">
                    <Card>
                        <Card.Header as="h4">PROTOFOLIO WEBSITE</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            Built using React, Bootstrap, Aos and CSS. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="icon"><a href="https://github.com/woruz/SDanish"><FaGithub /></a></div>
                </div>
            </div>

            <div className="grid minor">
                <div className="grid-minor">
                    <Card data-aos="flip-up" className="minorcard">

                        <Card.Body>
                            <Card.Title>STONE PAPER SCISSOR</Card.Title>
                            <Card.Text>
                                Built using HTML, CSS and JAVASCRIPT.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-minor"><a href="https://github.com/woruz/Rock-Paper-Scissors-Game"><FaGithub /></a> <a href="https://stopapsci.netlify.app/"><FaExternalLinkAlt /></a></div>
                    </Card>
                </div>


                <div className="grid-minor">
                    <Card data-aos="flip-up" className="minorcard">

                        <Card.Body>
                            <Card.Title>NUMBER GUESSING GAME</Card.Title>
                            <Card.Text>
                                Built using HTML, CSS and JAVASCRIPT.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-minor"><a href="https://github.com/woruz/Number-Gusessing-Game.git"><FaGithub /></a> <a href="https://determined-davinci-3031a4.netlify.app/"><FaExternalLinkAlt /></a></div>
                    </Card>
                </div>

                <div className="grid-minor">
                    <Card data-aos="flip-up" className="minorcard">

                        <Card.Body>
                            <Card.Title>COLOR FLIPPER</Card.Title>
                            <Card.Text>
                                Built using HTML, CSS and JAVASCRIPT.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-minor"><a href="https://github.com/woruz/Color-Flipper.git"><FaGithub /></a> <a href="https://color-flipper-new.netlify.app/index.html"><FaExternalLinkAlt /></a></div>
                    </Card>
                </div>

                <div className="grid-minor">
                    <Card data-aos="flip-up" className="minorcard">

                        <Card.Body>
                            <Card.Title>SIGN-IN</Card.Title>
                            <Card.Text>
                                Built using HTML and CSS.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-minor"><a href="https://github.com/woruz/Sign-in.git"><FaGithub /></a> <a href="https://sign-in-using-html-css.netlify.app"><FaExternalLinkAlt /></a></div>
                    </Card>
                </div>

                <div className="grid-minor">
                    <Card data-aos="flip-up" className="minorcard">

                        <Card.Body>
                            <Card.Title>FULL SCREEN LANDING PAGE</Card.Title>
                            <Card.Text>
                                Built using HTML AND CSS.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-minor"><a href="https://github.com/woruz/Full-Screen-Landing-Page.git"><FaGithub /></a> <a href="https://full-screen-landing-page-using-html-css.netlify.app"><FaExternalLinkAlt /></a></div>
                    </Card>
                </div>

                <div className="grid-minor">
                    <Card data-aos="flip-up" className="minorcard">

                        <Card.Body>
                            <Card.Title>PROFILE_CARD</Card.Title>
                            <Card.Text>
                                USING HTML AND CSS.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-minor"><a href="https://github.com/woruz/UI-Profile-Card-with-CSS.git"><FaGithub /></a> <a href="https://ui-profile-card-with-css.netlify.app/"><FaExternalLinkAlt /></a></div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Works

