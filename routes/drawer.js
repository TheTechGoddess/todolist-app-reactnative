import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import HomeNavigation from "./homeStack";
import AboutNavigation from "./aboutStack";
import DrawerSidebar from "../shared/drawerSidebar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "../shared/header";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerSidebar {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#DBC300",
          },
          drawerActiveTintColor: "#151300",
          drawerInactiveTintColor: "#444",
          drawerLabelStyle: {
            color: "#444",
          },
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="menu" color="#DBC300" size={size} />
          ),
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
            headerTintColor: "#444",
            headerStyle: { backgroundColor: "#DBC300" },
            headerTitle: () => <Header />,
            headerTitleAlign: "center",
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutNavigation}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="info" color={color} size={size} />
            ),
            headerTintColor: "#444",
            headerStyle: { backgroundColor: "#DBC300" },
            headerTitle: () => <Header />,
            headerTitleAlign: "center",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
