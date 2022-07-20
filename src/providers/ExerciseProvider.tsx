import React, { createContext, useContext, useState } from 'react';
import {
  ExerciseAnswer,
  ExerciseProviderOutput,
  MultipleOptionsMap,
  MultipleOptionsValueObject,
  SentencesWordValueObject,
  SentenceWordMap,
  TranslateWordsMap,
} from '../common/interfaces';

// @ts-ignore
const ExerciseContext = createContext<ExerciseProviderOutput>({});

const useExercise = () => useContext(ExerciseContext);

const ExerciseProvider = ({ children }) => {
  const [answer, setAnswer] = useState<ExerciseAnswer>([]);
  const [activeKey, setActiveKey] = useState<string>('');
  const [activeVal, setActiveVal] = useState<string>('');

  const [translateWordsMap] = useState<TranslateWordsMap>(
    new Map<string, string>([
      ['slovo 1', 'preklad 1'],
      ['slovo 2', 'preklad 2'],
      ['slovo 3', 'preklad 3'],
      ['slovo 4', 'preklad 4'],
      ['slovo 5', 'preklad 5'],
    ]),
  );

  const [sentenceWordMap, setSentenceWordMap] = useState<SentenceWordMap>(
    new Map<string, SentencesWordValueObject>([
      ['0', { word: 'a', isUsed: false }],
      ['1', { word: 'word1', isUsed: false }],
      ['2', { word: 'longWord', isUsed: false }],
      ['3', { word: 'wrd', isUsed: false }],
      ['4', { word: 'wooord', isUsed: false }],
      ['5', { word: 'wwrrddd', isUsed: false }],
      ['6', { word: 'wow', isUsed: false }],
    ]),
  );

  const [multipleOptionsMap, setMultipleOptionsMap] =
    useState<MultipleOptionsMap>(
      new Map<string, MultipleOptionsValueObject>([
        ['0', { word: 'prelozena veta 1', isSelected: false }],
        ['1', { word: 'dhsia prelozena veta, dlha', isSelected: false }],
        ['2', { word: 'mega extra obycajne dlha veta', isSelected: false }],
      ]),
    );

  const appendWord = (item: string) => {
    setAnswer(answer => [...answer, item]);
  };

  const removeWord = (item: string) => {
    setAnswer(answer => answer.filter(i => i != item));
  };

  const updateSentenceWordMap = (k: string, v: SentencesWordValueObject) => {
    setSentenceWordMap(new Map(sentenceWordMap.set(k, v)));
  };

  const updateMultipleOptionsMap = (
    k: string,
    v: MultipleOptionsValueObject,
  ) => {
    setMultipleOptionsMap(new Map(multipleOptionsMap.set(k, v)));
  };

  return (
    <ExerciseContext.Provider
      value={{
        answer,
        setAnswer,
        activeKey,
        setActiveKey,
        activeVal,
        setActiveVal,
        appendWord,
        removeWord,
        translateWordsMap,
        sentenceWordMap,
        updateSentenceWordMap,
        multipleOptionsMap,
        updateMultipleOptionsMap,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseProvider, useExercise };
