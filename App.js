import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Header from './src/components/header';
import GeneralStyles from './src/utils/generalStyles';
function App() {
  return (
    <SafeAreaView style={GeneralStyles.flex1}>
      <Header title="My Todo App" />
    </SafeAreaView>
  );
}

export default App;
