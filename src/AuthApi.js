import axios from "axios";
import jwtDecode from "jwt-decode";
import { getItem,addItem,removeItem } from "./LocalStorge";

export function hasAuthentifcated() {

  const token = getItem('miniblogtoken');
  const result=token?tokenIsvalid(token):false;
  if(result ===false){
    removeItem('miniblogtoken');
  }

  return result;
}

export function login(credentials) {
  return axios.post('http://localhost:8000/api/login_check',credentials)

  .then (response => response);
    
}
export function logout() {
  removeItem('user-info');
}

function tokenIsvalid(token){
  const {exp}=jwtDecode(token);
  if(exp*1000>Date.now()){
    return true;
  }
  return false;
}

export function getUserConnected()
{
  const username=localStorage.getItem('user-info');
  return username;
}

export function getRoleConnected()
{
 
}