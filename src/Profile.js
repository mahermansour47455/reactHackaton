import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


  

  
   




export default function Profile(props){
  const location = useLocation();
  if(props.state)
  {
  var error=props.state.error
  }
  else
  {
    var error=null
  }
    const [isAuthenticatedd, setIsAuthenticatedd] = useState(false);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
   
    useEffect(() => {
      window.scrollTo(0, 0);
      
        const authData = localStorage.getItem('user-info');
        setIsAuthenticatedd(authData !== null);
        if(authData)
      {    
        const user=JSON.parse(localStorage.getItem('user-info'));
        setUsername(user.user.name);
        setRole(user.user.role);
        console.log(user.user.name)
      }
      }, []);
    return (
      
      
    
      <div className="">
          {error && <div  id="a" className="alert alert-danger">{error}</div>}
      {/* rest of the component */}
            <h1 className='bb'>Profile {username} {role}</h1>
        </div>
    )
}