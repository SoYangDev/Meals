import { StyleSheet, Text, View } from "react-native";

function List({ dataSource }) {
  return (
    <View>
      {dataSource.map((data) => (
        <View key={data} style={styles.textContainer}>
          <Text style={styles.text}>{data}</Text>
        </View>
      ))}
    </View>
  );
}

export default List;
const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#b07e7e",
  },
  text: {
    padding: 4,
    textAlign: "center",
  },
});
