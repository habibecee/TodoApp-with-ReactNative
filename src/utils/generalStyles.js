import {StyleSheet} from 'react-native';
import {colors, fonts} from './constants';

const GeneralStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },

  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  linearText: {
    fontSize: 28,
    fontFamily: fonts.bold,
    textAlign: 'center',
    margin: 10,
    color: '#060047',
    backgroundColor: 'transparent',
  },

  bgWhite: {
    backgroundColor: colors.white,
  },

  opacityFull: {
    opacity: 1,
  },
  opacityLess: {
    opacity: 0.5,
    backgroundColor: '#EEEEEE',
  },
});

export default GeneralStyles;
