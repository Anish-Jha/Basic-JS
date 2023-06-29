import React from "react";
export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth]=React.useState(false);
  const login=()=>{
    setIsAuth(true);
  };
  const logout=()=>{
    setIsAuth(false); 
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
