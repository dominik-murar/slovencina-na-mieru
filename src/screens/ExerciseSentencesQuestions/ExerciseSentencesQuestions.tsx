import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import SentenceInput from '../../components/molecules/SentenceInput/SentenceInput';
import WordBank from '../../components/molecules/WordBank/WordBank';
import { useExercise } from '../../providers/ExerciseProvider';
import FulscreenLoader from '../../components/atoms/FullscreenLoader/FullscreenLoader';
import * as S from './ExerciseSentencesQuestions.styles';
import MultipleChoiceBank from '../../components/molecules/MultipleChoiceBank/MultipleChoiceBank';

const ExerciseSentences = ({ navigation }) => {
  const {
    answer,
    setAnswer,
    answerArray,
    setAnswerArray,
    correctAnswer,
    assignment,
    sentenceExerciseType,
    wordBankMap,
    loading,
  } = useExercise();
  const { t } = useTranslation();

  const [buttonAction, setButtonAction] = useState<
    'confirm' | 'correct' | 'failed'
  >('confirm');

  const [buttonText, setButtonText] = useState<string>('');
  const [buttonOnPress, setButtonOnPress] = useState<() => void>();
  const [buttonType, setButtonType] = useState<'default' | 'success'>();

  const handlePressConfirm = () => {
    switch (sentenceExerciseType) {
      case 'multipleChoice':
        if (answer === correctAnswer) {
          setButtonAction('correct');
        } else setButtonAction('failed');
        break;
      case 'wordBank':
        let decodedAnswer = '';
        answerArray.map(id => {
          const word = wordBankMap.get(id)?.word || 'bb';
          decodedAnswer = decodedAnswer.concat(' ', word);
        });
        if (
          decodedAnswer.trim() ===
          correctAnswer.replace(/[?!"',.]/gm, '').trim()
        ) {
          setButtonAction('correct');
        } else {
          setButtonAction('failed');
        }
        break;
    }
  };

  const handlePressContinue = () => {
    setAnswer('');
    setAnswerArray([]);
    navigation.navigate('Home');
  };

  useEffect(() => {
    switch (buttonAction) {
      case 'correct':
        setButtonText(t('common.buttonSuccess'));
        setButtonOnPress(() => handlePressContinue);
        setButtonType('success');
        break;
      case 'failed':
        setButtonText(t('common.buttonWrong'));
        setButtonOnPress(() => handlePressContinue);
        setButtonType('default');
        break;
      default:
        setButtonText(t('common.buttonConfirm'));
        setButtonOnPress(() => handlePressConfirm);
        setButtonType('default');
        break;
    }
  }, [buttonAction, answer, answerArray, correctAnswer]);

  return (
    <S.Wrapper>
      {loading ? <FulscreenLoader /> : null}
      <S.Container>
        <S.CenterContainer>
          <S.Text>{assignment}</S.Text>
          {sentenceExerciseType === 'wordBank' ? <SentenceInput /> : null}
        </S.CenterContainer>
        {sentenceExerciseType === 'wordBank' ? (
          <WordBank />
        ) : (
          <MultipleChoiceBank />
        )}
      </S.Container>
      <Button text={buttonText} onPress={buttonOnPress} type={buttonType} />
      <BottomSafeArea />
    </S.Wrapper>
  );
};

export default ExerciseSentences;
