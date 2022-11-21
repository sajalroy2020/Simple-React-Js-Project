import React from 'react'
import './feature.css';


const FeatureCard = ({ title, description }) => {
    return (
        <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-feature">
                <div className="icon">
                    <i className="lni lni-bootstrap"></i>
                </div>
                <div className="content">
                    <h3><b>{title}</b></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
