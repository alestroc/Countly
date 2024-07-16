import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView>
      <View style={styles.row}>
        <View>
          <Image source={{uri: imgUrl}} style={styles.imgArea} />
        </View>
        <View style={styles.txtArea}>
          <Text>Electro Music Festival</Text>
          <Text>S. Giovanni del Dosso(MN)</Text>
          <Text>sab 25 Dic - pre 21:30</Text>

          <Text>"Soundsystem Verona"</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardFavoriteEvent;

const styles = StyleSheet.create({
  row: {
    borderWidth: 2,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 342,
    height: 161,
  },
  imgArea: {
    borderWidth: 2,
    width: 109,
    height: 161,
    flex: 1,
  },
  txtArea: {
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderWidth: 2,
    width: 200,
    height: 125,
  },
});
