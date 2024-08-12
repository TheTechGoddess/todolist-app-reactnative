import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

const AboutStack = createStackNavigator();

export default function MyStack() {
  return (
    <AboutStack.Navigator screenOptions={{ headerShown: false }}>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
}
