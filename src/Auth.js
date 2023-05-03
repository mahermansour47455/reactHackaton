import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { hasAuthentifcated } from "./AuthApi";


export default React.createContext({
 
  isAuthenticatedd: false,
  setIsAuthenticatedd: () => {},
});


const AuthProvider = ({ children }) => {
  const [isAuthenticatedd, setIsAuthenticatedd] = useState(false);

  useEffect(() => {
    const authData = localStorage.getItem('authData');
    if (authData) {
      setIsAuthenticatedd(true);
    }
  }, []);
};
