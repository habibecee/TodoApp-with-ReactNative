import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from './src/components/header';
import GeneralStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
function App() {
  return (
    <SafeAreaView style={GeneralStyles.flex1}>
      <Header title="My Todo App" />
      <View>
        <Text> TODO APP WEEK 1</Text>
        <Icon name="pluscircle" size={25} color="red" />
      </View>
    </SafeAreaView>
  );
}

export default App;
