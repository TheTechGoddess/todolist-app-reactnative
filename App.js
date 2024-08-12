import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigator from "./routes/drawer";

SplashScreen.preventAutoHideAsync();

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await getFonts();
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Return null or a loading component here
  }

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
