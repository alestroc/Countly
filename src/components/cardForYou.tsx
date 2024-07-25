import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const CardForYou = ({nEventi}: {nEventi: string}) => {
  const [expanded, setExpanded] = useState(false);
  const height = useSharedValue(80);

  const handlePress = () => {
    setExpanded(!expanded);
    height.value = withSpring(expanded ? 80 : 400);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View>
      <Animated.View style={[styles.animatedView, animatedStyle]}>
        <TouchableOpacity onPress={handlePress} style={styles.config1} />
        <Text style={styles.config2}>{nEventi} Eventi</Text>
      </Animated.View>
    </View>
  );
};

export default CardForYou;

const styles = StyleSheet.create({
  animatedView: {
    borderWidth: 2,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    top: 25,
    width: '100%',
    backgroundColor: 'white',
  },
  config1: {
    borderWidth: 2,

    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    position: 'relative',
    top: -11,
    backgroundColor: 'lightgrey',
    width: '25%',
    height: 25,
    alignSelf: 'center',
  },
  config2: {
    textAlign: 'center',
    marginTop: 10,
  },
});
