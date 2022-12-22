import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
const Protected = () => {
  const auth = localStorage.getItem('signedIn');
  return auth ? <Outlet/> : <Navigate to ={'/signIn'}/>
}

export default Protected;