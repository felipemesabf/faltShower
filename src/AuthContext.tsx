/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext } from 'react';
import { User } from './common/shareInterfaces';
interface IAuthContext{
    user: any,
    isLoading:boolean,
    login: (username:any,password:any)=>void,
    logout: ()=>void,
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<any>  = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(false);

  const login = async (username:any, psw:any) => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://faltshower.onrender.com/users?username=${username}&psw=${psw}`,{
      // const response = await fetch(`http://localhost:4000/users?username=${username}&psw=${psw}`,{
      });
      const user:Array<User> = await response.json();
      console.log(user);
      
      if(user.length === 0){
        alert("User not found")
      }
      setUser( user )
    } catch (Error) {
      alert("Error, Intenta de núevo");
      console.error('Error',Error);
    } finally {
      setIsLoading(false)
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
