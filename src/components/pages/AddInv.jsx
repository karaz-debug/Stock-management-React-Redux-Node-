import React from 'react'
import { useState } from 'react';
import AddInvRow from './container/AddInvRow';


export default function AddInv() {


  const measurement = [
    {
      value: 'Peice',
      label: 'Pcs',
    },
    {
      value: 'Weight',
      label: 'KG',
    },
    {
      value: 'Volumn',
      label: 'L',
    },
    {
      value: 'Packet',
      label: 'Pac',
    },
    {
      value: '12 pcs',
      label: 'Durjan',
    },
  ];


  const [formcount, setFormCount] = useState([
    {
      name: '',
      amount: '',
      msr: measurement[0].label,
      qty: '',
    },
  ]);


  const addForm = () => {
    setFormCount([...formcount, {
      name: '',
      amount: '',
      msr: measurement[0].label,
      qty: '',
    }])
  }
  const delForm = (id) => {
    // let tempList = formcount.slice();
    // tempList.splice(id,1);
    // setFormCount(tempList);
    setFormCount((oldlist) => {
      return oldlist.filter((arrElem, index) => {
        return index !== id;
      });
    })
  }

  const insertData = (id, label, val) => {
    if (label === 'name') {
      setFormCount((oldlist) => {
        oldlist[id].name = val;
        return oldlist;
      })
    }
    else if (label === 'pamount') {
      setFormCount((oldlist) => {
        oldlist[id].amount = val;
        return oldlist;
      })
    }
    else if (label === 'msr') {
      setFormCount((oldlist) => {
        oldlist[id].msr = val;
        return oldlist;
      })
    }
    else if (label === 'qty') {
      setFormCount((oldlist) => {
        oldlist[id].qty = val;
        return oldlist;
      })
    }


  }


  return (


    <div className="row">
      <div className="col-lg-12">
        <div className="card ">
          <div className="card-header bg-light-blue-active">
            <h5 className="text-white m-b-0">ADD PRODUCT</h5>
          </div>
          <div className="card-body">


            {formcount.map((val, ind) => {
              return (
                <AddInvRow
                  measurement={measurement}
                  f_data={val}
                  key={ind}
                  insData={(label, value) => { insertData(ind, label, value) }}
                  delFormI={() => { delForm(ind) }} />
              )

            })}
            <button type="button" style={{ margin: '10px' }}
              onClick={addForm}
              className="btn btn-success"><i className="fa fa-plus"></i></button>
            <div id="row">

              <div className="row m-t-2">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="firstName1">Supplier Name:</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="lastName1">Company Name:</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="firstName1">Phone:</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                  <label htmlFor="date1">Date</label>
                    <input className="form-control" id="date1" type="date" />
                  </div>
                </div>
              </div>
              <div className="row m-t-2">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="firstName1">Tax %:</label>
                    <input className="form-control" type="number" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="lastName1">Discount %:</label>
                    <input className="form-control" type="number" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                  <label htmlFor="lastName1">Total:</label>
                    <input className="form-control" type="number" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                  <label htmlFor="lastName1">Note:</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-info"
                  style={{ margin: '10px' }}
                  onClick={() => { console.log(formcount) }}>
                  Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
