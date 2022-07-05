import React from 'react';
import {View, Text, ListView, FlatList} from 'react-native';
import MainCard from '../components/atoms/MainCard/MainCard';

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
];

const Home = () => {
  return (
    <FlatList
      data={data}
      renderItem={MainCard}
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 8,
        backgroundColor: 'white',
      }}
    />
  );
};

export default Home;
