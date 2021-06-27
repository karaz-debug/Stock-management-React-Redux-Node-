import React from 'react'
import Treeview from './aside/Treeview'
import MenuList from './aside/menulist'

export default function Aside() {
  
 
  return (
    
    <aside className="main-sidebar">

      <div className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          {
            MenuList.map((val,index)=>{
              return <Treeview
                key = {index}
                name={val.title}
                icon = {val.icon}
                submenu = {val.submenu}
              />
            })
          }
       </ul>
      </div>
    </aside>
  )
}
