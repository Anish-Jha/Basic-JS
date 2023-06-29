import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";


function Navbar(){
  const { isAuth, login, logout }=useContext(AuthContext);

  return(
    <div  
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"black",
      color:"whitesmoke"
    }}
    >
      <h5>IS USER AUTHENTICATED :{isAuth? "YES" :"NO"}</h5>
      <button disabled={isAuth} onClick={login}>Login</button>
      <button disabled={!isAuth} onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar;