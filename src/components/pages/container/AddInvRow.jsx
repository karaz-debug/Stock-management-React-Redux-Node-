import React from 'react'
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
export default function AddInvRow(props) {
  const measurement = props.measurement;
  const classes = useStyles();

  const [values, setValues] = useState(props.f_data);

  const handleDataChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.insData(prop, event.target.value)
  };

  return (
    <div className="row">
      <div className="col-10">
        <form className={classes.root}>
{/* 
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="prd_code">Product Code</InputLabel>
            <OutlinedInput
              onChange={handleDataChange('code')}
              id="prd_code"
              value={props.f_data.name}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label='Product Code'
            />
          </FormControl> */}



          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="prd_name">Product Name</InputLabel>
            <OutlinedInput
              onChange={handleDataChange('name')}
              id="prd_name"
              value={props.f_data.name}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label='Product Name'
            />
          </FormControl>

          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="prd_desc">Product Description</InputLabel>
            <OutlinedInput
              onChange={handleDataChange('desc')}
              id="prd_desc"
              value={props.f_data.name}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label='Product Description'
            />
          </FormControl>

          {/* <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="prd_hsx">Product HSX</InputLabel>
            <OutlinedInput
              onChange={handleDataChange('hsx')}
              id="prd_hsx"
              value={props.f_data.name}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label='Product HSX'
            />
          </FormControl> */}

          {/* <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="prd_box">Product Box</InputLabel>
            <OutlinedInput
              onChange={handleDataChange('box')}
              id="prd_box"
              value={props.f_data.name}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label='Product Box'
            />
          </FormControl> */}

          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="prd_size">Product Size</InputLabel>
            <OutlinedInput
              onChange={handleDataChange('size')}
              id="prd_size"
              value={props.f_data.name}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label='Product size'
            />
          </FormControl>
          <TextField
            id="date"
            label="Date"
            type="date"
            variant="outlined"
            defaultValue={null}
            onChange={handleDataChange("date")}
            InputLabelProps={{
              shrink: true,
            }}
          />
       

          <TextField
            id="select_msr"
            select
            label="Measurement"
            value={props.f_data.msr}
            onChange={handleDataChange("msr")}
            variant="outlined"

          >
            {measurement.map((option) => (
              <MenuItem key={option.value} value={option.label} >
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <FormControl
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">Quantity</InputLabel>

            <OutlinedInput
              id="outlined-adornment-weight"
              value={props.f_data.qty}
              type="number"
              onChange={handleDataChange("qty")}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              endAdornment={<InputAdornment position="end">{props.f_data.msr}</InputAdornment>}
              label={'Quantity'}
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Purchase Amount</InputLabel>
            <OutlinedInput

              id="outlined-adornment-amount"
              value={props.f_data.amount}
              type="number"
              onChange={handleDataChange('pamount')}
              startAdornment={<InputAdornment position="start">₹</InputAdornment>}
              labelWidth={160}
            />
            <FormHelperText id="outlined-weight-helper-text">Per {props.f_data.msr}</FormHelperText>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Selling Amount</InputLabel>
            <OutlinedInput

              id="outlined-adornment-amount"
              value={props.f_data.amount}
              type="number"
              onChange={handleDataChange('samount')}
              startAdornment={<InputAdornment position="start">₹</InputAdornment>}
              labelWidth={140}
            />
            <FormHelperText id="outlined-weight-helper-text">Per {props.f_data.msr}</FormHelperText>
          </FormControl>


        </form>
      </div>

      <div className="col-4 col-lg-2">
        <FormControl variant="outlined">
          <InputLabel htmlFor="total_amount">Total Puchase</InputLabel>
          <OutlinedInput

            id="total_amount"
            value={props.f_data.amount * props.f_data.qty}
            type="number"
            disabled
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            labelWidth={130}
          />
        </FormControl>

        <FormControl variant="outlined" style={{ marginTop: '15px' }}>
          <InputLabel htmlFor="total_amount">Total Selling</InputLabel>
          <OutlinedInput

            id="total_amount"
            value={props.f_data.amount * props.f_data.qty}
            type="number"
            disabled
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            labelWidth={130}
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
