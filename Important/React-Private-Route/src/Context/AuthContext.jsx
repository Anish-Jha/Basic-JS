import React from "react";
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] =React.useState(true);

  function toggleAuth(){
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth,toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
