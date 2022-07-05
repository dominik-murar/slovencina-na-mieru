import React from 'react';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MainCard from '../../components/atoms/MainCard/MainCard';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader';
import {useTheme} from '../../providers/ThemeProvider';

const data = [
  {
    key: 1,
    module: 'MODUL 1',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
  },
  {
    key: 2,
    module: 'MODUL 2',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
  },
  {
    key: 3,
    module: 'MODUL 3',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
  },
  {
    key: 4,
    module: 'MODUL 4',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
  },
  {
    key: 5,
    module: 'MODUL 5',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
  },
  {
    key: 6,
    module: 'MODUL 6',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
  },
  {
    key: 7,
    module: 'MODUL 7',
    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
  },
];

const Home = () => {
  const {top: insetTop} = useSafeAreaInsets();
  const {theme} = useTheme();
  return (
    <FlatList
      data={data}
      renderItem={MainCard}
      ListHeaderComponent={HomeHeader}
      ListHeaderComponentStyle={{
        flexGrow: 1,
      }}
      contentContainerStyle={{
        flexGrow: 2,
        paddingHorizontal: 24,
        paddingTop: insetTop + 24,
        paddingBottom: 8,
        backgroundColor: theme.colors.background,
      }}
    />
  );
};

export default Home;
