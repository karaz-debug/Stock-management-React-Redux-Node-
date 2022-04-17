import React from 'react'

export default function SellCartProducts(props) {
    const data = props.des;
    return (
        <tr>
          <td>{data.name}</td>
          <td>{data.qty}</td>
          <td><i className="fa fa-inr" /> {data.price*data.qty}</td>
          <td>
            <button type="button" className="btn btn-danger btn-sm " onClick={()=> {props.removecart(props.index)}} data-toggle="tooltip" data-placement="top" title="Delete"> 
              <i className="fa fa-trash" aria-hidden="true" /> </button>
          </td>
        </tr>
    )
}
