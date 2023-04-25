import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import GeneralStyles from '../../utils/generalStyles';

const Header = ({title = ''}) => {
  return (
    <LinearGradient
      colors={['#865DFF', '#E384FF', '#F3CCFF']}
      style={[GeneralStyles.linearGradient, styles.headerWrapper]}>
      {/* <View style={styles.headerWrapper}> */}
      <Text style={[GeneralStyles.linearText]}> {title}</Text>
      {/* </View> */}
    </LinearGradient>
  );
};

export default Header;
