import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardNotification = ({
  title,
  description,
  orario,
}: {
  title: string;
  description: string;
  orario: string;
}) => {
  return (
    <>
      <View style={styles.main}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg',
          }}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text
            style={styles.description}
            numberOfLines={4}
            ellipsizeMode="tail">
            {description}
          </Text>
        </View>
      </View>
      <Text style={styles.hour}>{orario}</Text>
    </>
  );
};

export default CardNotification;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '95%',
    margin: 5,
    alignItems: 'center',
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 16,
    margin: 10,
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    //borderWidth: 2,
    color: 'black',
    margin: 6,
    flexShrink: 1,
    fontFamily: 'Lato-Black',
  },
  description: {
    margin: 6,

    color: 'black',
    fontFamily: 'Lato-Bold',
  },

  hour: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    textAlign: 'right',
    width: '100%',
  },
});
