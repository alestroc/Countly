import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardFavoriteEvent from './src/components/cardFavoriteEvent';

import HomeScreen from './src/screens/home';
import EditScreen from './src/screens/edit';
import GeneralButton from './src/components/generalButton';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <CardFavoriteEvent
        title="Electro Music Festival"
        location="S. Giovanni del Dosso(MN)"
        date="25/12"
        hours="ore 21:30"
        host="Soundsystem Verona"
        imgUrl="https://placehold.co/110x160"
      />
    </>
  );
}

export default App;
