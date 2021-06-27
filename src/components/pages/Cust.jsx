import React from 'react'
import Custtable from './container/Custtable'

export default function Cust() {
    const customers = [
        {
            id:1,
            name:"Manya",
            mobile:9876543210,
            age:21,
            gender:"Male",
            dob:'06/08/1999'
        },
        {
            id:1,
            name:"Manya",
            mobile:9876543210,
            age:21,
            gender:"Male",
            dob:'06/08/1999'
        },
        {
            id:1,
            name:"Manya",
            mobile:9876543210,
            age:21,
            gender:"Male",
            dob:'06/08/1999'
        },
    ]

    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {
                    customers.map((val,ind)=>{
                        return(
                            <Custtable des={val} key={ind}/>
                        )
                    })
                 }
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    )
}
