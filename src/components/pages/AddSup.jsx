import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function AddSup() {

  const [supplier, setSupplier] = useState({
    id: "",
    address: "",
    company: "",
    email: "",
    gst: "",
    name: "",
    number: ""
  });
  //edit wla part is remaning

  const { sup } = useParams();
  useEffect(() => {
    //fetch data from id
    if(sup != null){
      console.log("Supplier: ",sup);
    }
   
  }, []);
  


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSupplier(values => ({ ...values, [name]: value }))
  }

  const addSupplier = (event) => {
    event.preventDefault();
    console.log(supplier);
    //clear the form
    document.getElementById('supplierForm').reset();
  }
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card ">
          <div className="card-header bg-green">
            <h5 className="text-white m-b-0">Add Supplier</h5>
          </div>
          <div className="card-body">
            <form className="needs-validation" id='supplierForm' onSubmit={addSupplier} >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group has-feedback">
                    <label className="control-label">Name</label>
                    <input className="form-control" placeholder="Name"
                      name="name"

                      onChange={handleChange}
                      type="text" required />
                    <span className="fa fa-user form-control-feedback" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group has-feedback">
                    <label className="control-label">Company Name</label>
                    <input className="form-control" placeholder="Company Name"
                      name="company"
                      onChange={handleChange}
                      type="text" required />
                    <span className="fa fa-building-o form-control-feedback" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group has-feedback">
                    <label className="control-label">GST</label>

                    <input className="form-control" placeholder="" type="text"
                      name="gst"
                      onChange={handleChange}
                      required />
                    <span className=" fa fa-address-card-o form-control-feedback" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group has-feedback">
                    <label className="control-label">E-mail</label>
                    <input className="form-control" placeholder="E-mail"
                      name="email" required
                      onChange={handleChange}
                      type="email" />
                    <span className="fa fa-envelope-o form-control-feedback" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group has-feedback">
                    <label className="control-label">Contact Number</label>
                    <input className="form-control" placeholder="Contact Number"
                      name="number" required
                      onChange={handleChange}
                      type="number" />
                    <span className="fa fa-phone form-control-feedback" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group has-feedback">
                    <label className="control-label">Address</label>
                    <textarea className="form-control" id="placeTextarea"
                      name="address" required
                      onChange={handleChange}
                      rows={3} placeholder="Address..." defaultValue={""} />
                  </div>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
