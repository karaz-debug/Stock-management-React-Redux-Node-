import React from 'react'
import SellCartProducts from './container/SellCartProducts'
import SellProduct from './container/SellProduct'
import SellCust from './container/SellCust'
import AddCust from './AddCust'

export default function Sell() {

  const cartproducts = [
    {
      name: "Apple",
      qty: "5 kg",
      price: 450
    },
    {
      name: "Apple",
      qty: "5 kg",
      price: 450
    },
    {
      name: "Apple",
      qty: "5 kg",
      price: 450
    }
  ]
  const products = [
    {
      id: 1,
      name: "Apple",
      qty: 5,
      max_qty: 15,
      msr: "Kg",
      price: 450,
      supplier: "Manya"
    },
    {
      id: 2,
      name: "Mango",
      qty: 5,
      max_qty: 6,
      msr: "Kg",
      price: 450,
      supplier: "Manya"
    },
  ]
  const custmors = [
    {
      id: 1,
      name: "Manish",
      mobile: +97444646454
    }
  ]

  return (
    <div className="row">
      <div className="col-lg-4">
        {/* Product List */}
        <div className="box box-primary">
          <div className="box-profile">
            <h3 className="profile-username text-center">Customer Name</h3>
            <p className="text-blue text-center"> +123 456 7890 </p>
            <ul className="nav nav-stacked sty1">
              <div className="table-responsive">
                <table className="table no-wrap table-striped">
                  <thead className="bg-light-blue">
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartproducts.map((val, ind) => {
                      return (
                        <SellCartProducts des={val} key={ind} />
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
                      <th className="text-blue"><i className="fa fa-inr" /> 200</th>
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
                      <div className="ml-auto">
                        <input id="demo-input-search2" placeholder="Search Product" className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table id="example2" className="table table-bordered table-hover no-wrap">
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
                              <SellProduct des={val} key={ind} />
                            )
                          })
                        }
                      </tbody>
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
                      <div className="ml-auto">
                        <input id="demo-input-search2" placeholder="Search Customer" className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table id="example2" className="table table-bordered table-hover no-wrap">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          custmors.map((val, ind) => {
                            return (
                              <SellCust des={val} key={ind} />
                            )
                          })
                        }

                      </tbody>
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
                      <tr>
                        <td>1</td>
                        <td>Call of Duty</td>
                        <td>5</td>
                        <td>500</td>
                        <td>$64.50</td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Grown Ups Blue Ray</td>
                        <td>642</td>
                        <td>54</td>
                        <td>$25.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-6">

                  <form className="form-horizontal ">
                    <div className="form-group row">
                      <label htmlFor="uname" className="col-sm-3 control-label">Payment</label>
                      <div className="col-sm-6">
                        <select className="form-control" style={{fontSize: '0.75rem'}}>
                          <option>Cash</option>
                          <option>Online</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="email2" className="col-sm-3 control-label">Tax</label>
                      <div className="col-sm-6">
                        <div className="input-group">
                          <input className="form-control" placeholder="14" type="number" />
                          <div className="input-group-addon">%</div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="web1" className="col-sm-3 control-label">Discount</label>
                      <div className="col-sm-6">
                        <div className="input-group">
                          <input className="form-control" id="web1" placeholder="5" type="number" />
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
                        <td>$250.30</td>
                      </tr>
                        <tr>
                          <th>Tax (9.3%)</th>
                          <td>$10.34</td>
                        </tr>
                        <tr>
                          <th>Discount(10.5%):</th>
                          <td>$5.80</td>
                        </tr>
                        <tr>
                          <th>Total:</th>
                          <td>$265.24</td>
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
