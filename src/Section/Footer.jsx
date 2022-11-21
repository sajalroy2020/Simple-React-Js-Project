import React from 'react';
import './footer.css'
import FooterList from './FooterList.jsx/FooterList';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="widget-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="logo mb-30">
                                    <a href="index.html">
                                        <img src="/img/logo/logo.svg" alt="" />
                                    </a>
                                </div>
                                <p className="desc mb-30 text-white">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    dinonumy eirmod tempor invidunt.
                                </p>
                                <ul className="socials">
                                    <li>
                                        <a href="">
                                            <i className="lni lni-facebook-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lni lni-twitter-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lni lni-instagram-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lni lni-linkedin-original"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <FooterList title="About Us">
                            <li><a href="">Home</a></li>
                            <li><a href="">Feature</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Testimonials</a></li>
                        </FooterList>

                        <FooterList title="Features">
                            <li><a href="">How it works</a></li>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Terms of service</a></li>
                            <li><a href="">Refund policy</a></li>
                        </FooterList>

                        <FooterList title="Features">
                            <li><a href="">How it works</a></li>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Terms of service</a></li>
                            <li><a href="">Refund policy</a></li>
                        </FooterList>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
