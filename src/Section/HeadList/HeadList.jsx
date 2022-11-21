import React from 'react'
import '../header.css'

export const HeadList = ({ list }) => {
    return (
        <li className="nav-item">
            <a className="page-scroll" href={list.url}>{list.item}</a>
        </li>
    )
}
