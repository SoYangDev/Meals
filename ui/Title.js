import { StyleSheet } from "react-native";
import { Text } from "react-native";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "capitalize",
    marginBottom: 4,
  },
});
