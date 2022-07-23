import React, { createContext, useContext, useEffect, useState } from 'react';
import { MULTIPLE_CHOICE_N_OF_OPTIONS } from '../common/config';
import {
  ExerciseProviderOutput,
  ExerciseCategory,
  MultipleChoiceMap,
  MultipleChoiceValueObject,
  WordBankValueObject,
  WordBankMap,
  TranslateWordsMap,
  SentenceExerciseType,
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
  const [sentenceExerciseType, setSentenceExerciseType] = useState<
    SentenceExerciseType | undefined
  >(undefined);
  const [answer, setAnswer] = useState<string>('');
  const [answerArray, setAnswerArray] = useState<Array<string>>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [assignment, setAssignment] = useState<string>('');
  const [activeKey, setActiveKey] = useState<string>('');
  const [activeVal, setActiveVal] = useState<string>('');

  const [translateWordsMap, setTranslateWordsMap] = useState<TranslateWordsMap>(
    new Map<string, string>(),
  );

  const [wordBankMap, setWordBankMap] = useState<WordBankMap>(
    new Map<string, WordBankValueObject>(),
  );

  const [multipleChoiceMap, setMultipleChoiceMap] = useState<MultipleChoiceMap>(
    new Map<string, MultipleChoiceValueObject>(),
  );

  const appendWord = (item: string) => {
    setAnswerArray(answerArray => [...answerArray, item]);
  };

  const removeWord = (item: string) => {
    setAnswerArray(answerArray => answerArray.filter(i => i !== item));
  };

  const updateWordBankMap = (k: string, v: WordBankValueObject) => {
    setWordBankMap(new Map(wordBankMap.set(k, v)));
  };

  const updateMultipleChoiceMap = (k: string, v: MultipleChoiceValueObject) => {
    setMultipleChoiceMap(new Map(multipleChoiceMap.set(k, v)));
  };

  const getAlternatives = (usedKey: string, keys: Array<string>) => {
    const altArray: Array<string> = [];
    if (exerciseCategory === 'sentences') {
      for (let i = 0; i < MULTIPLE_CHOICE_N_OF_OPTIONS - 1; i++) {
        altArray.push(sentencesMap.get(keys[i]).sk[0]);
      }
      return altArray;
    }
    if (exerciseCategory === 'questions') {
      for (let i = 0; i < MULTIPLE_CHOICE_N_OF_OPTIONS - 1; i++) {
        altArray.push(questionsMap.get(keys[i]).a.sk[0]);
      }
      return altArray;
    }
    return altArray;
  };

  const populateWordBankMap = (sentenceArray: Array<string>) => {
    setSentenceExerciseType('wordBank');
    const map = new Map<string, WordBankValueObject>();
    for (let i = 0; i < sentenceArray.length; i++) {
      map.set(i.toString(), { word: sentenceArray[i], isUsed: false });
    }
    setWordBankMap(map);
  };
  const populateMultipleChoiceMap = (
    sentence: string,
    usedKey: string,
    keys: Array<string>,
  ) => {
    setSentenceExerciseType('multipleChoice');
    const map = new Map<string, MultipleChoiceValueObject>();
    const alternatives: Array<string> = getAlternatives(usedKey, keys);

    const options = shuffle([...alternatives, sentence]);
    // for (let i = 0; i < MULTIPLE_CHOICE_N_OF_OPTIONS; i++) {
    for (let i = 0; i < options.length; i++) {
      map.set(i.toString(), { phrase: options[i], isSelected: false });
    }
    setMultipleChoiceMap(map);
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
    const keys = [...sentencesMap.keys()];
    const key = keys[10]; // TODO: randomise
    const sentenceObj = sentencesMap.get(key);
    const sentence = sentenceObj.sk[0].replace(/[?!"',.]/gm, '');
    setCorrectAnswer(sentence);
    setAssignment(sentenceObj.ua[0]);
    const sentenceArray = shuffle(sentence.split(' '));
    if (sentenceArray.length > 2) {
      populateWordBankMap(sentenceArray);
    } else {
      populateMultipleChoiceMap(sentence, key, keys);
    }
    setLoading(false);
  };

  const prepareExerciseQuestions = () => {
    setLoading(true);
    const keys = [...questionsMap.keys()];
    const key = keys[2]; // TODO: randomise
    const sentenceObj = questionsMap.get(key);
    const sentence = sentenceObj.a.sk[0];
    setCorrectAnswer(sentence);
    setAssignment(sentenceObj.q.sk[0]);
    populateMultipleChoiceMap(sentence, key, keys);
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
        sentenceExerciseType,
        answer,
        setAnswer,
        answerArray,
        setAnswerArray,
        correctAnswer,
        assignment,
        activeKey,
        setActiveKey,
        activeVal,
        setActiveVal,
        appendWord,
        removeWord,
        translateWordsMap,
        wordBankMap,
        updateWordBankMap,
        multipleChoiceMap,
        updateMultipleChoiceMap,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseProvider, useExercise };
