import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App () {
  return (
    <View style={styles.sectionContainer}>
      <LottieView 
        source={require('./assets/lottie/add.json')}
        style={{ width: '100%', aspectRatio: 1}}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  textSection: {
    color: 'black',
    fontSize: 25,
  }
});
