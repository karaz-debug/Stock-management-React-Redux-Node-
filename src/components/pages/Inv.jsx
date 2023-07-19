
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Inventable from './container/Inventable';

export default function Inv() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `

  try {
    $('#productList').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : false,
      'info'        : true,
      'autoWidth'   : false
    })
  } catch (error) {
      window.location = '/'
  }`;
    script.async = true;
    document.body.appendChild(script);
  }, []);


  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL to fetch all products
    const apiEndpoint = '/api/products';

    axios
      .get(apiEndpoint)
      .then((response) => {
        // Assuming the API response contains the products data as an array
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card p-3">
          <div className="table-responsive">
            <table id='productList' className="table table-hover">
              <thead className="bg-primary text-white">
                <tr>
                  <th className='text-white'>#</th>
                  <th className='text-white'>Product</th>
                  <th className='text-white'>Description</th>
                  <th className='text-white'>Model</th>
                  <th className='text-white'>Quantity</th>
                  <th className='text-white'>Purchase Price</th>
                  <th className='text-white'>Selling Price</th>
                  <th className='text-white'>Profit</th>
                  <th className='text-white'>Supplier</th>
                  <th className='text-white'>Action</th>
                </tr>
              </thead>
              <tbody style={{ background: '#f0f4f8' }}>
                {
                  products.map((val, ind) => {
                    return (
                      <Inventable des={val} key={ind} />
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}
