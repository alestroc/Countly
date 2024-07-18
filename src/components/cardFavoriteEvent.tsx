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
        <View>
          <Text style={styles.latoBlack}>{location}</Text>
          <Text>
            {date} - {hours}
          </Text>
        </View>

        <Text>"{host}"</Text>
      </View>
    </View>
  );
};

export default CardFavoriteEvent;

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 342,
    height: 161,
  },
  imgArea: {
    borderWidth: 2,
    width: 109,
    height: 161,
  },
  txtArea: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: 200,
    height: '90%',
  },
  latoBold: {
    fontFamily: 'Lato-Bold',
  },
  latoBlack: {
    fontFamily: 'Lato-Black',
  },
});
