import React, { Children } from 'react'
import '../footer.css'

const FooterList = (props) => {
    return (
        <div className="col-xl-2 col-lg-2 col-md-6">
            <div className="footer-widget">
                <h3>{props.title}</h3>
                <ul className="links">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default FooterList
