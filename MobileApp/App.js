import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import io from "socket.io-client";

export default function App() {
  
  useEffect(function() {
    io("http://127.0.0.1:3001")
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!, I love you!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
