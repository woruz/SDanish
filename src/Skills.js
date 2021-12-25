import React, { useEffect } from 'react'
import './Skills.css'
import Aos from "aos"
import "aos/dist/aos.css"
import html from './html.png'
import css from './css.png'
import javascript from './javascript.png'
import node from './node js.png'
import version from './version.png'

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [{ duration: 2000 }])
    return (
        <div className="Skillset" id="Skills">
            <div className="SkillsTopic">
                <span className='SkillsNum'>02.</span><span className='SkillsHeader'>Skills</span><hr className='SkillsHr' />
            </div>
            <div className="Skills">
                <div data-aos="fade-right" class="flip-card item-1">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className='SkillsImage' src={html} />
                        </div>
                        <div class="flip-card-back">
                            <h1>HTML5</h1>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" class="flip-card item-2">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className='SkillsImage' src={css} />
                        </div>
                        <div class="flip-card-back">
                            <h1>CSS</h1>
                            <h1>SASS</h1>
                            <h1>BOOTSTRAP</h1>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" class="flip-card item-3">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className='SkillsImage' src={javascript} />
                        </div>
                        <div class="flip-card-back">
                            <h1>JS</h1>
                            <h1>ES6</h1>
                            <h1>REACT JS</h1>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" class="flip-card item-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className='SkillsImage' src={node} />
                        </div>
                        <div class="flip-card-back">
                            <h1>NODE JS</h1>
                            <h1>EXPRESS JS</h1>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" class="flip-card item-5">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className='SkillsImage' src={version} />
                        </div>
                        <div class="flip-card-back">
                            <h1>GIT</h1>
                            <h1>GITHUB</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

