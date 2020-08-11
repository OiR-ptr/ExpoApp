import React, { useEffect, useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Number0 from "./_images/number_0.png";
import { initializeGameruleEvent } from "hit_and_blow/src/actions/GameActions";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const GameScreen = (props) => {
  const { initializeGameRule } = props;
  useEffect(() => {
    initializeGameRule(4, 9, false);
  }, [initializeGameRule]);

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={Number0} />
    </View>
  );
};

const useStateProps = () => {
  return {};
};

const useDispatchProps = () => {
  const dispatch = useDispatch();

  const initializeGameRule = useCallback(
    (dialLength, maxNumber, hasDuplicable) => {
      dispatch(initializeGameruleEvent(dialLength, maxNumber, hasDuplicable));
    },
    [dispatch]
  );

  return {
    initializeGameRule,
  };
};

const GameScreenContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <GameScreen {..._props} />;
};

export default GameScreenContainer;
