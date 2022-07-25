import React, { createContext, useContext, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { ExerciseCategory, ModuleMap } from '../common/interfaces';
import { useAuth } from './AuthProvider';

// @ts-ignore
const FirebaseContext = createContext<FirebaseProviderOutput>();

const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
  const { user } = useAuth();
  const [wordsMap, setWordsMap] = useState(new Map<string, Object>());
  const [sentencesMap, setSentencesMap] = useState(new Map<string, Object>());
  const [questionsMap, setQuestionsMap] = useState(new Map<string, Object>());
  // const [storiesMap, setStoriesMap] = useState(new Map());
  const [loading, setLoading] = useState(true);

  const lessonTypes: ExerciseCategory[] = ['words', 'sentences', 'questions'];
  const setMap = (type: string, map: ModuleMap) => {
    if (type === 'words') setWordsMap(map);
    if (type === 'sentences') setSentencesMap(map);
    if (type === 'questions') setQuestionsMap(map);
    // if (type === 'stories') setQuestionsMap(map);
  };

  const getModule = async (moduleNumber: string) => {
    lessonTypes.map(type => {
      setLoading(true);
      const map = new Map<string, Object>();
      firestore()
        .collection(`modules/module-${moduleNumber}/${type}`)
        .get()
        .then(data => {
          data.forEach(item => {
            map.set(item.id, item.data());
          });
          setMap(type, map);
        })
        .catch(e => console.log('error getting module data', e))
        .finally(() => setLoading(false));
    });
  };

  let userDirectory;

  useEffect(() => {
    if (user?.uid) {
      userDirectory = firestore().collection('users').doc(user.uid.toString());
      // .set({'module_1': 'no progress yet'})
      // .then(onSignupInProgressChange(false))
      userDirectory
        .get()
        .then(data => console.log('userDirectory', data._exists));
      console.log('userDirectory');
      // userDirectory.get();}
    }
  }, [user]);

  return (
    <FirebaseContext.Provider
      value={{
        getModule,
        wordsMap,
        sentencesMap,
        questionsMap,
        loading,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, useFirebase };
