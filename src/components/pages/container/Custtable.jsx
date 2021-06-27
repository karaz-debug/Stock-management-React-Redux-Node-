import React from 'react'

export default function Custtable(props) {
    const data = props.des;
    return (
        <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.mobile}</td>
        <td>{data.age}</td>
        <td>{data.gender}</td> 
        <td>{data.dob}</td> 
        <td>
          <button type="button" className="btn btn-sm btn-primary mb-1"><i className="fa fa-edit"> </i> Edit</button>
          <span>  </span>
          <button type="button" className="btn btn-sm btn-danger mb-1"><i className="fa fa-trash-o"> </i> Delete</button>
        </td> 
      </tr>
    )
}
