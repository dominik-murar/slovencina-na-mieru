import React from 'react';
import * as S from './Module.styles';
import OutlinedCard from '../../components/atoms/OutlinedCard/OutlinedCard';
import Button from '../../components/atoms/Button/Button';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';

const Module = ({navigation}) => {
  return (
    <S.ScrollView>
      <S.Container>
        <S.Categories>
          <OutlinedCard
            category="Slovná zásoba"
            status={12}
            goal={40}
            onPress={() => navigation.navigate('ExerciseWords')}
          />
          <OutlinedCard
            category="Vety"
            status={51}
            goal={60}
            onPress={() => navigation.navigate('ExerciseSentences')}
          />
          <OutlinedCard category="Otázky a odpovede" status={5} goal={18} />
          <OutlinedCard category="Príbeh" status={1} goal={1} />
        </S.Categories>
        <Button
          text="Náhodný výber"
          onPress={() => navigation.navigate('ExerciseWords')}
        />
      </S.Container>
      <BottomSafeArea />
    </S.ScrollView>
  );
};

export default Module;
