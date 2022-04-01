import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import Autocomplete from '@mui/material/Autocomplete';


export default function AddInvRow(props) {


  const [selproduct,setProduct] = useState({});


  const changeProduct = (newValue) =>{
    if(newValue!= null){
      setProduct(newValue);
      return;
    }
    setProduct({
     name:"",
     hsn:""
    });
  }
  const [values, setValues] = useState(props.f_data);

  const handleDataChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.insData(prop, event.target.value)
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
                options={props.products}
                getOptionLabel = {(opt)=>{
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

                onChange={handleDataChange('desc')}
                id="prd_desc"
                value={props.f_data.name}
                label='Product Description'
              />
            </div>
            <div className="col-sm-10 col-lg-3">
              <TextField sx={{ margin: 1 }}
                onChange={handleDataChange('hsn')}
                id="prd_hsn"
                value={selproduct.hsn}
                required
                label='Product HSN'
                defaultValue=' '
              />
            </div>
            <div className="col-sm-10 col-lg-3">
              <Autocomplete
                  
                id="combo-box-demo"
                options={props.units}
                sx={{ m: 1 }}
                renderInput={(params) => <TextField {...params} label="Units" />}
              />
            </div>
            <div className="col-sm-10 col-lg-3">
              <TextField sx={{ margin: 1 }}
                onChange={handleDataChange('size')}
                id="prd_size"
                value={props.f_data.name}
                label='Product size'
              />
            </div>
            <div className="col-sm-10 col-lg-3">


              <TextField
                label='Quantity'
                value={props.f_data.qty}
                type="number"
                onChange={handleDataChange("qty")}
                sx={{ m: 1}}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{props.f_data.msr}</InputAdornment>,
                }}
              />
            </div>
            
          <div className="col-sm-10 col-lg-3">
            <FormControl  sx={{ m: 1 }}>
              <InputLabel >Purchase Amount</InputLabel>
              <OutlinedInput

                value={values.amount}
                onChange={handleDataChange('pamount')}
                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                label="Purchase Amount"
              />
              <FormHelperText >Per {props.f_data.msr}</FormHelperText>
            </FormControl>

            </div>
          <div className="col-sm-10 col-lg-3">
            <FormControl  sx={{ m: 1 }}>
              <InputLabel >Selling Amount</InputLabel>
              <OutlinedInput

                value={values.amount}
                onChange={handleDataChange('samount')}
                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                label="Selling Amount"
               
              />
              <FormHelperText >Per {props.f_data.msr}</FormHelperText>
            </FormControl>
            </div>
      
          </div>
        </form>
      </div>

      <div className="col-10 col-lg-2 ">

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel >Total Puchase</InputLabel>
          <OutlinedInput
            value={props.f_data.amount * props.f_data.qty}
            type="number"
            disabled
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Total Puchase"

          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel >Total Selling</InputLabel>
          <OutlinedInput
            value={props.f_data.amount * props.f_data.qty}
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
