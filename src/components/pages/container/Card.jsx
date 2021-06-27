import React from 'react'

export default function Card(props) {
    const data = props.des;
    return (
        <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
        <div className="card">
          <div className={`card-body box-rounded ${data.gradent}`}>
           <span className="info-box-icon bg-transparent">
           <i className={`${data.icon} text-white`} /></span>
            <div className="info-box-content">
              <h6 className="info-box-text text-white">{data.title}</h6>
              <h1 className="text-white">{data.number}</h1>
              <span className="progress-description text-white">{data.subtitle}</span> </div>
          </div>
        </div>
      </div>
    )
}
