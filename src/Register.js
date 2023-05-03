import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { hasData } from 'jquery';
import { useContext } from 'react';
import { Auth } from './Auth';
import { hasAuthentifcated } from './AuthApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';
import { ThenmContext } from './App';


export default function Register(props) {
  const secretKey = 'my-secret-key';
  const theme=localStorage.getItem('theme');
  console.log(theme);
  

    
    const [submitted, setSubmitted] = useState(false);
    const [registering, setRegistering] = useState(false);
   
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = createBrowserHistory();
    const [loading, setLoading] = useState(false);


    const user= {name, email, password};
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [hashedPassword, sethashedPassword] = useState('');
    const [emailErroe, setEmailErroe] = useState('');
    const [nameErroe, setNameErroe] = useState('');
    const [passwordErroe, setPasswordErroe] = useState('');

    

    async function handleSubmit() {

        
        let item = { name,email, password };
        const timer = setTimeout(() => {
          setLoading(true);
        }, 10);
        
        console.warn(item);
        let result = await fetch("http://localhost:8000/api/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(item)
        });
        result = await result.json();
        console.log(result);
      
        if (result.valid) {
          const hased=(AES.encrypt(password, secretKey).toString());
            setSuccessMessage(`You are registered ${name}.`);
             history.push(`/Login?email=${email}&password=${hased}`);
             window.location.reload();
          
        } else {
            if(result.errors['email']){
              setEmailErroe(result.errors['email']);
            }
            if(result.errors['name']){
              setNameErroe(result.errors['name']);
            }
            if(result.errors['password']){
              setPasswordErroe(result.errors['password']);
            }


            setErrorMessage("Invalid login credentials. Please try again.");
            setLoading(false);
        }
      }
     

     

      


    return (

        
            
            <div className='main' id={theme}>
               <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
        {/* Include Bootstrap CDN link here */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                <form className="login-form" onSubmit={handleSubmit}>
              <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
              
              <div className="login-wrap">
                <div className="login-html">
                  <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                  <input id="tab-2" type="radio" name="tab" className="for-pwd" /><label htmlFor="tab-2" className="tab">Forgot Password</label>
                  <div className="login-form">
                    {/*---- Include the above in your HEAD tag --------*/}
                    <div className='container'>
                      <div className="row">
                      <div className="col-md-4 col-md-offset-4">



                    
              {successMessage?<div className="alert alert-success w-3" role="alert">{successMessage}</div>:null}
                {errorMessage?<div className="alert alert-danger w-3" role="alert">{errorMessage}</div>:null}
                    <div className="sign-in-htm">
                      <div className="group">
                        <label htmlFor="user" className="label"> Email</label>
                        <input id="user"  name="email"type="text" className="input" onChange={(e)=>setEmail(e.target.value)} />
                      </div>
                      {emailErroe?<div className="alert alert-danger w-3" role="alert">{emailErroe}</div>:null}
                      <div className="group">
                        <label htmlFor="usere" className="label">Username</label>
                        <input id="usere"  name="name"type="text" className="input" onChange={(e)=>setName(e.target.value)} />
                      </div>
                      {nameErroe?<div className="alert alert-danger w-3" role="alert">{nameErroe}</div>:null}
                      <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="pass" name="password" type="password" className="input" data-type="password" onChange={(e)=>setPassword(e.target.value)} />
                        {passwordErroe?<div className="alert alert-danger w-3" role="alert">{passwordErroe}</div>:null}
                      </div>
                      <div className="group">
                        <input type="button" onClick={handleSubmit} className="button" defaultValue="Sign In" />
                      </div>
                      
                      {loading && (
  <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>

   
  </div>
  
)}

 

                      <div className="hr" />
                      <button className="btn btn-danger" >delete</button>
                    </div>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

                </form>
              </div>
            
        
    )

}