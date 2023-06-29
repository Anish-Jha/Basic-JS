import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';
import { Children } from 'react';

export default function PrivateRoute() {
    const {isAuth}=useContext(AuthContext);
    if(!isAuth){
        return <Navigate to="/login" />;
    }
  return (
    Children
  );
}
