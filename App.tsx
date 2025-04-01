import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("Dai");

  //jsx
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Hello {name}</Text>

      <View>
        <Button title="Increase" onPress={() => alert("tap me")} />
      </View>
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
});
