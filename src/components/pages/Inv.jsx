import React,{useEffect} from 'react';
import Inventable from './container/Inventable';

export default function Inv() {
  
  const products = [
    {
        id:1,
        product:"Something",
        description:"",
        hsn:5486215,
        qty:15,
        unit:"kg",
        purchase_amt:18,
        selling_amt:50,
        sup_id:1,
        sup_name:"Manish"
    },
    {
      id:2,
      product:"Fevicol",
      description:"",
      hsn:5486215,
      qty:10,
      unit:"kg",
      purchase_amt:20,
      selling_amt:22,
      sup_id:1,
      sup_name:"Manish"
  },
  {
    id:3,
    product:"Plywood",
    description:"",
    hsn:5486215,
    qty:12,
    unit:"foot",
    purchase_amt:45,
    selling_amt:55,
    sup_id:1,
    sup_name:"Manish"
},
];

useEffect(() => {
  const script = document.createElement('script');
  script.innerHTML=`
  
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
                    <th className='text-white'>HSN</th>
                    <th className='text-white'>Quantity</th>
                    <th className='text-white'>Purchase Price</th>
                    <th className='text-white'>Saling Price</th>
                    <th className='text-white'>Profit</th>
                    <th className='text-white'>Supplier</th>
                    <th className='text-white'>Action</th>
                  </tr>
              </thead>
              <tbody style={ {background: '#f0f4f8'}}>
               {
                products.map((val,ind)=>{
                      return(
                            <Inventable des={val} key={ind}/>
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
