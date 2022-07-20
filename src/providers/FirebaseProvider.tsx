import React, { createContext, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';

// @ts-ignore
const FirebaseContext = createContext<FirebaseProvider>();

const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
  const modules = firestore().collection('modules');
  return (
    <FirebaseContext.Provider value={{ modules }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, useFirebase };
