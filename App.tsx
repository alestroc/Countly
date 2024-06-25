import React from 'react';
import {SafeAreaView} from 'react-native';

import HomeScreen from './src/screens/home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
