import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Input = ({
  placeholder = 'Type Something',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName,
  color,
  style,
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        multiline={multiline}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} color={color} style={[styles.icon, style]} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
