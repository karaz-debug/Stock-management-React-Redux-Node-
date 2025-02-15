import React, { useEffect } from 'react';
import "./App.css"
import Head from "./components/Head"
import Aside from "./components/Aside"
import Error from "./Error"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/pages/Home'
import AddSup from './components/pages/AddSup'
import AddCust from './components/pages/AddCust'
import AddInv from './components/pages/AddInv'
import Cust from './components/pages/Cust'
import Inv from './components/pages/Inv'
import Sell from './components/pages/Sell'
import Sup from './components/pages/Sup'
import Transaction from './components/pages/Transaction'
import MyShop from './containers/MyShop'
import EditInv from './components/pages/EditInv'
import Login from './components/Login'

export default function App() {
  useEffect(() => {
    console.log("Page Loaded");
  }, []);

  // Custom hook to get the current location
  const location = useLocation();

  // Check if the current location is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="wrapper boxed-wrapper">
      <Head />
      <BrowserRouter>
        {/* Render the Aside component on all pages except the login page */}
        {!isLoginPage && <Aside />}
        <div className="content-wrapper">
          <div className="content">
            <Switch>
              <Route path="/login" exact> <Login /></Route>
              <Route path="/" exact> <Home /></Route>
              <Route path="/register" exact> <MyShop /></Route>
              <Route path="/addsupplier" exact><AddSup /></Route>
              <Route path="/addsupplier/:sup" exact><AddSup /></Route>
              <Route path="/supplier" exact><Sup /></Route>
              <Route path="/addproduct" exact><AddInv /></Route>
              <Route path="/product" exact> <Inv /> </Route>
              <Route path="/addcustomer" exact> <AddCust /> </Route>
              <Route path="/customer" exact> <Cust /> </Route>
              <Route path="/sell" exact> <Sell /> </Route>
              <Route path="/transaction" exact> <Transaction /> </Route>
              <Route path="/edit-product/:id" exact> <EditInv /> </Route>
              <Route render={Error} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
