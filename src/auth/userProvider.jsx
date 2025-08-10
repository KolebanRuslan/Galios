import { useState } from "react"
import AuthContext from "./AuthContext"

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider