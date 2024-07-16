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
          <Image
            source={{
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhtesting-i03.mycdn.no%2Fmysimgprod%2Fhtesting_mystore_no%2Fimages%2F51948_Fastkarm_Vindu_110x160__109x159__1.png%2Fw600h600.png&f=1&nofb=1&ipt=08c5a8bd924839b55bb07e888be5f9540f6e690dcd9f9c4967f150d5f8cb5682&ipo=images',
            }}
            style={styles.imgArea}
          />
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
