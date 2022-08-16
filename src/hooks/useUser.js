import UserContext from '../contexts/UserContext';
import { useContext, useMemo, useCallback, useState } from 'react';
import { loginService } from '../services';
function useUser() {
  const { jwt, saveJwt, deleteJwt } = useContext(UserContext);
  const [error, setError] = useState(false);
  const isLogged = useMemo(() => Boolean(jwt), [jwt]);
  const login = useCallback(
    async ({ email, password }) => {
      return loginService({ email, password })
        .then((jwtRes) => {
          setError(false);
          saveJwt(jwtRes);
        })
        .catch((err) => {
          setError(err.message);
        });
    },
    [saveJwt]
  );
  const logout = () => {
    deleteJwt();
  };
  return { isLogged, login, error, logout };
}

export default useUser;
