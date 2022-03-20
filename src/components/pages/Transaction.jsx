import React from 'react'
import CustomerTrans from './container/CustomerTrans'

export default function Transaction() {
  const transcations = [
    {
      id: 1,
      name: "Manish",
      mobile: 98764311,
      product: "Apple",
      qty: 5,
      msr: "Kg",
      supplier: "Manya",
      time: "06:45 12/05/2021"
    },
    {
      id: 2,
      name: "Manish",
      mobile: 98764311,
      product: "Mango",
      qty: 5,
      msr: "Kg",
      supplier: "Manya",
      time: "06:45 12/05/2021"
    }
  ]
  return (
    <div className="row">
      <div className="col-lg-12">

        <div className="card">
          <div className="card-body">
      
            <ul className="nav nav-pills m-t-30 m-b-30">
              <li className=" nav-item"> <a href="#navpills-1" className="nav-link active show" data-toggle="tab" aria-expanded="false">Sell</a> </li>
              <li className="nav-item"> <a href="#navpills-2" className="nav-link " data-toggle="tab" aria-expanded="false">Purchase</a> </li>
            </ul>
            <div className="tab-content br-n m-t-2">
              <div id="navpills-1" className="tab-pane active show">
                <div className="row">
                  
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
             
                </tr>
              </thead>
              <tbody>
                {
                  transcations.map((val, ind) => {
                    return (
                      <CustomerTrans des={val} key={ind} />
                    )
                  })
                }
              </tbody>
            </table>
          </div>
                  
                  
                </div>
              </div>
              <div id="navpills-2" className="tab-pane ">
                <div className="row">
               
                <div className="table-responsive">
            <table className="table table-hover">
              <thead className="bg-danger text-white">
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Products</th>
                  <th>Quantity</th>
                  <th>Measurement</th>
                  <th>Price</th>
                  <th>Supplier</th>
                  <th>Time</th>
             
                </tr>
              </thead>
              <tbody>
                {
                  transcations.map((val, ind) => {
                    return (
                      <CustomerTrans des={val} key={ind} />
                    )
                  })
                }
              </tbody>
            </table>
          </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
