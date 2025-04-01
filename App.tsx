import { StyleSheet, Text, View } from "react-native";

export default function App() {
  //jsx
  return (
    <View style={styles.container}>
      <View></View>

      <Text style={styles.hello1}> Hello </Text>
      <Text> Xin chao 1</Text>
      <Text style={styles.child}>
        <Text style={styles.child1}>Xin chao 2</Text>
        Xin chao 3
      </Text>
      <Text>Open up App.tsx to start </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  hello1: {
    color: "red",
    fontSize: 30,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontWeight: "bold",
  },

  child: {
    color: "pink",
    fontSize: 50,
  },

  child1: {
    color: "blue",
  },
});
