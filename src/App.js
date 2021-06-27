import React from 'react'
import "./App.css"
import Head from "./components/Head"
import Aside from "./components/Aside"
import Error from "./Error"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/pages/Home'
import AddSup from './components/pages/AddSup'
import AddCust from './components/pages/AddCust'
import AddInv from './components/pages/AddInv'
import Cust from './components/pages/Cust'
import Inv from './components/pages/Inv'
import Sell from './components/pages/Sell'
import Sup from './components/pages/Sup'
import Transaction from './components/pages/Transaction'



export default function App() {

 
  return (
    <>
    <Head/>    
    <BrowserRouter>
    <Aside/>
    <div className="content-wrapper">
        <div className="content">

          <Switch >
          
              <Route path="/" render={Home} exact  />
              <Route path="/addsupplier" render={AddSup} exact />
              <Route path="/supplier" render={Sup} exact/>
              <Route path="/addproduct" render={AddInv} exact/>
              <Route path="/product" render={Inv} exact/>
              <Route path="/addcustomer" render={AddCust} exact/>
              <Route path="/customer" render={Cust} exact/>
              <Route path="/sell" render={Sell} exact/>
              <Route path="/transaction" render={Transaction} exact/>
              
              <Route render={Error} />
          </Switch>
          </div>
      </div>
    </BrowserRouter>

     <Footer/>  
      </>
  )
}
