import React from 'react'
import Buzcard from './uihelper/Buzcard'
import Header from './uihelper/Header'
export default function Buztype() {

    const Buztypedata = [
        { img: '1998/1998610.png', label: 'Animal Products' },
        { img: '2921/2921855.png', label: 'Vegetable Products' },
        { img: '2922/2922037.png', label: 'Food, Beverages' },
        { img: '529/529628.png', label: 'Tobacco' },
        { img: '1597/1597132.png', label: 'Chemicals & Minerals' },
        { img: '4182/4182458.png', label: 'Textiles & Apparels' },
        { img: '933/933695.png', label: 'Footwear' },
        { img: '1504/1504035.png', label: 'Metals' },
        { img: '3459/3459712.png', label: 'Machineries' },
        { img: '2964/premium/2964317.png', label: 'Hotels & Restaurants' },
        { img: '383/premium/383996.png', label: 'Transportation' },
        { img: '3631/premium/3631163.png', label: 'Construction Services' },
        { img: '3976/premium/3976631.png', label: 'Education' },
        { img: '827/827107.png', label: 'Tour Operators' },
        { img: '2448/premium/2448439.png', label: 'Health Care' },
        { img: '3281/3281289.png', label: 'Job Work' },
        { img: '3163/3163478.png', label: 'Entertainment' },
        { img: '673/673339.png', label: 'Kitchen & Tableware' },
        { img: '1141/premium/1141431.png', label: 'Intellectual Property Rights' },
        { img: '2748/2748783.png', label: 'Other' },

    ]


    return (

        <>

            <div className="row">
                <div class="col-12 justify-content-center">

            
                

                    <h3 className="text-black">Select Categories</h3>
                    <ul className="nav nav-pills m-t-30 justify-content-end m-b-30">
                        <li className="nav-item"> <a href="" className="nav-link " data-toggle="tab">Retailer</a>
                        </li>
                        <li className="nav-item"> <a href="" className="nav-link active show"
                            data-toggle="tab">WholeSaler</a> </li>
                    </ul>
                </div>

                <div className="col-12 justify-content-center">
                    <p />
                    <div className="row">

                        {Buztypedata.map((val, ind) => {
                            return (
                                <Buzcard key={ind} id={ind} data={val} />
                            )
                        })}

                    </div>
                </div>
            </div>

        </>

    )
}



