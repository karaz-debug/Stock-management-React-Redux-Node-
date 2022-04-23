import React,{useEffect} from 'react'
import Custtable from './container/Custtable'

export default function Cust() {
    const customers = [
        {
            id:1,
            name:"Manya",
            mobile:9876543210,
            gst:'2986492AGDF23',
            address:"UbroSoft ganki nagar colony Lanka"
        },
        {
          id:2,
          name:"Rishub",
          mobile:9876543210,
          gst:'2986492AGDF23',
          address:"UbroSoft ganki nagar colony Lanka"
        },
        {
          id:3,
          name:"Manish",
          mobile:9876543210,
          gst:'2986492AGDF23',
          address:"UbroSoft ganki nagar colony Lanka"
        }
    ]


    useEffect(() => {
      const script = document.createElement('script');
      script.innerHTML=`
      try {
        $('#customerList').DataTable({
          'paging'      : true,
          'lengthChange': true,
          'searching'   : true,
          'ordering'    : false,
          'info'        : true,
          'autoWidth'   : false
        }) 
      } catch (error) {
          window.location = '/';
      }`;
  
      script.async = true;
  
      document.body.appendChild(script);
  
  
    }, []);


    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card p-3">
            <div className="table-responsive">
              <table id='customerList' className="table table-hover">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className='text-white'>#</th>
                    <th className='text-white'>Customer</th>
                    <th className='text-white'>Phone</th>
                    <th className='text-white'>GST</th>
                    <th className='text-white'>Address</th>
                    <th className='text-white'>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {
                    customers.map((val,ind)=>{
                        return(
                            <Custtable des={val} key={ind}/>
                        )
                    })
                 }
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    )
}
