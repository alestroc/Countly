import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Input} from '@rneui/themed';

const EditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="My Counter" style={styles.input} />
      <Text style={styles.centered}> 10</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.edit} onPress={() => {}}>
          <Text style={styles.centered}>Customize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.edit} onPress={() => {}}>
          <Text style={styles.centered}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.edit} onPress={() => {}}>
            <Text style={styles.centered}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit} onPress={() => {}}>
            <Text style={styles.centered}>Decrement</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.edit} onPress={() => {}}>
            <Text style={styles.centered}>RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit} onPress={() => {}}>
            <Text style={styles.centered}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    paddingLeft: 21,
    borderWidth: 1.5,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 24,
    margin: 12,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    height: 100,
  },
  group: {},
  centered: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  edit: {
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 2,
    width: '50%',
    height: '50%',
  },
});
export default EditScreen;
