import React from 'react'
import Card from './container/Card'


export default function Home() {

    const cards = [
        {
            gradent: "box-gradient-4",
            icon: "fa fa-inr",
            title: "Total Profit",
            number: "800",
            subtitle: " This Day "
        },
        {
            gradent: "box-gradient-2",
            icon: "fa fa-inr",
            title: "Total Profit",
            number: "8,450",
            subtitle: " This Week "
        },
        {
            gradent: "box-gradient-3",
            icon: "fa fa-inr",
            title: "Total Profit",
            number: "64,500",
            subtitle: " This Month "
        }, {
            gradent: "box-gradient-1",
            icon: "ti-face-smile",
            title: "Customer",
            number: "2,040",
            subtitle: " Total Customer Count "
        },
        {
            gradent: "bg-primary",
            icon: "icon-briefcase",
            title: "Supplier",
            number: "8,590",
            subtitle: " Total Supplier Count "
        },
        {
            gradent: "box-gradient",
            icon: "ti-stats-up",
            title: "Total Orders",
            number: "5,500",
            subtitle: "This Month "
        },

        {
            gradent: "box-gradient",
            icon: "ti-shopping-cart",
            title: "Total Purchase",
            number: "8,450",
            subtitle: " This Month "
        }
    ];
    return (
        <>
        <div className="row">
            {cards.map((val, ind) => {
                return (
                    <Card des={val} key={ind} />
                )
            })}
           </div>
            <div className="row">
        <div className="col-lg-12 ">
          <div className="box box-info">
            <div className="box-header with-border p-t-1">
              <h3 className="box-title text-black">Latest Orders</h3>
             
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <div className="table-responsive">
                <table className="table no-margin">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Item</th>
                      <th>Customer Name</th>
                      <th>Categories</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#">OR9842</a></td>
                      <td>Call of Duty IV</td>
                      <td>John Deo</td>
                      <td><button type="button" className="btn btn-sm btn-outline-danger btn-rounded">Mobile</button></td>
                      <td><span className="label label-success">Shipped</span></td>
                      <td> $ 1200.00 </td>
                    </tr>
                    <tr>
                      <td><a href="#">OR1848</a></td>
                      <td>Samsung Smart TV</td>
                      <td>John Deo</td>
                      <td><button type="button" className="btn btn-sm btn-outline-success btn-rounded">Tablet</button></td>
                      <td><span className="label label-warning">Pending</span></td>
                      <td> $ 5300.00 </td>
                    </tr>
                    <tr>
                      <td><a href="#">OR7429</a></td>
                      <td>iPhone 6 Plus</td>
                      <td>John Deo</td>
                      <td><button type="button" className="btn btn-sm btn-outline-success btn-rounded">Tablet</button></td>
                      <td><span className="label label-danger">Delivered</span></td>
                      <td> $ 1500.00 </td>
                    </tr>
                    <tr>
                      <td><a href="#">OR7429</a></td>
                      <td>Samsung Smart TV</td>
                      <td>John Deo</td>
                      <td><button type="button" className="btn btn-sm btn-outline-danger btn-rounded">Mobile</button></td>
                      <td><span className="label label-info">Processing</span></td>
                      <td> $ 2000.00 </td>
                    </tr>
                    <tr>
                      <td><a href="#">OR1848</a></td>
                      <td>Samsung Smart TV</td>
                      <td>John Deo</td>
                      <td><button type="button" className="btn btn-sm btn-outline-success btn-rounded">Tablet</button></td>
                      <td><span className="label label-warning">Pending</span></td>
                      <td> $ 2500.00 </td>
                    </tr>
                    <tr>
                      <td><a href="#">OR7429</a></td>
                      <td>iPhone 6 Plus</td>
                      <td>John Deo</td>
                      <td><button type="button" className="btn btn-sm btn-outline-danger btn-rounded">Mobile</button></td>
                      <td><span className="label label-danger">Delivered</span></td>
                      <td> $ 3000.00 </td>
                    </tr>
                    <tr>
                      <td><a href="#">OR9842</a></td>
                      <td>Call of Duty IV</td>
                      <td>John Deo</td>
                      <td><button type="button" className="btn btn-sm btn-outline-success btn-rounded">Tablet</button></td>
                      <td><span className="label label-success">Shipped</span></td>
                      <td> $ 1000.00 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.table-responsive */} 
            </div>
            {/* /.box-body */}
            <div className="box-footer clearfix"> <a href="javascript:void(0)" className="btn btn-sm btn-info btn-flat pull-left">Place New Order</a> <a href="javascript:void(0)" className="btn btn-sm btn-default btn-flat pull-right">View All Orders</a> </div>
            {/* /.box-footer */} 
          </div>
        </div>
      </div>

      </>
    )
}
