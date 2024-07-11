import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyReusableComponent from '../components/generalButton.tsx';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RenderCard = ({title}: {title: string}) => {
  const navigation = useNavigation();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const loadCounter = async () => {
      const savedCounter = await AsyncStorage.getItem('counter');
      if (savedCounter) {
        setCounter(parseInt(savedCounter, 10));
      }
    };
    loadCounter();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('counter', counter.toString());
  }, [counter]);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardValue}>{counter}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCounter(counter + 1)}>
            <Text style={styles.white}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCounter(counter - 1)}>
            <Text style={styles.white}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.icon}>
        <MyReusableComponent
          textType="primary"
          type="primary"
          title="Show Details"
          onPress={() => navigation.navigate('Edit')}
        />
      </View>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countly</Text>
      <RenderCard title="Counter1" id="1" />
      <RenderCard title="Counter2" id="2" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 18,
    color: 'black',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardValue: {
    fontSize: 20,
    color: 'black',
  },
  button: {
    marginLeft: 5,
    backgroundColor: 'black',
    height: 32,
    width: 32,
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontSize: 20,
  },
});
