import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils/constants';

const styles = StyleSheet.create({
  todo: {
    backgroundColor: colors.bgToDo,
    padding: 5,
    borderRadius: 10,
  },
  todosWrapper: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorder,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: colors.darkPurple,
    fontFamily: fonts.bold,
  },
  date: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 10,
  },
  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icons: {
    // marginLeft: 10,
  },
});

export default styles;
