import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";
import GameReducer from "hit_and_blow/src/reducers/GameReducer";
import GameScreen from "./src/GameScreenTop";

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <GameScreen />
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

const createRootReducer = (objHistory) => {
  return combineReducers({
    game: GameReducer,
  });
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers()
  );
  return store;
};
const store = configureStore();

const entry = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default entry;
