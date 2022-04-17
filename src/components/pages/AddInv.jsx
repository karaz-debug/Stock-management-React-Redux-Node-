import React from 'react'
import { useState } from 'react';
import AddInvRow from './container/AddInvRow';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function AddInv() {





  const Supplier = [
    {
      name: "Manish",
      id: 1,
      company:"Ubrosoft",
      phone:12365789
    },
    {
      name: "Ritesh",
      id: 2,
      company:"ABC",
      phone:9876543456
    },
    {
      name: "Vj",
      id: 3,
      company:"CMss",
      phone:5678987656
    }
  ]

  const [selectedSupplier, setSupplier] = useState({
    label: "",
    company:"",
    phone:""
  });

  const changeSupplier = (newValue) =>{
    if(newValue!= null){
      setSupplier(newValue);
      return;
    }
    setSupplier({
      label: "",
      company:"",
      phone:""
    });
  }
 



  const [formcount, setFormCount] = useState([
    {
      name: '',
      amount: '',
      msr: '',
      qty: '',
    },
  ]);


  const addForm = () => {
    setFormCount([...formcount, {
      name: '',
      amount: '',
      msr: '',
      qty: '',
    }])
  }
  const delForm = (id) => {
    setFormCount((oldlist) => {
      return oldlist.filter((arrElem, index) => {
        return index !== id;
      });
    })
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
                  f_data={val}
                  key={ind}
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
                    id="combo-box-demo"
                    options={Supplier}
                    getOptionLabel = {(opt)=>{
                    return opt.name;
                }}
                    sx={{ m: 1 }}
                    renderInput={(params) => <TextField {...params} label="Supplier Name" />}
                  />

                </div>
                <div className="col-md-3">
               
                  <TextField sx={{ margin: 1 }}
                    label='Company Name'
                    value={selectedSupplier.company}
                
                  />

                </div>
                <div className="col-md-3">
                  <TextField sx={{ margin: 1 }}
                    label='Supplier Phone'
              
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
