import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  //const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return (
    <>
      <MealsList items={favoriteMeals} />
    </>
  );
}
export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});