import React from 'react';
import {SafeAreaView} from 'react-native';
import CardEvent from './src/components/cardEvent';

function App(): React.ReactElement {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eee', padding: 8}}>
      <CardEvent
        imgUrl=""
        title="Electro Music festival"
        location="S. Giovanni del Dosso(MN)"
        day="25"
        month="12"
      />
    </SafeAreaView>
  );
}

export default App;
