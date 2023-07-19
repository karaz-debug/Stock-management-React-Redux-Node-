
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';


export default function Inventable(props) {
  const data = props.des;
  const [products, setProducts] = useState(data);
  const history = useHistory();


  const handleDelete = (id) => {
    // Get the authentication token from local storage
    const authToken = localStorage.getItem('authToken');
    const apiEndpoint = `/api/products/${id}`;
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
    axios
      .delete(apiEndpoint, { headers })
      .then((response) => {
        console.log('Product deleted successfully');
        axios
          .get('/api/products')
          .then((response) => {
            // Update the product list with the new data
            setProducts(response.data);

            console.log('Product list updated after deletion.');
          })
          .catch((error) => {
            console.error('Error fetching products after deletion:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  const handleEdit = (productId) => {
    // Navigate to the dynamic page with the product ID as a parameter
    history.push(`/edit-product/${productId}`);
  };
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.product}</td>
      <td>{data.description}</td>
      <td>{data.model}</td>
      <td>{data.quantity}</td>
      <td>{data.unit}</td>
      <td> ₹ {data.pamount}</td>
      <td> ₹ {data.samount}</td>
      <td><span className="text-success text-semibold">
        <i className="fa fa-level-up" aria-hidden="true" />
        &nbsp;Rs.{data.totalSelling - data.totalPurchase}</span>
      </td>
      <td>{data.supplier_name}</td>
      <td>
        <button type="button" className="btn btn-sm btn-primary" onClick={() => handleEdit(data.id)}>
          <i className="fa fa-edit"> </i> Edit
        </button>
        <span>  </span>
        <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(data.id)}>
          <i className="fa fa-legal"> </i> Delete
        </button>
      </td>
    </tr>
  )
}

