import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../ui/Title";
import MealDetails from "./MealDetails";
import { useContext } from "react";
import MealContext from "../providers/MealProvider";
import List from "./List";

function MealInstructions() {
  const { meal } = useContext(MealContext);
  const { ingredients, steps } = meal;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.section}>
          <Title style={styles.title}>ingredients</Title>
          <List dataSource={ingredients} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <Title style={styles.title}>steps</Title>
          <List dataSource={steps} />
        </View>
      </View>
    </View>
  );
}

export default MealInstructions;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  section: {
    padding: 8,
    justifyContent: "center",
    alignContent: "center",
    width: "80%",
  },

  text: {
    padding: 4,
    textAlign: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
});
