import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealContext from "../../providers/MealProvider";
import { useNavigation } from "@react-navigation/native";
import MealItem from "./MealItem";
import { ROUTES } from "../../routes/routes";

function MealsList({ items }) {
  const { setMeal } = useContext(MealContext);
  const navigation = useNavigation();

  function renderMeal(itemData) {
    function handlePress() {
      setMeal({ ...itemData.item });

      navigation.navigate(ROUTES.MealDetails);
    }

    return <MealItem onPress={handlePress} meal={itemData.item} />;
  }

  return (
    <View style={styles.constainer}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}
export default MealsList;
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
