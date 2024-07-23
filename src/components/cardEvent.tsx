import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardEvent = ({
  imgUrl,
  title,
  location,
  day,
  month,
}: {
  imgUrl: string;
  title: string;
  location: string;
  day: string;
  month: string;
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imgUrl
              ? imgUrl
              : 'https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg',
          }}
          style={styles.imgArea}
        />
        <Text style={styles.overlayText}>Sab</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.config1}>
          <Text style={styles.latoBlack}>{day}</Text>
          <Text style={styles.latoBlack}>{month}</Text>
        </View>
        <View style={styles.config2}>
          <Text style={styles.latoBlack}>{title}</Text>
          <Text style={styles.latoBold}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardEvent;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 370,
    backgroundColor: 'white',
    borderBottomRightRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgArea: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    height: 300,
    width: '100%',
  },
  config1: {
    paddingLeft: 15,
    paddingTop: 7,
    height: 70,
    width: '15%',
    borderBottomLeftRadius: 16,
  },
  config2: {
    height: 70,
    justifyContent: 'space-evenly',
    width: '85%',
    borderBottomRightRadius: 16,
  },
  latoBlack: {
    fontSize: 23,
    color: 'black',
    fontFamily: 'Lato-Black',
  },
  latoBold: {
    color: 'black',
    fontFamily: 'Lato-Bold',
    fontSize: 23,
  },
  imageContainer: {
    position: 'relative',
  },
  overlayText: {
    paddingTop: 5,
    textAlign: 'center',
    position: 'absolute',
    backgroundColor: 'grey',
    height: 30,
    width: 50,
    bottom: 10,
    color: 'white',
    fontFamily: 'Lato-Black',
  },
});
