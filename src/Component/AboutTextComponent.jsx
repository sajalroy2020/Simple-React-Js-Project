import React from 'react'

const AboutTextComponent = (props) => {

    const { title, discription, btnText } = props;

    return (
        <div className="col-xl-6 col-lg-6">
            <div className="about-content">
                <div className="section-title mb-30">
                    <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                        <b>{title}</b>
                    </h2>
                    <p className="wow fadeInUp py-3" data-wow-delay=".4s">
                        {discription}
                    </p>
                </div>

                {props.children}

                <a
                    href=""
                    className="main-btn btn-hover border-btn wow fadeInUp"
                    data-wow-delay=".6s"
                >{btnText}</a
                >
            </div>
        </div>
    )
}

export default AboutTextComponent
