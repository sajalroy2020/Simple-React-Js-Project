import React from 'react'
import './feature.css';
import FeatureCard from './FeatureCard';

const Feature = () => {
    return (
        <section id="features" className="feature-section pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <FeatureCard
                        title='Bootstrap 5'
                        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore'
                    />
                    <FeatureCard
                        title='Clean Design'
                        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore'
                    />
                    <FeatureCard
                        title='Easy to Use'
                        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore'
                    />
                </div>
            </div>
        </section>
    )
}

export default Feature
