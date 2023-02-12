import React, { useContext, useState } from "react";
import { setCookie } from "../util/cookieManager";
import parseJwt from "../util/parseJwt";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const findToken = findTokenInCookies();
  let credentials = findToken !== null ? parseJwt(findToken) : null;
  const [user, setUser] = useState(credentials);
  
  const login = (tokenToSave) => {
    setCookie(tokenToSave)
    let credentials = parseJwt(tokenToSave)
    setUser(credentials)
  }

  const logout = () => {
    setCookie(null)
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function findTokenInCookies() {
  try {
    return document.cookie.split('apiToken=')[1].split(";")[0]
  } catch (e) {
    return null
  }
}