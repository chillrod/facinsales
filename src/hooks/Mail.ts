import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/CodeMailer/CodeMailer';

interface User {
  id?: string;
  name: string;
  email: string;
}

interface AuthState {
  token?: string;
  user: User;
  authLoading: boolean;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface MailerContextData {
  user: User;
  authLoading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const MailerContext = createContext<MailerContextData>({} as MailerContextData);

const MailerProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Hero:token');
    const user = localStorage.getItem('@Hero:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user), authLoading: false };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    setData({ authLoading: true } as AuthState);
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Hero:token', token);
    localStorage.setItem('@Hero:user', JSON.stringify(user));

    setData({ token, user, authLoading: false });
  }, []);



  return (
    <MailerContext.Provider
    value={{
      ...data,
      signIn
    }}>
      {children}
    </MailerContext.Provider>
  );
};

function useAuth(): MailerContextData {
  const context = useContext(MailerContext);

  if (!context) {
    throw new Error('useAuth must be used within an MailerProvider');
  }

  return context;
}

export { MailerProvider, useAuth };