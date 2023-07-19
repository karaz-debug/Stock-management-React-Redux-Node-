import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function AddInvRow(props) {
  const [selproduct, setProduct] = useState({});

  const [rowdata, setRowData] = useState({
    unit: "unit",
    qty: null,
    hsn: null,
    purchase: null,
    selling: null,
  })


  //get data from redux or api
  const Produts = [
    {
      name: "Chair",
      hsn: 45811125,
      unit: 'Pcs'
    },
    {
      name: "Fevicol",
      hsn: 788154,
      unit: 'Pcs'
    },
    {
      name: "Table",
      hsn: 9874521,
      unit: 'Pcs'
    },
    {
      name: "Plywood Mica",
      hsn: 845512,
      unit: 'mtr'
    },
    {
      name: "Door",
      hsn: 103125,
      unit: 'Inch'
    },
  ]
  const units = [
    {
      value: 'Peice',
      label: 'Pcs',

    },
    {
      value: 'Weight',
      label: 'Kg',

    },
    {
      value: 'Volumn',
      label: 'Ltr',

    },
    {
      value: 'Packet',
      label: 'Pac',

    },
    {
      value: 'Count',
      label: 'Dozen',

    },
    {
      value: 'Scale',
      label: 'Foot',

    },
    {
      value: 'Scale',
      label: 'mm',

    },
    {
      value: 'Scale',
      label: 'cm',

    },
    {
      value: 'Scale',
      label: 'mtr',
    },
    {
      value: "Scale",
      label: 'Inch'
    }
  ]



  const changeProduct = (newValue) => {
    if (newValue != null) {
      setProduct(newValue);
      console.log(newValue)
      setRowData({ ...rowdata, ['hsn']: newValue.hsn, ['unit']: newValue.unit })
      console.log(rowdata)
      return;
    }
    setProduct({
      name: "",
      hsn: ""
    });
    setRowData({ hsn: selproduct.hsn })

  }



  // const handleChange = (evt) => {
  //   let val = evt.target.value;
  //   setRowData({
  //     ...rowdata,
  //     [evt.target.name]: val
  //   });




  // }
  const handleChange = (evt) => {
    let val = evt.target.value;
    setRowData((prevRowData) => ({
      ...prevRowData,
      [evt.target.name]: val,
    }));
    props.handleRowChange(props.index, { ...rowdata, [evt.target.name]: val });
  };


  return (
    <div className="row">
      <div className="col-10">
        <form>
          <div className="row">
            <div className="col-sm-10 col-lg-3">


              <Autocomplete
                freeSolo
                required
                options={Produts}
                getOptionLabel={(opt) => {
                  return opt.name;
                }}
                onChange={(event, newValue) => {
                  changeProduct(newValue);
                }}
                sx={{ m: 1 }}
                renderInput={(params) => <TextField {...params} label="Product Name" />}
              />
            </div>
            <div className="col-sm-10 col-lg-3">
              <TextField sx={{ margin: 1 }}
                id="prd_desc"
                label='Product Description'
                name="name"
              />
            </div>
            <div className="col-sm-10 col-lg-3">
              <TextField sx={{ margin: 1 }}
                onChange={handleChange}
                id="prd_hsn"
                name="model"
                value={rowdata.model}
                required
                label='Product HSN'
                defaultValue=' '
              />
            </div>
            <div className="col-sm-10 col-lg-3">
              <FormControl sx={{ m: 1, minWidth: 140 }}>
                <InputLabel id="demo-simple-select-helper-label">Units</InputLabel>
                <Select
                  name='unit'
                  value={rowdata.unit}
                  onChange={handleChange}
                  label="Units">

                  {units.map((val, ind) => {
                    return (<MenuItem value={val.label}>{val.label}</MenuItem>)
                  })}
                </Select>
              </FormControl>
            </div>
            {/* <div className="col-sm-10 col-lg-3">
              <TextField sx={{ margin: 1 }}

                id="prd_size"

                label='Product size'
              />
            </div> */}
            <div className="col-sm-10 col-lg-3">
              <TextField
                label='Quantity'
                type="number"
                name='quantity'
                value={rowdata.quantity}
                onChange={handleChange}
                sx={{ m: 1 }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{rowdata.unit}</InputAdornment>,
                }}
              />
            </div>

            <div className="col-sm-10 col-lg-3">
              <FormControl sx={{ m: 1 }}>
                <InputLabel >Purchase Amount</InputLabel>
                <OutlinedInput
                  type='number'
                  name='pamount'
                  value={rowdata.pamount}
                  onChange={handleChange}
                  startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                  label="Purchase Amount"
                />
                <FormHelperText >Per {rowdata.unit}</FormHelperText>
              </FormControl>

            </div>
            <div className="col-sm-10 col-lg-3">
              <FormControl sx={{ m: 1 }}>
                <InputLabel >Selling Amount</InputLabel>
                <OutlinedInput
                  type='number'
                  name='samount'
                  value={rowdata.samount}
                  onChange={handleChange}
                  startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                  label="Selling Amount"

                />
                <FormHelperText >Per {rowdata.unit}</FormHelperText>
              </FormControl>
            </div>

          </div>
        </form>
      </div>

      <div className="col-10 col-lg-2 ">

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel >Total Puchase</InputLabel>
          <OutlinedInput
            value={rowdata.pamount * rowdata.quantity}
            type="number"
            disabled
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Total Puchase"

          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel >Total Selling</InputLabel>
          <OutlinedInput
            value={rowdata.samount * rowdata.quantity}
            type="number"
            disabled
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Total Selling"
          />
        </FormControl>


        <button type="button" style={{ width: 'auto', marginTop: '15px' }}
          onClick={props.delFormI}
          className="btn btn-danger"><i className="fa fa-minus"></i></button>
      </div>
      <hr style={{ width: '95%', height: '2px', backgroundColor: 'rgb(235 243 251)' }} />
    </div>


  )
}
