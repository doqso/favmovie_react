import React, { useContext, useEffect, useState } from "react";
import parseJwt from "../util/parseJwt";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (tokenToSave) => {
    document.cookie = `apiToken=${tokenToSave};Path=/;`;
    let credentials = parseJwt(tokenToSave)
    setUser(credentials)
  }
  useEffect(() => {
    const findToken = findTokenInCookies();
    if (!findToken || findToken === 'undefined') return
    login(findToken);
  }, [])
  const logout = () => {
    document.cookie = `apiToken=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
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