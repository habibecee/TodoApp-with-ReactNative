import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils/constants';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContentWrapper: {
    width: '80%',
    backgroundColor: colors.bgToDo,
    padding: 20,
    borderRadius: 10,
  },

  title: {
    color: colors.bgSecondary,
    fontFamily: fonts.bold,
    fontSize: 25,
    textAlign: 'center',
  },

  validationError: {
    color: colors.danger,
    textAlign: 'left',
    marginLeft: 25,
  },

  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    marginTop: 20,
  },

  closeButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.danger,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: colors.danger,
    fontFamily: fonts.bold,
    fontSize: 20,
  },

  confirmButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: colors.green,
  },
  confirmButtonText: {
    color: 'black',
    fontFamily: fonts.bold,
    fontSize: 20,
  },
});

export default styles;
