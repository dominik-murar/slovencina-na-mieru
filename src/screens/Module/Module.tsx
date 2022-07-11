import React from 'react';
import * as S from './Module.styles';
import OutlinedCard from '../../components/atoms/OutlinedCard/OutlinedCard';
import Button from '../../components/atoms/Button/Button';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';

const Module = () => {
  return (
    <S.ScrollView>
      <S.Container>
        <S.Categories>
          <OutlinedCard category="Slovná zásoba" status={12} goal={40} />
          <OutlinedCard category="Vety" status={51} goal={60} />
          <OutlinedCard category="Otázky a odpovede" status={5} goal={18} />
          <OutlinedCard category="Príbeh" status={1} goal={1} />
        </S.Categories>
        <Button />
      </S.Container>
      <BottomSafeArea />
    </S.ScrollView>
  );
};

export default Module;
