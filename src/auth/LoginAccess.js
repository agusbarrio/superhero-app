import React from 'react';
import useUser from '../hooks/useUser';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PATHS } from '../constants';
function LoginAccess({ children }) {
  const { isLogged } = useUser();

  return isLogged ? <Navigate to={PATHS.HOME} /> : <>{children}</>;
}

LoginAccess.propTypes = {
  children: PropTypes.any,
};
export default LoginAccess;
