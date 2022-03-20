import React from 'react'
import SubMenu from './SubMenu'
export default function Treeview(props) {
    const submenu = props.submenu;
    return (
        <li className="treeview">
         <a target=""> 
         <i className={props.icon}>  </i>
         <span> {props.name}</span>
          <span
                className="pull-right-container"> 
                </span> 
                </a>
              <ul className="treeview-menu">
                  {submenu.map((val,index)=>{
                      return (
                        <SubMenu
                            key={index}
                            path={val.path}
                            name={val.name}
                        />
                      )
                        
                  })}
              </ul>
          </li>



    )
}
