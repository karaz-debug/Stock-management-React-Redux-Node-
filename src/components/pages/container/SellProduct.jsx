import React from 'react'

export default function SellProduct(props) {

  const data = props.des;
  const addCart = props.tocart;
  const [showWarning, setWarning] = React.useState({
    status: false,
    msg: ""
  })

  const [singleProduct, setProduct] = React.useState({
    id: data.id,
    qty: data.qty
  });

  const onQtyChange = (event) => {
    let inqty = parseInt(event.target.value);
    if (isNaN(inqty)) {
      setWarning({
        status: true,
        msg: "It Can't be blank"
      })
      setProduct({
        id: data.id,
        qty: inqty
      })
      return;
    }
    if (inqty > data.max_qty) {
      setWarning({
        status: true,
        msg: `Max Limit : ${data.max_qty}`
      })
      return;
    }
    else if (inqty < 0) {
      setWarning({
        status: true,
        msg: `Min Limit : 0`
      })
      return;
    }
    setWarning(false);
    setProduct({
      id: data.id,
      qty: inqty
    })

  }


  return (
    <tr>
      <td>{data.id}</td>
      <td><span className="text-blue font-weight-bold">{data.name}</span></td>
      <td style={{ width: '120px' }}>
        {showWarning.status ? <span id="errorMsg" style={{ color: '#f39c12' }}>{showWarning.msg}</span> : null}

        <input min={0} max={data.max_qty} onChange={onQtyChange} type="number" className="form-control input-sm" value={singleProduct.qty} />
      </td>
      <td>{data.msr}</td>
      <td><span className="text-green font-weight-bold"><i className="fa fa-inr" /> {data.price}</span></td>
      <td>{data.supplier}</td>
      <td><button type="button" onClick={() => { addCart(singleProduct) }} className="btn btn-info" data-toggle="tooltip" data-placement="top" title="Add To Cart"> <i className=" ti-shopping-cart" aria-hidden="true" /> </button></td>
    </tr>
  )
}
