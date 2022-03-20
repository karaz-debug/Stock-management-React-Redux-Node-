import React from 'react'
import { useState } from 'react';
import AddInvRow from './container/AddInvRow';

  
export default function AddInv() {
 

  const measurement = [
    {
      value: 'Peice',
      label: 'Pcs',
    },
    {
      value: 'Weight',
      label: 'KG',
    },
    {
      value: 'Volumn',
      label: 'L',
    },
    {
      value: 'Packet',
      label: 'Pac',
    },
    {
      value: '12 pcs',
      label: 'Durjan',
    },
  ];
   
  
  const [formcount,setFormCount] = useState([
    {
      name:'',
      amount: '',
      msr: measurement[0].label,
      qty: '',
    },
  ]);


 const addForm = ()=>{
  setFormCount([...formcount,{ name:'',
  amount: '',
  msr: measurement[0].label,
  qty: '',}])
 }
 const delForm = (id)=>{
  // let tempList = formcount.slice();
  // tempList.splice(id,1);
  // setFormCount(tempList);
  setFormCount((oldlist)=>{
    return oldlist.filter((arrElem,index)=>{
        return index !== id;
    });
})
 }

 const insertData = (id,label,val)=>  {
  if(label === 'name'){
    setFormCount((oldlist)=>{
      oldlist[id].name = val;
     return oldlist;
  })
  }
  else if(label === 'pamount'){
    setFormCount((oldlist)=>{
      oldlist[id].amount = val;
     return oldlist;
  })
  }
  else if(label === 'msr'){
    setFormCount((oldlist)=>{
      oldlist[id].msr = val;
     return oldlist;
  })
  }
  else if(label === 'qty'){
    setFormCount((oldlist)=>{
      oldlist[id].qty = val;
     return oldlist;
  })
  }
  
  
 }

  
    return (

      
        <div className="row">
        <div className="col-lg-12">
          <div className="card ">
            <div className="card-header bg-light-blue-active">
              <h5 className="text-white m-b-0">ADD PRODUCT</h5>
            </div>
            <div className="card-body">
           

         {formcount.map((val,ind)=>{
              return(
                <AddInvRow
                measurement={measurement}
                f_data={val}
                key={ind}
                insData={(label,value)=>{insertData(ind,label,value)}}
                delFormI={()=>{delForm(ind)}}/>
              )
              
            })}           
    

           
      <button type="button" style={{margin:'10px'}} 
      onClick={addForm}
      className="btn btn-success"><i className="fa fa-plus"></i></button>

      <button type="submit" className="btn btn-info"
      style={{margin:'10px'}} 
      onClick={()=>{console.log(formcount)}}
      >Submit</button>
               
           </div> 
          </div>
        </div>
      </div>

    )
}
