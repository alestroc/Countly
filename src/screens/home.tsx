import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MyReusableComponent from '../components/generalButton.tsx';
import {useNavigation} from '@react-navigation/native';

const renderCard = (title: string, value: string) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardValue}>{value}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.white}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.white}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.icon}>
        <MyReusableComponent
          textType="primary"
          type="primary"
          title="Show Dettails"
          onPress={() => console.log('Clicked!')}
        />
      </View>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countly</Text>
      {renderCard('Counter 1', '100')}
      {renderCard('Inactive User', '10')}
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
