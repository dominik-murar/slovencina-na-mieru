import React, {createContext, useState, useContext} from 'react';
import {ExerciseWordsContextValue} from '../interfaces/providers';

// @ts-ignore
const ExerciseWordsContext = createContext<ExerciseWordsContextValue>({});

const ExerciseWordsProvider = ({children}) => {
  const [activeKey, setActiveKey] = useState('');
  const [activeVal, setActiveVal] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  return (
    <ExerciseWordsContext.Provider
      value={{
        activeKey,
        setActiveKey,
        activeVal,
        setActiveVal,
        isCorrect,
        setIsCorrect,
      }}>
      {children}
    </ExerciseWordsContext.Provider>
  );
};

const useExerciseWordsContext = () => {
  return useContext(ExerciseWordsContext);
};

export {ExerciseWordsProvider, useExerciseWordsContext};
