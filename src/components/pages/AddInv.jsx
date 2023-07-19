import React from 'react'
import { useState } from 'react';
import AddInvRow from './container/AddInvRow';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

export default function AddInv() {
  const [formData, setFormData] = useState({
    supplier: {
      name: "",
      company: "",
      phone: "",
      note: "",
      tax: "",
      discount: "",
      total: "",
      pdate: "",
    },
    products: [
      {
        product: "",
        description: "",
        model: "",
        unit: "unit",
        quantity: "",
        pamount: "",
        samount: "",
      },
    ],
    totalPurchase: 0,
    totalSelling: 0,
  });




  const Supplier = [
    {
      name: "Manish",
      id: 1,
      company: "Ubrosoft",
      phone: 12365789
    },
    {
      name: "Ritesh",
      id: 2,
      company: "ABC",
      phone: 9876543456
    },
    {
      name: "Vj",
      id: 3,
      company: "CMss",
      phone: 5678987656
    }
  ]
  //get data from redux or api
  const Produts = [
    {
      name: "Chair",
      hsn: 45811125,
      unit: 'Pcs',
      description: 'Comfortable chair for office or home use.',
    },
    {
      name: "Fevicol",
      hsn: 788154,
      unit: 'Pcs',
      description: 'High-quality adhesive for various applications.',
    },
    {
      name: "Table",
      hsn: 9874521,
      unit: 'Pcs',
      description: 'Sturdy and stylish table for work or dining.',
    },
    {
      name: "Plywood Mica",
      hsn: 845512,
      unit: 'mtr',
      description: 'Durable plywood mica for furniture.',
    },
    {
      name: "Door",
      hsn: 103125,
      unit: 'Inch',
      description: 'Solid wooden door for security and aesthetics.',
    },
  ];

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




  const [selectedSupplier, setSupplier] = useState({}); // Initialize to an empty object
  const [companyValue, setCompanyValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const changeSupplier = (newValue) => {
    setSupplier(newValue);
    if (newValue != null) {
      setCompanyValue(newValue.company || '');
      setPhoneValue(newValue.phone || '');
      setFormData((prevData) => ({
        ...prevData,
        supplier: {
          ...prevData.supplier,
          name: newValue.name,
          company: newValue.company,
          phone: newValue.phone,
        },
      }));
    } else {
      setCompanyValue('');
      setPhoneValue('');
      setFormData((prevData) => ({
        ...prevData,
        supplier: {
          name: "",
          company: "",
          phone: "",
          tax: "",
          discount: "",
          total: "",
          pdate: "",
        },
      }));
    }
  };

  const handleChangeSupplier = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      supplier: {
        ...prevData.supplier,
        [field]: value,
      },
    }));
  };

  const [formcount, setFormCount] = useState([
    {
      product: '',
      description: '',
      model: '',
      unit: 'unit',
      quantity: '',
      pamount: '',
      samount: '',
    },
  ]);

  // Create a function to calculate total selling and total purchase values
  const calculateTotal = (products) => {
    let totalPurchase = 0;
    let totalSelling = 0;

    products.forEach((product) => {
      const purchaseAmount = parseFloat(product.pamount);
      const sellingAmount = parseFloat(product.samount);
      const quantity = parseFloat(product.quantity);

      if (!isNaN(purchaseAmount) && !isNaN(quantity)) {
        totalPurchase += purchaseAmount * quantity;
      }

      if (!isNaN(sellingAmount) && !isNaN(quantity)) {
        totalSelling += sellingAmount * quantity;
      }
    });

    return { totalPurchase, totalSelling };
  };



  const handleChange = (field, value, index) => {
    setFormData((prevData) => ({
      ...prevData,
      products: prevData.products.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      ),
    }));

    // Calculate and update total purchase and total selling values
    const { totalPurchase, totalSelling } = calculateTotal([
      ...formData.products.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      ),
    ]);

    // Update formData with the new total values
    setFormData((prevData) => ({
      ...prevData,
      totalPurchase: totalPurchase,
      totalSelling: totalSelling,
    }));
  };





  const addForm = () => {
    setFormData((prevData) => ({
      ...prevData,
      products: [
        ...prevData.products,
        {
          product: "",
          description: "",
          model: "",
          unit: "unit",
          quantity: "",
          pamount: "",
          samount: "",
        },
      ],
    }));
  };

  const delForm = (id) => {
    setFormData((prevData) => ({
      ...prevData,
      products: prevData.products.filter((_, index) => index !== id),
    }));
  };

  const handleSubmit = () => {
    // Make sure to replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
    const apiEndpoint = '/api/products';

    // You can add any authentication tokens or headers required by your backend
    const headers = {
      // Example: Authorization token if using JWT
      'Content-Type': 'application/json', // Replace with appropriate content type
    };

    axios
      .post(apiEndpoint, formData, { headers })
      .then((response) => {
        console.log('API response:', response.data);
        // Do something with the response, if needed
      })
      .catch((error) => {
        console.error('API error:', error);
        // Handle errors, show messages, etc.
      });
  };



  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card ">
          <div className="card-header bg-light-blue-active">
            <h5 className="text-white m-b-0">ADD PRODUCT</h5>
          </div>
          <div className="card-body">
            {formData.products.map((val, ind) => {
              return (
                <div className="row" key={ind}>
                  <div className="col-10">
                    <form>
                      <div className="row">
                        <div className="col-sm-10 col-lg-3">
                          <TextField
                            required
                            label="Product Name"
                            value={val.product}
                            onChange={(e) => handleChange("product", e.target.value, ind)}
                          />
                        </div>
                        <div className="col-sm-10 col-lg-3">
                          <TextField sx={{ margin: 1 }}
                            id={`prd_desc_${ind}`}
                            label='Product Description'
                            name="description"
                            value={val.description}
                            onChange={(e) => handleChange("description", e.target.value, ind)}
                          />
                        </div>
                        <div className="col-sm-10 col-lg-3">
                          <TextField sx={{ margin: 1 }}
                            onChange={(e) => handleChange("model", e.target.value, ind)}
                            id={`prd_hsn_${ind}`}
                            name="model"
                            value={val.model}
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
                              value={val.unit}
                              onChange={(e) => handleChange("unit", e.target.value, ind)}
                              label="Units">

                              {units.map((val, ind) => {
                                return (<MenuItem key={ind} value={val.label}>{val.label}</MenuItem>)
                              })}
                            </Select>
                          </FormControl>
                        </div>

                        <div className="col-sm-10 col-lg-3">
                          <TextField
                            label="Quantity"
                            type="number"
                            name="quantity"
                            id={`quantity_${ind}`}
                            value={val.quantity}
                            onChange={(e) => handleChange("quantity", e.target.value, ind)}
                            sx={{ m: 1 }}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">{formcount.unit}</InputAdornment>,
                            }}
                          />
                        </div>

                        <div className="col-sm-10 col-lg-3">
                          <FormControl sx={{ m: 1 }}>
                            <InputLabel htmlFor={`pamount_${ind}`} >Purchase Amount</InputLabel>
                            <OutlinedInput
                              label="Purchase Amount"
                              type='number'
                              name='pamount'
                              id={`pamount_${ind}`}
                              value={val.pamount}
                              onChange={(e) => handleChange("pamount", e.target.value, ind)}
                              startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                            />
                            <FormHelperText >Per {formcount.unit}</FormHelperText>
                          </FormControl>

                        </div>
                        <div className="col-sm-10 col-lg-3">
                          <FormControl sx={{ m: 1 }}>
                            <InputLabel htmlFor={`samount_${ind}`} >Selling Amount</InputLabel>
                            <OutlinedInput
                              label="Selling Amount"
                              type='number'
                              name='samount'
                              id={`samount_${ind}`}
                              value={val.samount}
                              onChange={(e) => handleChange("samount", e.target.value, ind)}
                              startAdornment={<InputAdornment position="start">₹</InputAdornment>}

                            />
                            <FormHelperText >Per {val.unit}</FormHelperText>
                          </FormControl>
                        </div>

                      </div>
                    </form>
                  </div>

                  <div className="col-10 col-lg-2 ">

                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor={`total_purchase_${ind}`}>Total Purchase</InputLabel>
                      <OutlinedInput
                        value={val.pamount * val.quantity}
                        type="number"
                        disabled
                        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                        label="Total Purchase"
                      />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor={`total_selling_${ind}`}>Total Selling</InputLabel>
                      <OutlinedInput
                        value={val.samount * val.quantity}
                        type="number"
                        disabled
                        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                        label="Total Selling"
                      />
                    </FormControl>



                    <button type="button" style={{ width: 'auto', marginTop: '15px' }}
                      onClick={() => delForm(ind)}
                      className="btn btn-danger"><i className="fa fa-minus"></i></button>
                  </div>
                  <hr style={{ width: '95%', height: '2px', backgroundColor: 'rgb(235 243 251)' }} />
                </div>
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
                    getOptionLabel={(opt) => {
                      return opt.name;
                    }}
                    sx={{ m: 1 }}
                    renderInput={(params) => <TextField {...params} label="Supplier Name" />}
                  />

                </div>
                <div className="col-md-3">

                  <TextField
                    sx={{ margin: 1 }}
                    label='Company Name'
                    value={companyValue}
                    onChange={(e) => setCompanyValue(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <TextField
                    sx={{ margin: 1 }}
                    label='Supplier Phone'
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(e.target.value)}
                  />
                </div>

              </div>
              <div className="row m-t-2">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="firstName1">Tax %:</label>
                    <input
                      className="form-control"
                      value={formData.supplier.tax}
                      max={100}
                      maxLength={3}
                      type="number"
                      onChange={(e) => handleChangeSupplier("tax", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="lastName1">Discount %:</label>
                    <input
                      className="form-control"
                      value={formData.supplier.discount}
                      type="number"
                      onChange={(e) => handleChangeSupplier("discount", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="lastName1">Total:</label>
                    <input
                      className="form-control"
                      value={formData.supplier.total}
                      type="number"
                      onChange={(e) => handleChangeSupplier("total", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="date1">Purchase Date</label>
                    <input
                      className="form-control"
                      value={formData.supplier.pdate}
                      id="date1"
                      type="date"
                      onChange={(e) => handleChangeSupplier("pdate", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-info"
                style={{ margin: "10px" }}
                onClick={handleSubmit} // Call the handleSubmit function on click
              >
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
