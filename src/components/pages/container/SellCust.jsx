import React from 'react'

export default function SellCust(props) {
    const data = props.des;
    return (
        <tr>
        <td>{data.id}</td>
        <td> <span className="text-blue">{data.name}</span></td>
        <td>{data.mobile}</td>
        <td><button type="button" className="btn btn-info" data-toggle="tooltip" data-placement="top" title="Delete"> <i className=" ti-user" aria-hidden="true" />
          </button></td>
      </tr>
    )
}
