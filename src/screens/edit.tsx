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

      <Text style={styles.fontup}> 10</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.edit1} onPress={() => {}}>
          <Text style={styles.centeredTxt}>Customize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.edit1} onPress={() => {}}>
          <Text style={styles.centeredTxt}>Change</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.edit2} onPress={() => {}}>
            <Text style={styles.centeredTxt}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit2} onPress={() => {}}>
            <Text style={styles.centeredTxt}>Decrement</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.edit2} onPress={() => {}}>
            <Text style={styles.centeredTxt}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit2} onPress={() => {}}>
            <Text style={styles.centeredTxt}>Change</Text>
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
    alignItems: 'center',
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
    flexDirection: 'row',
    height: 80,
  },
  centeredTxt: {
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  fontup: {
    fontSize: 55,
    color: 'black',
  },
  edit2: {
    margin: 3,
    borderRadius: 32,
    borderColor: 'black',
    borderWidth: 2,
    width: 190,
    height: 60,
  },
  edit1: {
    marginTop: 11,
    width: 190,
    height: 60,
  },
});
export default EditScreen;
