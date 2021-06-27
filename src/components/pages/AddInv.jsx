import React from 'react'

export default function AddInv() {
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card ">
            <div className="card-header bg-light-blue-active">
              <h5 className="text-white m-b-0">ADD PRODUCT</h5>
            </div>
            <div className="card-body">
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Product</label>
                      <input className="form-control" placeholder="Product Name" type="text" required />
                      <span className="fa fa-leaf form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Quantity</label>
                      <input className="form-control" placeholder="Quantity" type="number" required />
                      <span className="fa fa-sort form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Measurement</label>
                      <input className="form-control" placeholder="KG" type="text" required />
                      <span className="fa fa-superpowers form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Original Price</label>
                      <input className="form-control" placeholder="Price" type="number" required />
                      <span className="fa fa-inr form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Saling Price</label>
                      <input className="form-control" placeholder="Price" type="number" required />
                      <span className="fa fa-inr form-control-feedback" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group has-feedback">
                      <label className="control-label">Supplier</label>
                      <input className="form-control" placeholder="Supplier Name" type="text" required />
                      <span className="fa fa-handshake-o form-control-feedback" aria-hidden="true" />
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
