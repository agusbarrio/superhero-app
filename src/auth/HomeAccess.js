import React from 'react';
import useUser from '../hooks/useUser';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PATHS } from '../constants';
function HomeAccess({ children }) {
  const { isLogged } = useUser();

  return !isLogged ? <Navigate to={PATHS.LOGIN} /> : <>{children}</>;
}

HomeAccess.propTypes = {
  children: PropTypes.any,
};
export default HomeAccess;
