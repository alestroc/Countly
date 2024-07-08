// MyReusableComponent.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const GeneralButton = ({
  textType,
  type,
  title,
  onPress,
}: {
  textType?: any;
  type: any;
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={(styles.button, type === 'primary' ? styles.edit1 : styles.edit2)}
      onPress={onPress}>
      <Text
        style={
          (styles.text,
          textType === 'primary' ? styles.smallText : styles.centeredTxt)
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  edit2: {
    margin: 3,
    borderRadius: 32,
    borderColor: 'black',
    borderWidth: 2,
    width: '48%',
    height: 60,
  },
  edit1: {
    marginTop: 11,
    width: '48%',
    height: 60,
  },
  centeredTxt: {
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'grey',
  },
  smallText: {
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});

export default GeneralButton;
