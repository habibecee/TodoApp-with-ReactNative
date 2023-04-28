import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import GeneralStyles from '../../utils/generalStyles';

const Header = ({title = ''}) => {
  return (
    // <View style={styles.headerWrapper} >
    <LinearGradient
      colors={['#865DFF', '#E384FF', '#F3CCFF']}
      style={[GeneralStyles.linearGradient, styles.headerWrapper]}>
      {/* <View style={styles.headerWrapper}> */}
      <Text style={[GeneralStyles.linearText, styles.title]}> {title}</Text>
      {/* </View> */}
    </LinearGradient>
    // </View>
  );
};

export default Header;
