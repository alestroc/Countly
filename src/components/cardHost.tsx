import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardHost = () => {
  return (
    <View style={styles.main}>
      <View style={styles.txtArea}>
        <Text style={styles.title}>Diventa un Host!</Text>
        <Text style={styles.description}>
          Possiedi uno o più locali? Crea un Acount Host e inizia a
          sponsorizzare tutti i tuoi eventi. In pochi minuti potrai diventare un
          Host!
        </Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: 'https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg',
        }}
      />
    </View>
  );
};

export default CardHost;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 175,
    padding: 10,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  txtArea: {width: 200},
  image: {
    width: 150,
    height: 150,
    borderRadius: 16,
  },
  title: {
    fontSize: 21,
    marginBottom: 5,
    fontFamily: 'Lato-Black',
    color: 'black',
  },
  description: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Lato-Bold',
    color: 'black',
  },
});
