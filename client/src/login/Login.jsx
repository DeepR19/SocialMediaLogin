import React from 'react';
import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginTitle">
            Choose a Login option
        </div>

        <div className="wrapper">
            <div className="left">
                <div className="loginBtn google">
                    <img src="..." alt="" />
                    Google
                </div>
                <div className="loginBtn facebook">
                    <img src="..." alt="" />
                    Facebook
                </div>
                <div className="loginBtn github">
                    <img src="..." alt="" />
                    Github
                </div>
            </div>


            <div className="right">
                <input type="text" placeholder='Enter email'/>
                <input type="text" placeholder='Enter password'/>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}
