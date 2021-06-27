import React from 'react'
import {useState} from 'react'
import './Login.css'

export default function Login() {
   

    const [mode, setMode] = useState("")

    return (
        <div className="container-fluid skin_blue">

       
        <div className={`container ${mode}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fa fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fa fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fa fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fa fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fa fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
               Get Register Your Self to use me.
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={()=>{setMode('sign-up-mode')}}>
                Sign up
              </button>
            </div>
            <img src="dist/img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Already Register Login here to use me.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={()=>{setMode('')}}>
                Sign in
              </button>
            </div>
            <img src="dist/img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
      </div>
    )
}
