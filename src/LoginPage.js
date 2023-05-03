import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import { hasAuthentifcated, login } from './AuthApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';




const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);




export default function LoginPage() {
  const secretKey = 'my-secret-key';

  

const [email, setEmail] = useState(urlParams.get('email'));
if(urlParams.get('password')!==null)
{
var bytes = AES.decrypt(urlParams.get('password'), secretKey);
var realPassword = bytes.toString(CryptoJS.enc.Utf8);
}



var mdp = realPassword;
const [password, setPassword] = useState(realPassword);
  
//   const nm = urlParams.get('email');
// const mdp = urlParams.get('password');
if(urlParams.get('email')===null && urlParams.get('password')===null)
{
  

}
else
{
  const bytes = AES.decrypt(urlParams.get('password'), secretKey);
  var realPassword = bytes.toString(CryptoJS.enc.Utf8);
  var nm = urlParams.get('email');
  var mdp = realPassword;
  

  

}


 



// const realPassword = bytes.toString(CryptoJS.enc.Utf8);




  



// const mdpp=AES.decrypt(mdp, secretKey).toString();

  
  
  const { isAuthenticatedd, setIsAuthenticated } = useContext(Auth);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  

  const [isAuthenticated, setIsAutehnticated] = useState(hasAuthentifcated());
    const history = createBrowserHistory();
    

useEffect(() => {
  if(localStorage.getItem("user-info")!==null)
  {
   window.location.href="/SideBar";
   
  }
}, [])





 

  
    async function handleSubmit(e) {
      e.preventDefault(); // prevent default behavior of the form
      
      let item = { email, password };
      let result = await fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(item)
      });
      
      result = await result.json();
      console.warn("result", result.user);
      
      if (result.valid) {
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/SideBar");
        window.location.reload();
      } else {
        alert("Invalid login credentials. Please try again.");
      }
    }
    
    
   
        
  return (
    <div className="relative w-full h-screen bg-zinc-900/80">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-center py-4">
            <a
              href="/"
              className="flex  items-center font-bold text-3xl text-black"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 mr-2 fill-current">
                <path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
              HACKATHON
            </a>
          </h2>

          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Sign In
          </button>

          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>

          <p className="text-center mt-8">--welcome !--</p>
        </form>
      </div>
    </div>
  );
        }
      
      
      