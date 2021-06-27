import React from 'react'
import Inventable from './container/Inventable'
export default function Inv() {
    const products=[
        {
            id:1,
            product:"Something",
            qty:1,
            mes:"45kg",
            og_price:68,
            profit:22,
            sale_price:90,
            supplier:"Manish"
        },
        {
            id:1,
            product:"Something",
            qty:1,
            mes:"45kg",
            og_price:60,
            profit:22,
            sale_price:90,
            supplier:"Manish"
        },
        {
            id:1,
            product:"Something",
            qty:1,
            mes:"45kg",
            og_price:68,
            profit:22,
            sale_price:90,
            supplier:"Manish"
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
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Measurement</th>
                    <th>Original Price</th>
                    <th>Profit</th>
                    <th>Saling Price</th>
                    <th>Supplier</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((val,ind)=>{
                      return(
                            <Inventable des={val} key={ind}/>
                      )
                  })}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    )
}
