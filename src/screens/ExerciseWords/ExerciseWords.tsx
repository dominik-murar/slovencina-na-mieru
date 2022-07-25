import React, { useEffect, useMemo, useState } from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import FulscreenLoader from '../../components/atoms/FullscreenLoader/FullscreenLoader';
import PillWordTranslate from '../../components/atoms/PillWordTranslate/PillWordTranslate';
import { useExercise } from '../../providers/ExerciseProvider';
import { shuffle } from '../../utils/shuffleArray';
import * as S from './ExerciseWords.styles';

const ExerciseWords = ({ navigation }) => {
  const {
    loading,
    activeKey,
    activeVal,
    setActiveKey,
    setActiveVal,
    translateWordsMap,
  } = useExercise();
  const [isCorrect, setIsCorrect] = useState(false);
  const [nOfCompleted, setNOfCompleted] = useState(0);

  const shuffledKeys = useMemo(
    () => shuffle([...translateWordsMap.keys()]),
    [translateWordsMap],
  );
  const shuffledVals = useMemo(
    () => shuffle([...translateWordsMap.values()]),
    [translateWordsMap],
  );

  useEffect(() => {
    setIsCorrect(false);
    if (activeKey && activeVal) {
      if (translateWordsMap.get(activeKey) === activeVal) {
        setIsCorrect(true);
        setNOfCompleted(nOfCompleted + 1);
      } else {
        setActiveKey('');
        setActiveVal('');
      }
    }
  }, [activeKey, activeVal]);

  if (loading) {
    return <FulscreenLoader />;
  }

  return (
    <S.Container alwaysBouncesVertical={false}>
      <S.CenterContainer>
        <S.Text>Spoj slovo s jeho prekladom</S.Text>
        <S.PillsContainer>
          <S.LeftColumn>
            {shuffledKeys.map(item => (
              <PillWordTranslate
                key={item}
                text={item}
                type="ua"
                isActive={activeKey === item}
                isCorrect={isCorrect && activeKey === item}
              />
            ))}
          </S.LeftColumn>
          <S.RightColumn>
            {shuffledVals.map(item => (
              <PillWordTranslate
                key={item}
                text={item}
                type="sk"
                isActive={activeVal === item}
                isCorrect={isCorrect && activeVal === item}
              />
            ))}
          </S.RightColumn>
        </S.PillsContainer>
      </S.CenterContainer>
      <Button
        text="Správne! Pokračovať"
        onPress={() => navigation.navigate('Home')}
        type="success"
        invisible={nOfCompleted < shuffledKeys.length}
      />
      <BottomSafeArea />
    </S.Container>
  );
};

export default ExerciseWords;
