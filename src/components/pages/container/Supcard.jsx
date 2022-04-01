import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Supcard(props) {
    const data = props.des;
    return (
        <div className="card"> 
        <div className="card-body">
        <h5 className="card-title"><i className="fa fa-building-o" /> {data.company}</h5>
          <p className="card-title"><i className="fa fa-user-o" />  {data.name}</p>
          <p className="card-title"><i className="fa fa-phone" /> {data.mobile}</p>
          <p className="card-text"><i className="fa fa-envelope-open-o" /> {data.email}</p>
          <p className="card-text"><i className="fa fa-address-card-o" /> {data.address}</p>
          <NavLink className="btn btn-primary" to={`/addsupplier/${data.id}`}>
          Edit
          </NavLink>

          <span>  </span>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    )
}
