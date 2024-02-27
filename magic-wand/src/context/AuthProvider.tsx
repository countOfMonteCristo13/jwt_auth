import { createContext, ReactNode, useState } from 'react';
import { Auth, InitialAuthState } from '../types/auth';

interface AuthContextProps {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

const AuthContext = createContext<AuthContextProps | undefined>({
  auth: InitialAuthState,
  setAuth: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>(InitialAuthState);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
