import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SubMenu(props) {
    return (
        <li>
            <NavLink exact 
                activeClassName="is-active" 
                to={props.path}>
                <i className="fa fa-angle-right"></i>
                {props.name}
            </NavLink>
        </li>
    )
}
