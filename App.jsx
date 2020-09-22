import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";
import GameReducer from "hit_and_blow/src/reducers/GameReducer";
import GameScreen from "./src/GameScreenTop";
import Constants from "expo-constants";
import { default as HistoryLog } from "./src/HistoryLog";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <View style={styles.container}>
        <GameScreen />
        <HistoryLog />
      </View>
    </SafeAreaView>
  );
}

const createRootReducer = () => {
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
