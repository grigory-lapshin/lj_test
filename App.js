import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AsyncStorage } from "react-native";

export default class App extends React.Component {
  _storeData = async () => {
    try {
      await AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
