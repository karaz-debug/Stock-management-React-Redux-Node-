import React from 'react'

export default function SellProduct(props) {
    const data = props.des;
    return (
        <tr>
          <td>{data.id}</td>
          <td><span className="text-blue font-weight-bold">{data.name}</span></td>
          <td style={{width: '120px'}}>
            <input min={0} max={data.max_qty} oninput="validity.valid || (value='')" type="number" className="form-control input-sm" defaultValue={data.qty} />
          </td>
          <td>{data.msr}</td>
          <td><span className="text-green font-weight-bold"><i className="fa fa-inr" /> {data.price}</span></td>
          <td>{data.supplier}</td>
          <td><button type="button" className="btn btn-info" data-toggle="tooltip" data-placement="top" title="Add To Cart"> <i className=" ti-shopping-cart" aria-hidden="true" /> </button></td>
        </tr>
    )
}
