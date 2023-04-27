import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import styles from './style';
import Input from '../input';

const EditModal = ({
  visible,
  closeModal,
  willEditTodo,
  setWillEditTodo,
  onConfirm,
  hasError,
  errorMessage,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Edit</Text>
          <Input
            value={willEditTodo}
            onChangeText={text => setWillEditTodo(text)}
            placeholder="Edit your todo"
          />

          {hasError && (
            <Text style={styles.validationError}> {errorMessage} </Text>
          )}

          <View style={styles.buttonsWrapper}>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.closeButtonWrapper}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButtonWrapper}
              onPress={onConfirm}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
