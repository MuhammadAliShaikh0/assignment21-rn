import { View, Text } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30,color:"black" }}>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default Home;
