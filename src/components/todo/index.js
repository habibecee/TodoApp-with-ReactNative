import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, fonts} from '../../utils/constants';
import GeneralStyles from '../../utils/generalStyles';
import EditModal from '../editModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDo = ({todo = {}, index, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditTodo, setWillEditTodo] = useState(todo.text);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
          // setTodos(filteredTodos);
          AsyncStorage.setItem('@todos', JSON.stringify(filteredTodos))
            .then(res => {
              setTodos(filteredTodos);
            })
            .catch(err => Alert.alert('Error', 'Error while deleting item'));
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
          // setTodos(tempArray);
          AsyncStorage.setItem('@todos', JSON.stringify(tempArray))
            .then(res => {
              setTodos(tempArray);
            })
            .catch(err => Alert.alert('Error', 'Error while changing status'));
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

  const editTodo = () => {
    // VALIDATION
    if (willEditTodo === '') {
      setHasError(true);
      setErrorMessage('This field cannot be left blank!');
      setTimeout(() => {
        setHasError(false);
        setErrorMessage('');
      }, 4000);
      return;
    }

    // EDIT PROCESS
    const tempArray = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== todo.id) {
        tempArray.push(todos[i]);
      } else {
        const updatedTodo = {...todo, text: willEditTodo};
        tempArray.push(updatedTodo);
      }
    }
    // setTodos(tempArray);
    AsyncStorage.setItem('@todos', JSON.stringify(tempArray))
      .then(res => {
        setTodos(tempArray);
      })
      .catch(err => Alert.alert('Error', 'Error while editing item'));
    setOpenModal(false);
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
        <View style={styles.todoTextWrapper}>
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
            {todo?.completed === true ? (
              <Icon name="happy-sharp" color={colors.gray} size={25} />
            ) : (
              <Icon name="earth" color={colors.gray} size={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => setOpenModal(true)}>
            <Icon name="pencil-sharp" color={colors.info} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={deleteTodo}>
            <Icon name="trash-sharp" color={colors.danger} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <EditModal
        willEditTodo={willEditTodo}
        setWillEditTodo={setWillEditTodo}
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        onConfirm={editTodo}
        hasError={hasError}
        errorMessage={errorMessage}
      />
    </View>
  );
};

export default ToDo;
