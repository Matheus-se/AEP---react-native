import React, {useContext, useEffect, useState} from 'react';
import {createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {auth} from '../services/auth';
import { IUser } from '../models/Iuser';

interface AuthContextData {
  user: IUser | null;
  signed: boolean;
  loading: boolean;
  setUserData(user: IUser): void;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@aep:user');
      const storageToken = await AsyncStorage.getItem('@aep:token');

      if (storageToken && storageUser) {
        setUser(() => JSON.parse(storageUser));
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      setLoading(() => false);
    }

    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth();
    setUser(() => response.user);

    await AsyncStorage.setItem('@aep:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@aep:token', response.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(() => null);
  }

  function setUserData(user: IUser) {
    setUser(() => user);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user: user, signIn, loading, signOut, setUserData}}>
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;
