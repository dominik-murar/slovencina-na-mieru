import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './HomeStats.styles';

const HomeStats = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.TextPrimary>{t('home.welcome')}</S.TextPrimary>
      {/* <S.Text>Tu budú štatistiky</S.Text> */}
    </S.Container>
  );
};

export default HomeStats;
