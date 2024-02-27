import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

const RequireAuth = () => {
  const { auth } = useContext(AuthContext) || {};

  return auth?.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
