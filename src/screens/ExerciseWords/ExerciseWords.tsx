import React, {useEffect, useState} from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import Pill from '../../components/atoms/Pill/Pill';
import {shuffle} from '../../utils/shuffleArray';
import * as S from './ExerciseWords.styles';

const mockData = {
  'slovo 1': 'preklad 1',
  'slovo 2': 'preklad 2',
  'slovo 3': 'preklad 3',
  'slovo 4': 'preklad 4',
  'slovo 5': 'preklad 5',
};

const ExerciseWords = ({navigation}) => {
  const [activeKey, setActiveKey] = useState('');
  const [activeVal, setActiveVal] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [nOfCompleted, setNOfCompleted] = useState(0);

  const [shuffledKeys] = useState<string[]>(shuffle(Object.keys(mockData)));
  const [shuffledVals] = useState<string[]>(shuffle(Object.values(mockData)));

  const getActiveKey = (item: string) => setActiveKey(item);
  const getActiveVal = (item: string) => setActiveVal(item);

  useEffect(() => {
    setIsCorrect(false);
    if (activeKey && activeVal) {
      if (mockData[activeKey] === activeVal) {
        setIsCorrect(true);
        setNOfCompleted(nOfCompleted + 1);
      } else {
        setActiveKey('');
        setActiveVal('');
      }
    }
  }, [activeKey, activeVal, nOfCompleted]);

  return (
    <S.Container>
      <S.PillsContainer>
        <S.LeftColumn>
          {shuffledKeys.map(item => (
            <Pill
              text={item}
              returnActive={getActiveKey}
              active={activeKey}
              isCorrect={isCorrect}
            />
          ))}
        </S.LeftColumn>
        <S.RightColumn>
          {shuffledVals.map(item => (
            <Pill
              text={item}
              returnActive={getActiveVal}
              active={activeVal}
              isCorrect={isCorrect}
            />
          ))}
        </S.RightColumn>
      </S.PillsContainer>
      {nOfCompleted === shuffledKeys.length && (
        <Button
          text="Správne! Pokračovať"
          onPress={() => navigation.navigate('Home')}
          type="success"
        />
      )}
      <BottomSafeArea />
    </S.Container>
  );
};

export default ExerciseWords;
