/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext } from 'react';
interface IAuthContext{
    user: any,
    login: (username:any)=>void,
    logout: ()=>void,
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<any>  = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = (username:any) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
