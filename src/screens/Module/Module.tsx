import React, { useEffect } from 'react';
import * as S from './Module.styles';
import OutlinedCard from '../../components/atoms/OutlinedCard/OutlinedCard';
import Button from '../../components/atoms/Button/Button';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import { ScreenNames } from '../../common/enum';
import { useFirebase } from '../../providers/FirebaseProvider';
import { ActivityIndicator } from 'react-native';

const Module = ({ navigation }) => {
  const { getModule, loading } = useFirebase();
  useEffect(() => {
    getModule('1');
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <S.ScrollView>
      <S.Container>
        <S.Categories>
          <OutlinedCard
            category="Slovná zásoba"
            status={12}
            goal={40}
            onPress={() => navigation.navigate(ScreenNames.ExerciseWords)}
          />
          <OutlinedCard
            category="Vety"
            status={51}
            goal={60}
            onPress={() => navigation.navigate(ScreenNames.ExerciseSentences)}
          />
          <OutlinedCard
            category="Otázky a odpovede"
            status={5}
            goal={18}
            onPress={() => navigation.navigate(ScreenNames.ExerciseQuestions)}
          />
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
