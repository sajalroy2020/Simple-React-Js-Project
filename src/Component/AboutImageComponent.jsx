import React from 'react'

const AboutImageComponent = ({ imageOne, imageTwo }) => {
    return (
        <div className="col-xl-6 col-lg-6">
            <div className="about-img">
                <img src={imageTwo} alt="" className="w-100" />
                <img
                    src={imageOne}
                    alt=""
                    className="shape shape-1"
                />
                <img
                    src="/img/about/left-dots.svg"
                    alt=""
                    className="shape shape-2"
                />
            </div>
        </div>
    )
}

export default AboutImageComponent
