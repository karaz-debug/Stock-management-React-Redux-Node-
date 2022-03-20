import React from 'react';
import Inventable from './container/Inventable';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { addStocks} from '../../redux/action/stockAction';

export default function Inv() {
  
  const products = useSelector((state)=>state.allStocks.stocks);
  const dispacth = useDispatch();

  const fecthStocks = async () =>{
    const response = await axios 
    .get('http://localhost:5050/api/stocks')
    .catch((err)=>{
      console.log("Err",err)
    });
    console.log(response.data);
    dispacth(addStocks(response.data))

   }

  //  useEffect(() => {
  //    fecthStocks();
  //  }, [])
 
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>#</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Measurement</th>
                    <th>Original Price</th>
                    <th>Profit</th>
                    <th>Saling Price</th>
                    <th>Supplier</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((val,ind)=>{
                      return(
                            <Inventable des={val} key={ind}/>
                      )
                  })}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    )
}
