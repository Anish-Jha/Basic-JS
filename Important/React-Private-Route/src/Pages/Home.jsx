import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
export default function Home() {
    const {toggleAuth}=useContext(AuthContext);
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={toggleAuth}>LogOut</button>
    </div>
  )
}
