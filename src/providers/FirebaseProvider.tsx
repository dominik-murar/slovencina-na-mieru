import React, { createContext, useContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

// @ts-ignore
const FirebaseContext = createContext<FirebaseProvider>();

const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
  const [moduleMap, setModuleMap] = useState(new Map());
  const [loading, setLoading] = useState(true);

  const getModule = async moduleNumber => {
    setLoading(true);
    const map = new Map();
    firestore()
      .collection(`modules/module-${moduleNumber}/words`)
      .get()
      .then(data => {
        data.forEach(item => {
          map.set(item.id, item.data());
        });
        setModuleMap(map);
      })
      .catch(e => console.log('error getting module data', e))
      .finally(() => setLoading(false));
  };

  return (
    <FirebaseContext.Provider value={{ getModule, moduleMap, loading }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, useFirebase };
