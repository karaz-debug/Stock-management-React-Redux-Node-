import React from 'react'


export default function Inventable(props) {
    const data = props.des;
    return (
  
    
    // unit:"foot",
    // purchase_amt:45,
    // selling_amt:55,
    // sup_id:1,
    // sup_name:"Manish"
        <tr>
        <td>{data.id}</td>
        <td>{data.product}</td>
        <td>{data.description}</td>
        <td>{data.hsn}</td>
        <td>{data.qty} {data.unit}</td>
        <td> ₹ {data.purchase_amt}</td>
        <td> ₹ {data.selling_amt}</td>
        <td><span className="text-success text-semibold">
        <i className="fa fa-level-up" aria-hidden="true" />
          &nbsp;Rs.{data.selling_amt - data.purchase_amt}</span> 
         </td>
        <td>{data.sup_name}</td> 
        <td>
          <button type="button" className="btn btn-sm btn-primary"><i className="fa fa-edit"> </i> Edit</button>
          <span>  </span>
          <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-legal"> </i> Delete</button>
        </td> 
      </tr>
    )
}
