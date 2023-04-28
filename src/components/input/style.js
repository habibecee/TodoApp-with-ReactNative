import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    borderWidth: 3,
    borderColor: colors.inputBorder,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: colors.inputBorder,
    fontSize: 16,
    flex: 1,
  },

  icon: {
    fontSize: 30,
    // color: colors.bgPrimary,
    marginLeft: -40,
  },
});

export default styles;
