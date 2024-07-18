import React from 'react';
import {SafeAreaView} from 'react-native';
import CardFavoriteEvent from './src/components/cardFavoriteEvent';

function App(): React.ReactElement {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eee', padding: 8}}>
      <CardFavoriteEvent
        title="Electro Music Festival"
        location="S. Giovanni del Dosso(MN)"
        date="25/12"
        hours="ore 21:30"
        host="Soundsystem Verona"
        imgUrl="https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg"
      />
    </SafeAreaView>
  );
}

export default App;
