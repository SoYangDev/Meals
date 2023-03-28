import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryCard } from "../components/CategoryCard";
import { ROUTES } from "../routes/routes";
import CategoriesContext from "../providers/CategoriesContext";

function CategoriesScreen({ navigation }) {
  function renderCategory(itemData) {
    const { color, title } = itemData.item;

    const goTo = () => {
      navigation.navigate(ROUTES.MealsOverview, { ...itemData.item });
    };

    return (
      <CategoriesContext.Provider value={{ title: title, color: color }}>
        <CategoryCard onPress={goTo} />
      </CategoriesContext.Provider>
    );
  }

  return (
    <FlatList
      style={styles.gridContainer}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridContainer: {
    // marginTop: 6,
  },
});
