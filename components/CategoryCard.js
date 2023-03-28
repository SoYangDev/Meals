import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CategoriesContext from "../store/context/CategoriesContext";

export const CategoryCard = ({ onPress }) => {
  const { color, title } = useContext(CategoriesContext);
  return (
    <View style={[styles.cardContainer]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed ? styles.buttonPressed : styles.button,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    height: 125,
    margin: 20,
    // shadowOpacity: 0.5,
    // shadowOffset: { width: 2, height: 3 },
    // backgroundColor: { color },
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.5,
    flex: 1,
  },
});
