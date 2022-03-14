import React from 'react'
import { useState  } from 'react';
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
        width: 180,
      },
    },  
  }));
export default function AddInvRow(props) {
    const measurement = props.measurement;
    const classes = useStyles();

    const [values, setValues] = useState(props.f_data);
    
   
 
      const handleDataChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        props.insData(prop,event.target.value )
      };

    return (
        <form className={classes.root}>
        
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
    <FormControl  variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
     
        id="outlined-adornment-amount"
        value={props.f_data.amount}
        type="number"
        onChange={handleDataChange('amount')}
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
        labelWidth={60}
      />
         <FormHelperText id="outlined-weight-helper-text">Per {props.f_data.msr}</FormHelperText>
    </FormControl>

    <FormControl  variant="outlined">
      <InputLabel htmlFor="total_amount">Total Amount</InputLabel>
      <OutlinedInput
     
        id="total_amount"
        value={props.f_data.amount*props.f_data.qty}
        type="number"
        disabled
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
        labelWidth={60}
      />
    </FormControl>
    <button type="button" style={{width: 'auto',marginTop:'15px'}} 
    onClick={props.delFormI}
      className="btn btn-danger"><i className="fa fa-minus"></i></button>
    <hr style={{width:'90%', height:'4px',backgroundColor:'rgb(235 243 251)'}}/>
  </form>
    )
}
