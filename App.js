import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { MealProvider } from "./providers/MealProvider";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <MealProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#3f2f25" },
              }}
            >
              <Stack.Screen
                options={{
                  title: "All Categories",
                  headerShown: false,
                }}
                name="MealsCategories"
                component={DrawerNavigator}
              />
              <Stack.Screen
                // options={({ route, navigation }) => {
                //   const catId = route.params.id;
                //   return {};
                // }}

                name="MealsOverview"
                component={MealsOverviewScreen}
              />
              <Stack.Screen
                name="MealDetails"
                component={MealDetailsScreen}
                options={{
                  headerRight: () => {
                    return <Button title="TAP"></Button>;
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </MealProvider>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}
