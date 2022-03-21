import React from 'react'

export default function AddSup() {
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card ">
            <div className="card-header bg-green">
              <h5 className="text-white m-b-0">Add Supplier</h5>
            </div>            
            <div className="card-body">
              <form className="needs-validation" >
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
                      <label className="control-label">Company Name</label>
                      <input className="form-control" placeholder="Company Name" type="text" required />
                      <span className="fa fa-building-o form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">GST</label>
                      
                      <input className="form-control" placeholder="" type="text" required />
                      <span className=" fa fa-address-card-o form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">E-mail</label>
                      <input className="form-control" placeholder="E-mail" type="email"  />
                      <span className="fa fa-envelope-o form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Contact Number</label>
                      <input className="form-control" placeholder="Contact Number" type="number"  />
                      <span className="fa fa-phone form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Address</label>
                      <textarea className="form-control" id="placeTextarea" rows={3} placeholder="Address..."  defaultValue={""} />
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
