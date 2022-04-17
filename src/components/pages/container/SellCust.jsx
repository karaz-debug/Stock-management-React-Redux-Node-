import React from 'react'

export default function SellCust(props) {
    const data = props.des;
    return (
        <tr>
        <td>{props.srno}</td>
        <td> <span className="text-blue">{data.name}</span></td>
        <td>{data.mobile}</td>
        <td>{data.gstno}</td>
        <td><button type="button"
          onClick={()=>{props.selectcust(data.id)}}
         className="btn btn-info" data-toggle="tooltip" data-placement="top" title="Delete"> <i className=" ti-user" aria-hidden="true" />
          </button></td>
      </tr>
    )
}
