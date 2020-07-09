import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Number0 from "./_images/number_0.png";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={Number0} />
    </View>
  );
};

export default GameScreen;
