import React, { createContext, useState, useEffect } from "react";
import { userService } from "../services/user.service";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userService.getUser().then((res) => setUser(res.data));
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContext;