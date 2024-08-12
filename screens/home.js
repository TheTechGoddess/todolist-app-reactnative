import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import ReviewForm from "./reviewForm";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   navigation.push("ReviewDetails");
  // };
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All(again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Not So 'Final' Fantasy",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("Dismissed keyboard");
        }}
      >
        <Modal visible={modalOpen} animationType="slide">
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <View style={styles.modalContent}>
            <ReviewForm addReview={addReview} />
          </View>
        </Modal>
      </TouchableWithoutFeedback>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 10,
  },
  modalContent: {
    flex: 1,
  },
});
