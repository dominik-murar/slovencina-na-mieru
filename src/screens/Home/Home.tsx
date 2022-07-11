import React from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import MainCard from '../../components/atoms/MainCard/MainCard';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader';
import * as S from './Home.styles';

const data = [
  {
    key: 1,
    module: 'MODUL 1',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    locked: false,
  },
  {
    key: 2,
    module: 'MODUL 2',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    locked: false,
  },
  {
    key: 3,
    module: 'MODUL 3',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    locked: true,
  },
  {
    key: 4,
    module: 'MODUL 4',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    locked: true,
  },
  {
    key: 5,
    module: 'MODUL 5',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    locked: true,
  },
];

const Home = ({navigation}) => {
  return (
    <S.FlatList
      data={data}
      renderItem={({item}) =>
        MainCard({item: item, onPress: () => navigation.navigate('Module')})
      }
      ListHeaderComponent={HomeHeader}
      ListFooterComponent={BottomSafeArea}
    />
  );
};

export default Home;
