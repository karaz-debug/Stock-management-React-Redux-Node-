import React from 'react'

export default function AddCust() {
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card ">
            <div className="card-header bg-light-blue">
              <h5 className="text-white m-b-0">Add Customer</h5>
            </div>
            <div className="card-body">
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Name</label>
                      <input className="form-control" placeholder="Name" type="text" required />
                      <span className="fa fa-user form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Contact Number</label>
                      <input className="form-control" placeholder="Contact Number" type="number" required />
                      <span className="fa fa-phone form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                 
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Date of Birth</label>
                      <input className="form-control" type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Gender</label>
                      <select className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
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
