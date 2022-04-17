import React from 'react'

export default function SellBillItem(props) {
    const data = props.des;
    return (
        <tr>
            <td>{props.sr}</td>
            <td>{data.name}</td>
          <td>{data.qty}</td>
          <td><i className="fa fa-inr" /> {data.price}</td>
          <td><i className="fa fa-inr" /> {data.price * data.qty}</td>
        </tr>
    )
}