import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { UserType } from '../common/interfaces';

// @ts-ignore
const AuthContext = createContext<AuthProviderOutput>();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<UserType>();

  // Handle user state changes
  const onAuthStateChanged = user => {
    console.log(user); // TODO: remove before release
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider
      value={{
        initializing,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
