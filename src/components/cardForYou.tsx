import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const CardForYou = ({nEventi}: {nEventi: string}) => {
  const height = useSharedValue(150);

  const handlePress = () => {
    height.value = withSpring(height.value + 50);
    console.log('Premuto');
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View style={styles.main}>
      <Animated.View style={[styles.animatedView, animatedStyle]}>
        <TouchableOpacity onPress={handlePress} style={styles.config1}>
          <Text style={styles.config2}>{nEventi} Eventi</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default CardForYou;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    width: '100%',
    bottom: 0,
  },
  animatedView: {
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  config1: {
    borderWidth: 2,
    position: 'relative',
    top: 8,
    backgroundColor: 'lightgrey',
    height: 200,
    width: '100%',
    alignSelf: 'center',
  },
  config2: {
    textAlign: 'center',
    marginTop: 10,
  },
});
