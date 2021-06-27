import React from 'react'
import CustomerTrans from './container/CustomerTrans'

export default function Transaction() {
    const transcations = [
        {
            id:1,
            name:"Manish",
            mobile:98764311,
            product:"Apple",
            qty:5,
            msr:"Kg", 
            supplier:"Manya", 
            time:"06:45 12/05/2021"
        },
        {
            id:2,
            name:"Manish",
            mobile:98764311,
            product:"Mango",
            qty:5,
            msr:"Kg", 
            supplier:"Manya", 
            time:"06:45 12/05/2021"
        }
    ]
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="bg-success text-white">
                  <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Measurement</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    transcations.map((val,ind)=>{
                        return(
                            <CustomerTrans des={val} key={ind}/>
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
