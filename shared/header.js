import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerTitleContainer}>
      <Image
        source={require("../assets/heart_logo.png")}
        style={styles.headerImage}
      />
      <Text style={styles.headerTitleText}>APY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 24, // Adjust the width as needed
    height: 24, // Adjust the height as needed
    marginRight: 8, // Space between image and text
  },
  headerTitleText: {
    fontSize: 18, // Adjust the font size as needed
    color: "#444", // Adjust the color as needed
  },
});

export default Header;
