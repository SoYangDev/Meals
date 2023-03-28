import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Title from "../ui/Title";
import { globalStyles } from "../styles/global";
import MealInstructions from "../components/MealInstructions";
import MealDetails from "../components/MealDetails";
import { useContext, useLayoutEffect } from "react";
import MealContext from "../providers/MealProvider";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailsScreen({}) {
  const navigation = useNavigation();
  const { imageUrl, title, duration, complexity, affordability, id } =
    useContext(MealContext).meal;

  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealIsFavorite = favoriteMealIds.includes(id);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(id);
      dispatch(removeFavorite({ id: id }));
    } else {
      dispatch(addFavorite({ id: id }));
      // favoriteMealsCtx.addFavorite(id);
    }
    // console.log(favoriteMealsCtx.ids);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          ></IconButton>
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      {/* <Text></Text> */}
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <MealInstructions />
    </ScrollView>
  );
}

export default MealDetailsScreen;
const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 350,
  },
  detailText: {
    color: "white",
  },
});
