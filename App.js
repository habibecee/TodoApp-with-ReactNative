import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/header';
import GeneralStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Input from './src/components/input';
import {colors} from './src/utils/constants';
import ToDo from './src/components/todo';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <SafeAreaView style={[GeneralStyles.flex1, GeneralStyles.bgWhite]}>
      <Header title="My Todo App" />
      <Input
        color={colors.inputBorder}
        iconName="paw-sharp"
        hasIcon={true}
        value={text}
        onChangeText={text => setText(text)}
        placeholder="Enter your goals"
        onIconPress={addTodo}
      />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}> No goals here yet! </Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {todos?.map((todo, index) => (
              <ToDo
                todos={todos}
                setTodos={setTodos}
                key={index}
                todo={todo}
                index={index + 1}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textSpecial,
  },

  scrollView: {
    flexGrow: 1,
  },
});

export default App;
