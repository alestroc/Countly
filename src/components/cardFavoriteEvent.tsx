import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardFavoriteEvent = ({
  imgUrl,
  title,
  location,
  date,
  hours,
  host,
}: {
  imgUrl: string;
  title: string;
  location: string;
  date: string;
  hours: string;
  host: string;
}) => {
  return (
    <View style={styles.row}>
      <Image
        source={{
          uri: imgUrl
            ? imgUrl
            : 'https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg',
        }}
        style={styles.imgArea}
      />
      <View style={styles.txtArea}>
        <Text style={styles.latoBold}>{title}</Text>
        <Text style={styles.latoBlack}>{location}</Text>
        <Text style={styles.latoBlack}>
          {date} - {hours}
        </Text>

        <Text style={styles.latoItalic}>"{host}"</Text>
      </View>
    </View>
  );
};

export default CardFavoriteEvent;
const styles = StyleSheet.create({
  row: {
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '20%',
  },
  imgArea: {
    borderRadius: 16,
    width: '40%',
    height: '100%',
  },
  txtArea: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: '55%',
    height: '90%',
  },
  latoBold: {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
  latoBlack: {
    color: 'black',
    fontFamily: 'Lato-Black',
  },
  latoItalic: {
    color: 'black',
    fontFamily: 'Lato-Italic',
    fontSize: 18,
  },
});
