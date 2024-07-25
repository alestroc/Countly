import React from 'react';
import {SafeAreaView} from 'react-native';
import CardForYou from './src/components/cardForYou';

function App(): React.ReactElement {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eee', padding: 8}}>
      <CardForYou nEventi="25" />
    </SafeAreaView>
  );
}

export default App;
