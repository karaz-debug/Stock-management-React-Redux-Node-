import React, { useState } from 'react';

export default function AddSup() {
  const [supplier, setSupplier] = useState({
    name: "",
    company: "",
    mobile: "",
    address: "",
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSupplier((prevSupplier) => ({ ...prevSupplier, [name]: value }));
  };

  const addSupplier = async (event) => {
    event.preventDefault();
    console.log(supplier);

    try {
      // Get the authentication token after successful login
      const authToken = localStorage.getItem('accessToken');

      // Make the API request to add the supplier
      const response = await fetch('/api/suppliers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`, // Include the authentication token in the request headers
        },
        body: JSON.stringify(supplier),
      });

      if (response.ok) {
        // Supplier added successfully
        console.log('Supplier added successfully!');
        // Clear the form
        setSupplier({
          name: "",
          company: "",
          mobile: "",
          address: "",
          email: "",
        });
      } else {
        // Error adding the supplier
        console.error('Error adding supplier:', response.status);
      }
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

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
                      name="mobile" required
                      onChange={handleChange}
                      type="mobile" />
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
