import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const AccountScreen = () => {
  // Dummy User Data (Replace with API or Context)
  const user = {
    name: "Soni Kumari",
    email: "sonikumarinc@gmail.com.com",
    profilePic: require("../assets/focused/account.png"), // Replace with actual user image
  };

  return (
    <View style={styles.container}>
      <Image source={user.profilePic} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
});

export default AccountScreen;
