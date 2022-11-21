import React from 'react'
import './chooseSaaSpal.css'
import ChooseSaaSpalCard from './ChooseSaaSpalCard'

const ChooseSaaSpal = () => {

    const ChooseSaaSpalList = [
        {
            title: 'SaaS Focused',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            title: 'Awesome Design',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            title: 'Ready to Use',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            title: 'Vanilla JS',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            title: 'Essential Sections',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            title: 'Highly Optimized',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
    ]

    return (
        <section id="why" className="feature-extended-section mt-5">
            <div className="feature-extended-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                            <div className="section-title text-center mb-60">
                                <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                                    <b>Why Choose SaaSpal</b>
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ChooseSaaSpalList.map((item, index) => (<ChooseSaaSpalCard item={item} key={index} />))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseSaaSpal
