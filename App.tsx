import React from 'react';
import {SafeAreaView} from 'react-native';
import CardShowProfile from './src/components/cardShowProfile';

function App(): React.ReactElement {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eee', padding: 8}}>
      <CardShowProfile name="Pinko Pallino" />
      <CardShowProfile name="Pinko Pallino" />

      <CardShowProfile name="Pinko Pallino" />
    </SafeAreaView>
  );
}

export default App;
