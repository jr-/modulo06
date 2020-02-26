import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// a maioria dos problemas que acontecem sao resolvidos rodando react-native start --reset-cache ou react-native run-ios|android
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
    </View>
  );
}
