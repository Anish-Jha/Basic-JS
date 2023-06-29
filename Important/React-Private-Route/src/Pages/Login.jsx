import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Login=()=>{
    const {isAuth, toggleAuth}= useContext(AuthContext);
    if(!isAuth){
        return <Navigate to="/" />;
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={toggleAuth}>LOGIN</button>
        </div>
    )
}
export default Login;