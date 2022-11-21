import React from 'react';
import './subscribe.css';

const Subscribe = () => {
    return (
        <section id="contact" class="subscribe-section pt-120">
            <div class="container">
                <div class="subscribe-wrapper img-bg">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-7">
                            <div class="section-title mb-15">
                                <h2 class="text-white mb-25"><b>Subscribe Our Newsletter</b></h2>
                                <p class="text-white pr-5">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-5">
                            <form action="#" class="subscribe-form">
                                <input
                                    type="email"
                                    name="subs-email"
                                    id="subs-email"
                                    placeholder="Your Email"
                                />
                                <button type="submit" class="main-btn btn-hover">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
