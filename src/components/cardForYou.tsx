import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animatedfrom, {useSharedValue} from 'react-native-reanimated';

const CardForYou = ({nEventi}: {nEventi: string}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.config1} />
      <Text style={styles.config2}>{nEventi} Eventi</Text>
    </View>
  );
};

export default CardForYou;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    width: '100%',
    bottom: 0,
  },
  config1: {
    borderWidth: 2,

    position: 'relative',
    top: 8,
    backgroundColor: 'lightgrey',
    height: 20,
    width: '25%',
    alignSelf: 'center',
    borderRadius: 16,
  },
  config2: {
    borderWidth: 2,

    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: 'white',
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
