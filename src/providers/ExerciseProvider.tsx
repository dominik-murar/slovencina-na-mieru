import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  ExerciseAnswer,
  ExerciseProviderOutput,
  ExerciseCategory,
  MultipleOptionsMap,
  MultipleOptionsValueObject,
  SentencesWordValueObject,
  SentenceWordsMap,
  TranslateWordsMap,
} from '../common/interfaces';
import { shuffle } from '../utils/shuffleArray';
import { useFirebase } from './FirebaseProvider';

// @ts-ignore
const ExerciseContext = createContext<ExerciseProviderOutput>({});

const useExercise = () => useContext(ExerciseContext);

const ExerciseProvider = ({ children }) => {
  const { wordsMap, sentencesMap, questionsMap } = useFirebase();
  const [loading, setLoading] = useState(true);
  const [exerciseCategory, setExerciseCategory] = useState<
    ExerciseCategory | undefined
  >(undefined);
  const [answer, setAnswer] = useState<ExerciseAnswer>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [assignment, setAssignment] = useState<string>('');
  const [activeKey, setActiveKey] = useState<string>('');
  const [activeVal, setActiveVal] = useState<string>('');

  const [translateWordsMap, setTranslateWordsMap] = useState<TranslateWordsMap>(
    new Map<string, string>(),
  );

  const [sentenceWordsMap, setSentenceWordsMap] = useState<SentenceWordsMap>(
    new Map<string, SentencesWordValueObject>(),
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
    setAnswer(answer => answer.filter(i => i !== item));
  };

  const updateSentenceWordsMap = (k: string, v: SentencesWordValueObject) => {
    setSentenceWordsMap(new Map(sentenceWordsMap.set(k, v)));
  };

  const updateMultipleOptionsMap = (
    k: string,
    v: MultipleOptionsValueObject,
  ) => {
    setMultipleOptionsMap(new Map(multipleOptionsMap.set(k, v)));
  };

  const prepareExerciseWords = () => {
    setLoading(true);
    const map = new Map();
    const keys = [...wordsMap.keys()];
    // TODO: add semi-random algorithm
    for (let i = 0; i < 5; i++) {
      const wordObj = wordsMap.get(keys[i]);
      map.set(wordObj.ua[0], wordObj.sk[0]);
    }
    setTranslateWordsMap(map);
    setLoading(false);
  };

  const prepareExerciseSentences = () => {
    setLoading(true);
    const map = new Map<string, SentencesWordValueObject>();
    const keys = [...sentencesMap.keys()];
    const key = keys[10]; // TODO: randomise
    const sentenceObj = sentencesMap.get(key);
    const sentence = sentenceObj.sk[0].replace(/[?!"',.]/gm, '');
    setCorrectAnswer(sentence);
    setAssignment(sentenceObj.ua[0]);
    const sentenceArray = shuffle(sentence.split(' '));
    for (let i = 0; i < sentenceArray.length; i++) {
      map.set(i.toString(), { word: sentenceArray[i], isUsed: false });
    }
    setSentenceWordsMap(map);
    setLoading(false);
  };

  const prepareExerciseQuestions = () => {
    setLoading(true);
    const map = new Map<string, SentencesWordValueObject>();
    const keys = [...questionsMap.keys()];
    const key = keys[9]; // TODO: randomise
    const sentenceObj = sentencesMap.get(key);
    const sentence = sentenceObj.ua[0].replace(/[?!"',.]/gm, '');
    setCorrectAnswer(sentence);
    setAssignment(sentenceObj.sk[0]);
    const sentenceArray = shuffle(sentence.split(' '));
    for (let i = 0; i < sentenceArray.length; i++) {
      map.set(i.toString(), { word: sentenceArray[i], isUsed: false });
    }
    setSentenceWordsMap(map);
    setLoading(false);
  };

  // const prepareExerciseStories = () => {}

  useEffect(() => {
    if (exerciseCategory === 'words') prepareExerciseWords();
    if (exerciseCategory === 'sentences') prepareExerciseSentences();
    if (exerciseCategory === 'questions') prepareExerciseQuestions();
    setExerciseCategory(undefined);
  }, [exerciseCategory]);

  return (
    <ExerciseContext.Provider
      value={{
        loading,
        setExerciseCategory,
        answer,
        setAnswer,
        correctAnswer,
        assignment,
        activeKey,
        setActiveKey,
        activeVal,
        setActiveVal,
        appendWord,
        removeWord,
        translateWordsMap,
        sentenceWordsMap,
        updateSentenceWordsMap,
        multipleOptionsMap,
        updateMultipleOptionsMap,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseProvider, useExercise };
