import { BrowserRouter as Router, Route,Routes, Link, json } from 'react-router-dom';


import React from 'react';
import Auth from './Auth';
import {useContext} from 'react';
import { logout } from './AuthApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserConnected } from './AuthApi';



function Navbar()
{
  const [isAuthenticatedd, setIsAuthenticatedd] = useState(false);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState([]);
  const [role, setRole] = useState('');
  const [search,setSerach]=useState('');

  useEffect(() => {
    const authData = localStorage.getItem('user-info');
    setIsAuthenticatedd(authData !== null);
    setUser(getUserConnected());
    if(authData)
  {    
    const user=JSON.parse(localStorage.getItem('user-info'));
    setUsername(user.user.name);
    setRole(user.user.role);
    console.log(user.user.name)
  }
  }, []);
  const [employes, setEmployes] = useState([]);


    
    
    //declarer un variable de type boolean et l'initialiser a true?
    
    const handellogout=()=>{
      logout();
      setIsAuthenticatedd(false);
    }
  

    return (
        <nav className="bg-zinc-400/25 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-5">
                <div className="flex items-center justify-between h-16">

                    <div className="flex" >
                        <a href="/" className="flex items-center font-bold text-3xl text-white">
                            <svg viewBox="0 0 24 24" className="w-10 h-10 mr-2 fill-current">
                                <path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                            </svg>
                            HACKATHON
                        </a>


                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                            >
                                Home
                            </Link>
                            <Link
                                to="/ListHack"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                Consult Hackathon
                            </Link>
                            <Link
                                to="/Login"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                Admin Space
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
