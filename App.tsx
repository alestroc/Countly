import React from 'react';
import {SafeAreaView} from 'react-native';
import CardHost from './src/components/cardHost';

function App(): React.ReactElement {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eee', padding: 8}}>
      <CardHost />
    </SafeAreaView>
  );
}

export default App;
