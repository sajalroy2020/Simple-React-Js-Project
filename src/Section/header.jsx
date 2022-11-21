import React from 'react'
import './header.css';
import { HeadList } from './HeadList/HeadList';

const Header = () => {

    const HeaderList = [
        {
            item: 'Home',
            url: '/'
        },
        {
            item: 'Features',
            url: '/'
        },
        {
            item: 'About',
            url: '/'
        },
        {
            item: 'Why',
            url: '/'
        },
        {
            item: 'Pricing',
            url: '/'
        },
        {
            item: 'Clients',
            url: '/'
        },
    ]

    return (
        <header className="header">
            <div className="navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <img src="/img/logo/logo.svg" alt="Logo" />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div
                                    className="collapse navbar-collapse sub-menu-bar"
                                    id="navbarSupportedContent"
                                >
                                    <ul id="nav" className="navbar-nav ms-auto">

                                        {
                                            HeaderList.map((list, index) => (
                                                <HeadList key={index} list={list} />
                                            ))
                                        }

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
