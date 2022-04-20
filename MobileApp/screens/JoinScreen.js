import React from 'react';
import {View, Text, TextInput, Image } from 'react-native';

export default function JoinScreen() {
    return (
        <View>
            <Image source={require("../assets/chat-icon.png")} />
            <Text>JoinScreen</Text>
        </View>
    );
}