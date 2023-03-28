import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetails";

function MealItem({ onPress, meal }) {
  const { imageUrl, title, duration, complexity, affordability } = meal;
  const handlePress = () => {
    // setMeal(meal);
    onPress();
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.mealItem}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 3 },
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  mealItem: {
    margin: 16,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 4,
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
