import React from 'react'

export default function Supcard(props) {
    const data = props.des;
    return (
        <div className="card col-10"> 
        <div className="card-body">
        <h5 className="card-title"><i className="fa fa-building-o" /> {data.company}</h5>
          <p className="card-title"><i className="fa fa-user-o" />  {data.name}</p>
          <p className="card-title"><i className="fa fa-phone" /> {data.mobile}</p>
          <p className="card-text"><i className="fa fa-envelope-open-o" /> {data.email}</p>
          <p className="card-text"><i className="fa fa-address-card-o" /> {data.address}</p>
          <button className="btn btn-primary">Edit</button>
          <span>  </span>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    )
}
