import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Input} from '@rneui/themed';
import MyReusableComponent from '../components/generalButton.tsx';
import {useRoute, RouteProp} from '@react-navigation/native';

const EditScreen = () => {
  const route = useRoute();
  const {valCounter} = route.params as {valCounter: string};
  // se cambiassi valCounter con id (stessa cosa nella pagina home), non mi da nessun errore, wtf

  return (
    <SafeAreaView>
      <View>
        <Input placeholder="My Counter" style={styles.input} />

        <Text style={styles.fontup}> {valCounter}</Text>
        <View style={styles.row}>
          <MyReusableComponent
            type="primary"
            title="ciao"
            onPress={() => console.log('Clicked!')}
          />
          <MyReusableComponent
            type="primary"
            title="home"
            onPress={() => console.log('Clicked!')}
          />
        </View>
        <View style={styles.row}>
          <MyReusableComponent
            type="sceondary"
            title="Increment"
            onPress={() => console.log('Clicked!')}
          />
          <MyReusableComponent
            type="secondary"
            title="Decrement"
            onPress={() => console.log('Clicked!')}
          />
        </View>
        <View style={styles.row}>
          <MyReusableComponent
            type="secondary"
            title="Edit"
            onPress={() => console.log('Clicked!')}
          />
          <MyReusableComponent
            type="secdonary"
            title="home"
            onPress={() => console.log('Clicked!')}
          />
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
    marginTop: 15,
  },
  fontup: {
    textAlign: 'center',
    fontSize: 55,
    color: 'black',
  },
});
export default EditScreen;
