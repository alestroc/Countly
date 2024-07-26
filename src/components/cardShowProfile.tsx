import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CardShowProfile = ({name, imgUrl}: {name: string; imgUrl: string}) => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={{
          uri: imgUrl
            ? imgUrl
            : 'https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg',
        }}
      />
      <View style={styles.txtArea}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.info}>Mostra Profilo</Text>
      </View>
      <TouchableOpacity style={styles.icona} />
    </View>
  );
};

export default CardShowProfile;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    width: '100%',
    borderRadius: 16,
    margin: 3,
  },
  image: {
    marginLeft: 10,
    width: 80,
    height: 80,
    borderRadius: 16,
  },

  txtArea: {
    marginLeft: -55,
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Lato-Black',
  },
  info: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  icona: {
    borderWidth: 2,

    marginRight: 30,
    height: 55,
    width: 35,
  },
});
