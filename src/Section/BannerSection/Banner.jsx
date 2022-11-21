import React from 'react'
import './banner.css'

export const Banner = () => {
    return (

        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center position-relative">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                Your using free lite version
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Please, purchase full version to get all sections, features and
                                permission to remove footer credit.
                            </p>
                            <a
                                href=""
                                className="main-btn border-btn btn-hover wow fadeInUp"
                                data-wow-delay=".6s"
                            >Purchase Now</a
                            >
                            <a href="#features" className="scroll-bottom">
                                <i className="lni lni-arrow-down"></i
                                ></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                            <img src="/img/hero/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
