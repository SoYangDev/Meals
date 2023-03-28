import { useNavigation } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { ROUTES } from "../routes/routes";
import { useContext, useLayoutEffect } from "react";
import MealContext from "../providers/MealProvider";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route }) {
  const id = route.params.id;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === id
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [id, navigation]);

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(id) >= 0
  );

  return (
    <>
      <MealsList items={displayedMeals} />
    </>
  );
}

export default MealsOverviewScreen;
