import React, { createContext, useContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { ExerciseType, ModuleMap } from '../common/interfaces';

// @ts-ignore
const FirebaseContext = createContext<FirebaseProviderOutput>();

const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
  const [wordsMap, setWordsMap] = useState(new Map<string, Object>());
  const [sentencesMap, setSentencesMap] = useState(new Map<string, Object>());
  const [questionsMap, setQuestionsMap] = useState(new Map<string, Object>());
  // const [storiesMap, setStoriesMap] = useState(new Map());
  const [loading, setLoading] = useState(true);

  const lessonTypes: ExerciseType[] = ['words', 'sentences', 'questions'];
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
