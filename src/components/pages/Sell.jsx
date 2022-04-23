import React, { useEffect, useState } from 'react'
import SellCartProducts from './container/SellCartProducts'
import SellProduct from './container/SellProduct'
import SellCust from './container/SellCust'
import AddCust from './AddCust'
import SellBillItem from './container/SellBillItem'

export default function Sell() {


  const [cartprize,setPrize] = useState(0);
  const [bill,setBill] = useState({
    tax:0,
    taxamount:0,
    discount:0,
    discountamount:0,
    invoice:1254,
    orderID:12,
    cartprize:0
  });


  const changeBill = (event)=>{
   let name1 = event.target.name;
   let value1 = event.target.value;
   let amount = 0;
    if(name1 == 'tax'){

      amount = (bill.cartprize*value1)/100;
      
      setBill({...bill,
          tax:value1,
          taxamount:amount
      });
    }
    else if(name1 == 'discount'){
      amount = (bill.cartprize*value1)/100;
      setBill({...bill,
        discount:value1,
        discountamount:amount
    });
    }
  }


  const [cartproducts,setCartProduct] = useState([
  ]);
  const addToCart = (singleProduct) =>{
  //  console.log('cart',singleProduct)
    let pind = products.findIndex(p => p.id == singleProduct.id);
    setCartProduct(cartproducts => [...cartproducts,{
      id:singleProduct.id,
      name:products[pind].name,
      qty:singleProduct.qty,
      price:products[pind].price
    }])
  }

  const removeFromCart = (ind)=>{
    setCartProduct((cartproducts) => {
      return cartproducts.filter((arrElem, index) => {
        return index !== ind;
      });
    })
  }

  useEffect(() => {
    let tltprize = 0;
    cartproducts.map((val,ind)=>{
      tltprize+=val.price*val.qty
    });
    setPrize(tltprize);
    setBill({...bill,
      cartprize:tltprize
  });
  }, [cartproducts]);



  const [selectedCustomer,setSelectedCustomer] = useState({});
  const selectCustomer = (cid)=>{

    let cust = custmors.find(c => c.id == cid);
    setSelectedCustomer(cust);
    //console.log(selectedCustomer);
  }

  
 

 
  const products = [
    {
      id: 1,
      name: "Fevicol",
      qty: 1,
      max_qty: 15,
      msr: "Ltr",
      price: 450,
      supplier: "Rishub"
    },
    {
      id: 2,
      name: "Paint",
      qty: 1,
      max_qty: 6,
      msr: "Ltr",
      price: 50,
      supplier: "Manya"
    }, {
      id: 3,
      name: "Plywood",
      qty: 1,
      max_qty: 6,
      msr: "Mtr",
      price: 500,
      supplier: "Manya"
    }, {
      id: 4,
      name: "Door",
      qty: 1,
      max_qty: 6,
      msr: "Inch",
      price: 650,
      supplier: "Manya"
    },
  ]
  const custmors = [
    { 
      id:1,
      name:"Irene Richards",
      mobile:"6-611-013-1451",
      gstno:"32855352081"
      },
      { 
      id:2,
      name:"Wade Cattell",
      mobile:"3-476-602-7870",
      gstno:"40080478471"
      },
      { 
      id:3,
      name:"Caleb Butler",
      mobile:"3-514-214-3661",
      gstno:"74015758051"
      },
      { 
      id:4,
      name:"Taylor Graves",
      mobile:"4-020-326-4517",
      gstno:"77024246120"
      },
      { 
      id:5,
      name:"Phillip Tailor",
      mobile:"2-653-873-6400",
      gstno:"83606045814"
      },
      { 
      id:6,
      name:"Abbey Chappell",
      mobile:"7-101-381-0808",
      gstno:"83545187300"
      },
      { 
      id:7,
      name:"Gladys Ralph",
      mobile:"0-127-350-1213",
      gstno:"47101623865"
      }
      ,
      { 
      id:8,
      name:"Marigold Andersson",
      mobile:"2-517-040-4714",
      gstno:"85801500138"
      },
      { 
      id:9,
      name:"Vivian Hammond",
      mobile:"0-850-005-7435",
      gstno:"21032683340"
      },
      { 
      id:10,
      name:"Regina Lynn",
      mobile:"4-331-044-1845",
      gstno:"47415155162"
      }   
  ]

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML=`
    try {
    $('#customerList').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : false,
      'info'        : true,
      'autoWidth'   : false
    });
    $('#productList').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : false,
      'info'        : true,
      ' autoWidth'   : false
    }) 
  } catch (error) {
      window.location = '/'
  }`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="row">
      <div className="col-lg-4">
        {/* Product List */}
        <div className="box box-primary">
          <div className="box-profile">
            <h3 className="profile-username text-center">{selectedCustomer.name}</h3>
            <p className="text-blue text-center"> {selectedCustomer.mobile}</p>
            <ul className="nav nav-stacked sty1">
              <div className="table-responsive">
                <table className="table no-wrap table-striped">
                  <thead className="bg-light-blue">
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th id='print'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartproducts.map((val, ind) => {
                      return (
                        <SellCartProducts des={val} key={ind} index={ind} removecart = {(id)=>{removeFromCart(id)}} />
                      )
                    })}

                  </tbody>
                  <tfoot>
                    <tr>
                      <td />
                    </tr>
                    <tr className="bg-gray">
                      <td />
                      <td />
                      <th>Total:</th>
                      <th className="text-blue"><i className="fa fa-inr" /> {cartprize}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </ul>
            <button className="btn btn-success btn-block" data-toggle="modal" data-target="#reciptModel" >Submit</button>

          </div>
          {/* /.box-body */}
        </div>
        {/* /.box */}
      </div>
      {/* /.col */}
      <div className="col-lg-8">

        <div className="card tab-style1">
          {/* Nav tabs */}
          <ul className="nav nav-tabs profile-tab" role="tablist">
            <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#product" role="tab" aria-expanded="true">Product</a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#customer" role="tab" aria-expanded="false">Customer</a> </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane active" id="product" role="tabpanel" aria-expanded="true">
              <div className="card-body">
                <div className="box-body">
                  <div className="right-page-header">
                    <div className="d-flex">
                      <div className="align-self-center">
                        <h4 className="text-black m-b-1">Product List </h4>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
              <table id="productList" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Msr</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((val, ind) => {
                      return (
                        <SellProduct des={val} key={ind}  tocart ={(prd)=> addToCart(prd)} />
                      )
                    })
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Msr</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
                </div>
              </div>
            </div>
            {/*second tab*/}
            <div className="tab-pane" id="customer" role="tabpanel" aria-expanded="false">
              <div className="card-body">
                <div className="box-body">

                  <AddCust />
                  <br />
                  <div className="right-page-header">
                    <div className="d-flex">
                      <div className="align-self-center">
                        <h4 className="text-black m-b-1">Customer List </h4>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table id="customerList" className="table table-bordered table-hover no-wrap">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Gst</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          custmors.map((val, ind) => {
                            return (
                              <SellCust des={val} key={ind} srno={ind+1} selectcust ={(cid)=>{ selectCustomer(cid)}} />
                            )
                          })
                        }

                      </tbody>
                      <tfoot>
                      <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Gst</th>
                          <th>Action</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

      </div>




      {/* The Modal */}
      <div className="modal fade" id="reciptModel">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="col">
                <h4 className="modal-title"><strong>Company Name</strong>  </h4>
                <address>
                  2nd Floor, Janki Nagar Mod,<br /> Lanka, Samne Ghat Rd,<br /> near BHU Trauma Centre,<br /> Varanasi, Uttar Pradesh 221005

                  <br />
                  Phone:<b> 9876543110</b><br />
                  Email:<b>demo@ubrosoft.com </b>
                </address>
              </div>


              <div className="col-sm-4 invoice-col"> <b>Invoice #007612</b><br />
                <b>Order ID:</b> 4F3S8J<br />
                <b>Payment Due:</b> 2/22/2014<br />
                <b>GST:</b> 968-34567 </div>

            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="row ">
                <div className="col-xs-12 table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Sr.</th>
                        <th>Product</th>
                        <th>Qty </th>
                        <th>Price</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        
                        cartproducts.map((val,ind)=>{
                           return <SellBillItem  des={val} key={ind} sr={ind+1}/>
                        })
                      }
                    </tbody>
                  </table>
                </div>
                <div className="col-6">

                  <form className="form-horizontal ">
                    <div className="form-group row">
                      <label htmlFor="uname" className="col-sm-3 control-label">Payment</label>
                      <div className="col-sm-6">
                        <select className="form-control" style={{ fontSize: '0.75rem' }}>
                          <option>Cash</option>
                          <option>Online</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="email2" className="col-sm-3 control-label">Tax</label>
                      <div className="col-sm-6">
                        <div className="input-group">
                          <input className="form-control" placeholder="0" name='tax' onChange={changeBill} type="number" />
                          <div className="input-group-addon">%</div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="web1" className="col-sm-3 control-label">Discount</label>
                      <div className="col-sm-6">
                        <div className="input-group">
                          <input className="form-control" id="web1" placeholder="0" name='discount' onChange={changeBill} type="number" />
                          <div className="input-group-addon">%</div>
                        </div>
                      </div>
                    </div>


                  </form>

                </div>

                <div className="col-6">

                  <div className="table-responsive">
                    <table className="table ">
                      <tbody><tr>
                        <th>Subtotal:</th>
                        <td>₹{bill.cartprize}</td>
                      </tr>
                        <tr>
                          <th>Tax ({bill.tax}%)</th>
                          <td>₹{bill.taxamount}</td>
                        </tr>
                        <tr>
                          <th>Discount({bill.discount}%):</th>
                          <td>₹{bill.discountamount}</td>
                        </tr>
                        <tr>
                          <th>Total:</th>
                          <td><span className="text-green font-weight-bold"><i className="fa fa-inr" /> {bill.cartprize + bill.taxamount-bill.discountamount}</span></td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>

              <button type="button" className="btn btn-success pull-right" data-dismiss="modal"><i className="fa fa-credit-card" /> Submit  </button>

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
