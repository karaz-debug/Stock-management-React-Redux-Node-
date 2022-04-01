import React, { useState } from 'react'






export default function MyShop() {

    const [myshop, setMyShop] = useState({
        shopName: "UbroSoft",
        ownerName: "Ubro",
        gstNo: "9876-A854B-986",
        email: "contact@ubrosoft.com",
        phone: "9876543210",
        address: "2nd Floor , Samne Ghat Janki nagar Colony , Lanka Varanasi",
    });




    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMyShop(values => ({ ...values, [name]: value }))
    }

    const updateMyShope = (event) => {
        event.preventDefault();
        console.log(myshop);
    }
    return (
        <div className="row">
            <div className="col-12 justify-content-center">

                <div className="card">
                    {/* <div className="card-header">
                        <h4 style={{ textAlign: 'center' }}> My Profile </h4></div> */}
                    <div className="card-body">
                        <form className="form-horizontal form-material" onSubmit={updateMyShope}>
                            <div className="row">

                                <div className="col-md-6">

                                    <div className="form-group ">

                                        <label className="control-label">Shop Name</label>
                                        <input value={myshop.shopName}
                                            name="shopName"
                                            required
                                            onChange={handleChange}
                                            className="form-control form-control-line " type="text" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label">Owner Name</label>

                                        <input value={myshop.ownerName}
                                            name="ownerName"
                                            required
                                            onChange={handleChange}
                                            className="form-control form-control-line" type="text" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label">Phone No</label>

                                        <input value={myshop.phone}
                                            name="phone"
                                            required
                                            onChange={handleChange}
                                            className="form-control form-control-line" type="text" />

                                    </div>
                                </div>

                                <div className="col-md-6">

                                    <div className="form-group">

                                        <label className="control-label">GST Number</label>

                                        <input value={myshop.gstNo}
                                            name="gstNo"
                                            required
                                            onChange={handleChange}
                                            className="form-control form-control-line" type="text" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label">Email</label>

                                        <input value={myshop.email}
                                            name="email"
                                            required
                                            onChange={handleChange}
                                            className="form-control form-control-line" id="example-email" type="email" />

                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label">Address</label>

                                        <textarea rows={4} value={myshop.address}
                                            name="address"
                                            required
                                            onChange={handleChange}
                                            className="form-control form-control-line" spellCheck="false" />

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