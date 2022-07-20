import React, { createContext, useContext, useState } from 'react';
import {
  ExerciseAnswer,
  ExerciseProviderOutput,
  ExerciseSentencesWordObject,
  SentenceWordBank,
} from '../common/interfaces';

// @ts-ignore
const ExerciseContext = createContext<ExerciseProviderOutput>({});

const useExercise = () => useContext(ExerciseContext);

const ExerciseProvider = ({ children }) => {
  const [answer, setAnswer] = useState<ExerciseAnswer>([]);

  const [sentenceWordBank, setSentenceWordBank] = useState<SentenceWordBank>(
    new Map<string, ExerciseSentencesWordObject>([
      ['0', { word: 'a', isUsed: false }],
      ['1', { word: 'word1', isUsed: false }],
      ['2', { word: 'longWord', isUsed: false }],
      ['3', { word: 'wrd', isUsed: false }],
      ['4', { word: 'wooord', isUsed: false }],
      ['5', { word: 'wwrrddd', isUsed: false }],
      ['6', { word: 'wow', isUsed: false }],
    ]),
  );

  const appendWord = (item: string) => {
    setAnswer(answer => [...answer, item]);
  };

  const removeWord = (item: string) => {
    setAnswer(answer => answer.filter(i => i != item));
  };

  const updateSentenceWordBank = (
    k: string,
    v: ExerciseSentencesWordObject,
  ) => {
    setSentenceWordBank(new Map(sentenceWordBank.set(k, v)));
  };

  return (
    <ExerciseContext.Provider
      value={{
        answer,
        setAnswer,
        appendWord,
        removeWord,
        sentenceWordBank,
        updateSentenceWordBank,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseProvider, useExercise };
