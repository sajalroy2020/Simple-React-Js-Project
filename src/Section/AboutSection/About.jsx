import React from 'react'
import AboutImageComponent from '../../Component/AboutImageComponent'
import AboutTextComponent from '../../Component/AboutTextComponent'
import './about.css'

const About = () => {
    return (
        <section id="about" className="mt-5 pt-5 about-section">
            <div className="container">
                <div className="row align-items-center">
                    <AboutImageComponent
                        imageOne='/img/about/about-left-shape.svg'
                        imageTwo='/img/about/about-1.png'
                    />
                    <AboutTextComponent
                        title='Perfect Solution Thriving Online Business'
                        discription='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.'
                        btnText='Discover More'
                    />
                </div>
            </div>
        </section>
    )
}

export default About
