import React from 'react'

export default function Buzcard(props) {
    const data = props.data;
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2" 
        onClick={()=>{console.log(data.label,props.id)}}>
        <div className="card text-center mb-3">
        <div className="card-body text-center">
        <img  className="img-responsive " src={`https://image.flaticon.com/icons/png/512/${data.img}`}/>
           </div>
       
          <div className="card-footer text-muted">{data.label}</div>
        </div>
      </div>
    )
}
