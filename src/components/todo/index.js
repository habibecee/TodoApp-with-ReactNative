import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, fonts} from '../../utils/constants';
import GeneralStyles from '../../utils/generalStyles';

const ToDo = ({todo = {}, index, todos = [], setTodos = () => {}}) => {
  const deleteTodo = () => {
    Alert.alert('Delete', `Are you sure to delete "${todo?.text}"?`, [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const filteredTodos = todos?.filter(item => item.id !== todo?.id);
          setTodos(filteredTodos);
        },
        style: 'descructive',
      },
    ]);
  };

  const changeCompleted = () => {
    Alert.alert('Change Status', "Do you want to change status to 'Done'", [
      {
        text: 'Change Status',
        onPress: () => {
          const tempArray = [];
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id) {
              tempArray.push(todos[i]);
            } else {
              const newTodo = {...todo, completed: !todo.completed};
              tempArray.push(newTodo);
            }
          }
          setTodos(tempArray);
        },
        style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  return (
    <View
      style={[
        styles.todo,
        todo?.completed === true
          ? GeneralStyles.opacityLess
          : GeneralStyles.opacityFull,
      ]}>
      <View>
        <Text style={styles.title}>{index}</Text>
      </View>
      <View style={styles.todosWrapper}>
        <View>
          <Text
            style={[styles.title, todo?.completed && styles.completedTitle]}>
            {todo?.text}
          </Text>
          <Text style={styles.date}>
            {new Date(todo?.date).toLocaleString('tr-TR')}
          </Text>
        </View>
        <View style={styles.iconsWrapper}>
          <TouchableOpacity style={styles.icons} onPress={changeCompleted}>
            <Icon
              name={todo?.completed === true ? 'happy-sharp' : 'earth'}
              color={todo?.completed === true ? colors.green : colors.gray}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Icon name="pencil-sharp" color={colors.info} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={deleteTodo}>
            <Icon name="trash-sharp" color={colors.danger} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ToDo;
