import React from 'react';
import { View, Text, Image } from 'react-native';

const ReorderScreen = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Reorder Screen</Text>
      <Image
        source={require("../assets/focused/reorder.png")} // Ensure correct path
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
    </View>
  );
};

export default ReorderScreen;
