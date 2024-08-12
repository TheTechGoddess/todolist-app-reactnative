import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
  // Destructure the parameters from route.params
  const { title, body, rating } = route.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <MaterialIcons
        style={styles.arrow}
        name="arrow-back"
        color="#444"
        size={20}
        onPress={pressHandler}
      />
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style={styles.rating}>
          <Text>Apy rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    marginBottom: 10,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
