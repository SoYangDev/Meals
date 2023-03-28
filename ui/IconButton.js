import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
function IconButton({ onPress, name, size, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons
        name={name}
        size={size ? size : 24}
        color={color ? color : "white"}
      ></Ionicons>
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
