import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(window.localStorage.getItem('jwt'));
  const saveJwt = (jwt) => {
    window.localStorage.setItem('jwt', jwt);
    setJwt(jwt);
  };
  const deleteJwt = () => {
    window.localStorage.removeItem('jwt');
    setJwt(null);
  };
  return (
    <UserContext.Provider value={{ jwt, saveJwt, deleteJwt }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
