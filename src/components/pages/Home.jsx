import React from 'react'
import Card from './container/Card'


export default function Home() {
    
    const cards=[
{
    gradent:"box-gradient",
    icon:"ti-stats-up",
    title:"Total Orders",
    number:"5,500",
    subtitle:"This Month "
},
{
    gradent:"box-gradient-4",
    icon:"ti-face-smile",
    title:"Customer",
    number:"2,040",
    subtitle:" Total Customer Count "
},
{
    gradent:"box-gradient-1",
    icon:"ti-bar-chart",
    title:"Total Revenue",
    number:"6,450",
    subtitle:" This Month "
},
{
    gradent:"box-gradient-3",
    icon:"ti-money",
    title:"Total Profit",
    number:"$ 8,450",
    subtitle:" This Month "
},
{
    gradent:"bg-primary",
    icon:"icon-briefcase",
    title:"Supplier",
    number:"8,590",
    subtitle:" Total Supplier Count "
}
    ]
    return (
        <div className="row">
      {  cards.map((val,ind)=>{
            return(
                <Card des={val} key={ind}/>
            )
        })}
        </div>

    )
}
