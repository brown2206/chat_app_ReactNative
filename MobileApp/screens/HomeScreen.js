import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from "socket.io-client";

export default function HomeScreen() {
  const [messageToSend, setMessageToSend] = useState("");
  useEffect(() => {
    io("http://10.0.0.191:3001")
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <TextInput 
        value={messageToSend} 
        onChangeText={text => setMessageToSend(text)} 
        placeholder="Enter chat message.."/>
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
