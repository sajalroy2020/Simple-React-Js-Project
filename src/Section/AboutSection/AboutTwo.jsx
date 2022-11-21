import React from 'react'
import AboutImageComponent from '../../Component/AboutImageComponent'
import AboutTextComponent from '../../Component/AboutTextComponent'
import './about.css'

const AboutTwo = () => {
    return (
        <section id="about" className="mt-5 pt-5 about-section">
            <div className="container">
                <div className="row align-items-center pt-5">
                    <AboutTextComponent
                        title='Easy to Use with Tons of Awesome Features'
                        discription='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                        btnText='Learn More'
                    >
                        <ul>
                            <li>Quick Access</li>
                            <li>Easily to Manage</li>
                            <li>24/7 Support</li>
                        </ul>
                    </AboutTextComponent>

                    <AboutImageComponent
                        imageOne='/img/about/about-right-shape.svg'
                        imageTwo='/img/about/about-2.png'
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutTwo
