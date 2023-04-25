import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/constants';
import GeneralStyles from '../../utils/generalStyles';

const ToDo = ({todo = {}, index}) => {
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
          <Text style={styles.title}>{todo?.text}</Text>
          <Text style={styles.date}>
            {new Date(todo?.date).toLocaleString('tr-TR')}
          </Text>
        </View>
        <View style={styles.iconsWrapper}>
          <TouchableOpacity style={styles.icons}>
            <Icon
              name={todo?.completed === true ? 'happy-sharp' : 'earth'}
              color={todo?.completed === true ? colors.green : colors.gray}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Icon name="pencil-sharp" color={colors.info} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Icon name="trash-sharp" color={colors.danger} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ToDo;
