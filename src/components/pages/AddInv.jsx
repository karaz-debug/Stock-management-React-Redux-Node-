import React from 'react'
import { useState } from 'react';
import AddInvRow from './container/AddInvRow';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function AddInv() {

  const BuzType = [
    {
      name: "Plywood"
    },
    {
      name: "Garment"
    }
  ]

  const Produts = [
    {
      name:"Chair",
      hsn:45811125
    },
    {
      name:"Fevicol",
      hsn:788154
    },
    {
      name:"Table",
      hsn:9874521
    },
    {
      name:"Plywood Mica",
      hsn:845512
    },
    {
      name:"Door",
      hsn:103125
    },
  ]

  const Supplier = [
    {
      label: "Manish",
      id: 1,
      company:"Ubrosoft",
      phone:12365789
    },
    {
      label: "Ritesh",
      id: 2,
      company:"ABC",
      phone:9876543456
    },
    {
      label: "Vj",
      id: 3,
      company:"CMss",
      phone:5678987656
    }
  ]

  const [selectedSupplier, setSupplier] = React.useState({});

  const changeSupplier = (newValue) =>{
    if(newValue!= null){
      setSupplier(newValue);
      return;
    }
    setSupplier({
      label: "",
      company:"",
      phone:0
    });
  }
  const units = [
    {
      value: 'Peice',
      label: 'Pcs',
      cat: BuzType[0].name
    },
    {
      value: 'Weight',
      label: 'Kg',
      cat: BuzType[0].name
    },
    {
      value: 'Volumn',
      label: 'Ltr',
      cat: BuzType[0].name
    },
    {
      value: 'Packet',
      label: 'Pac',
      cat: BuzType[0].name
    },
    {
      value: '12 pcs',
      label: 'Dozen',
      cat: BuzType[0].name
    },
    {
      value: 'Foot',
      label: 'Foot',
      cat: BuzType[0].name
    },
    {
      value: 'mm',
      label: 'mm',
      cat: BuzType[0].name
    },
    {
      value: 'cm',
      label: 'cm',
      cat: BuzType[0].name
    },
    {
      value: 'Meter',
      label: 'mtr',
      cat: BuzType[0].name
    }
  ]



  const [formcount, setFormCount] = useState([
    {
      name: '',
      amount: '',
      msr: units[0].label,
      qty: '',
    },
  ]);


  const addForm = () => {
    setFormCount([...formcount, {
      name: '',
      amount: '',
      msr: units[0].label,
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
                  products = {Produts}
                  units={units}
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


                  <Autocomplete
                    onChange={(event, newValue) => {
                      changeSupplier(newValue);
                    }}
                    freeSolo
                    id="combo-box-demo"
                    options={Supplier}
                    sx={{ m: 1 }}
                    renderInput={(params) => <TextField {...params} label="Supplier Name" />}
                  />

                </div>
                <div className="col-md-3">
                  <TextField sx={{ margin: 1 }}
                    label='Company Name'
                    value={selectedSupplier.company}
                    defaultValue=' '
                  />

                </div>
                <div className="col-md-3">
                  <TextField sx={{ margin: 1 }}
                    label='Supplier Phone'
                    defaultValue=' '
                    value={selectedSupplier.phone}

                  />
                </div>
                <div className="col-md-3">
                <TextField sx={{ margin: 1 }}
                    label='Note'
                  />
                </div>
              </div>
              <div className="row m-t-2">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="firstName1">Tax %:</label>
                    <input className="form-control" max={100} maxLength={3} type="number" />
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
                  <label htmlFor="date1">Purchase Date</label>
                    <input className="form-control" id="date1" type="date" />
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
