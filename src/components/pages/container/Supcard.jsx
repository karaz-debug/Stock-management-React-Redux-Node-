import React from 'react'

export default function Supcard(props) {
    const data = props.des;
    return (
        <div className="card col-lg-8"> 
        <img className="card-img-top img-responsive img-rounded m-t-1 " src={data.img} alt="Supplyer" />
        <div className="card-body">
          <h4 className="card-title">{data.name}</h4>
          <h5 className="card-title"><i className="fa fa-phone" /> {data.phone}</h5>
          <p className="card-text"><i className="fa fa-envelope-open-o" /> {data.email}</p>
          <p className="card-text">{data.address}</p>
          <button className="btn btn-primary">Edit</button>
          <span>  </span>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    )
}
