import React from 'react'
export default function MyShop() {

    let myShopDetail = {
        shopName: "",
        ownerName: "",
        gstNo: "",
        email: "",
        phone: "",
        address: "",
    }



    return (
        <div className="row">
            <div class="col-12 justify-content-center">

                <div className="card">
                    {/* <div className="card-header">
                        <h4 style={{ textAlign: 'center' }}> My Profile </h4></div> */}
                    <div className="card-body">
                        <form className="form-horizontal form-material">
                            <div className="row">
                                <div className="col-6">

                                    <div className="form-group">
                                        <label className="col-md-12">Shop Name</label>
                                        <div className="col-md-12">
                                            <input value={myShopDetail.shopName} className="form-control form-control-line" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">GST Number</label>
                                        <div className="col-md-12">
                                            <input value={myShopDetail.gstNo} className="form-control form-control-line" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                            <label className="col-md-12">Phone No</label>
                                            <div className="col-md-12">
                                                <input value={myShopDetail.phone} className="form-control form-control-line" type="text" />
                                            </div>
                                        </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="col-md-12">Owner Name</label>
                                        <div className="col-md-12">
                                            <input value={myShopDetail.ownerName} className="form-control form-control-line" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="example-email" className="col-md-12">Email</label>
                                        <div className="col-md-12">
                                            <input value={myShopDetail.email} className="form-control form-control-line" name="example-email" id="example-email" type="email" />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label className="col-md-12">Address</label>
                                        <div className="col-md-12">
                                            <textarea rows={4} value={myShopDetail.address} className="form-control form-control-line" spellCheck="false" defaultValue={""} />
                                        </div>
                                    </div>



                                </div>

                            </div>






                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button className="btn btn-success">Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
} 