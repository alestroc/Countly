import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const HomeScreen = () => {
  const [number, setNumber] = useState(0); // Add this line

  const increment = () => {
    setNumber(number + 1); // Add this line
  };
  const decrement = () => {
    setNumber(number - 1); // Add this line
  };

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <View>
          <Text style={styles.num}> {number}</Text>
        </View>
        <View style={styles.bar}>
          <TouchableOpacity onPress={increment}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Contatore 1</Text>
      <View style={styles.counter}>
        <View>
          <Text style={styles.num}> {number}</Text>
        </View>
        <View style={styles.bar}>
          <TouchableOpacity onPress={increment}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Contatore 2</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    flexDirection: 'row',
    height: 100,
    width: '90%',
    backgroundColor: 'lightgreen',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bar: {
    justifyContent: 'space-around',
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  button: {
    flexDirection: 'column',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    height: 35,
    width: 35,
    borderRadius: 15,
    margin: 3,
    justifyContent: 'flex-end',
  },
  num: {
    height: 50,
    width: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
});
