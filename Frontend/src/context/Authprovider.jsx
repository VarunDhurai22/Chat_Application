import React, { createContext, useContext, useState } from 'react'
import Cookies from "js-cookie"
export const AuthContext=createContext()
const Authprovider = ({childeren}) => {
  const initialUserState=Cookies.get("jwt")||localStorage.getItem("ChatApp");

  const [authUser, setAuthUser] = useState(initialUserState? JSON.parse(initialUserState) : undefined);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
        {childeren}
    </AuthContext.Provider>
  )
}

export default useAuth=()=> useContext(AuthContext);