import React from 'react'
import Supcard from './container/Supcard'

export default function Sup() {

const supplyer = [
    {
        img:"dist/img/img1.jpg",
        name:"manish",
        phone:"123456789",
        email:"manish@gamil.com",
        address:"Pipari,Rayan,Bhadhoi"
    },
    {
        img:"dist/img/img2.jpg",
        name:"manish",
        phone:"123456789",
        email:"manish@gamil.com",
        address:"Pipari,Rayan,Bhadhoi"
    },
    {
        img:"dist/img/img3.jpg",
        name:"manish",
        phone:"123456789",
        email:"manish@gamil.com",
        address:"Pipari,Rayan,Bhadhoi"
    }
]

    return (
        
      <div className="row ml-auto">
      <div className="card">
        <div className="col-lg-12 m-t-2">
          <div className="card-columns">
            
          {supplyer.map((val,ind)=>{
              return (
                  <Supcard des={val} key={ind}/>
              )
          })}
             
          </div>
        </div>
      </div>
    </div>
    )
}
