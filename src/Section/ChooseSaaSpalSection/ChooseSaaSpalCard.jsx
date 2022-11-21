import React from 'react'
import './chooseSaaSpal.css'

const ChooseSaaSpalCard = ({ item }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-feature-extended">
                <div className="icon">
                    <i className="lni lni-display"></i>
                </div>
                <div className="content">
                    <h3><b>{item.title}</b></h3>
                    <p>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChooseSaaSpalCard
