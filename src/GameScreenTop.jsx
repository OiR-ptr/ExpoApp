import React, { useEffect, useCallback } from "react";
import { View, StyleSheet, Picker, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  checkNumbersEvent,
  initializeGameruleEvent,
  setNumberEvent,
} from "hit_and_blow/src/actions/GameActions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

const NumberPicker = (props) => {
  const { number, onUpdateValue } = props;

  return (
    <Picker
      style={{ width: 75 }}
      selectedValue={number}
      onValueChange={onUpdateValue}
    >
      <Picker.Item label="0" value={0} />
      <Picker.Item label="1" value={1} />
      <Picker.Item label="2" value={2} />
      <Picker.Item label="3" value={3} />
      <Picker.Item label="4" value={4} />
      <Picker.Item label="5" value={5} />
      <Picker.Item label="6" value={6} />
      <Picker.Item label="7" value={7} />
      <Picker.Item label="8" value={8} />
      <Picker.Item label="9" value={9} />
    </Picker>
  );
};

const GameScreen = (props) => {
  const { initializeGameRule, dial, setNumber, checkNumbers } = props;
  useEffect(() => {
    initializeGameRule(4, 9, false);
  }, [initializeGameRule]);

  return (
    <>
      <View style={styles.container}>
        <NumberPicker
          number={dial[0]}
          onUpdateValue={(val) => setNumber(Number(val), 0)}
        />
        <NumberPicker
          number={dial[1]}
          onUpdateValue={(val) => setNumber(Number(val), 1)}
        />
        <NumberPicker
          number={dial[2]}
          onUpdateValue={(val) => setNumber(Number(val), 2)}
        />
        <NumberPicker
          number={dial[3]}
          onUpdateValue={(val) => setNumber(Number(val), 3)}
        />
      </View>
      <Button
        title="Check"
        onPress={() => checkNumbers(dial.map((value) => Number(value)))}
      ></Button>
    </>
  );
};

const useStateProps = () => {
  const dial = useSelector((state) => {
    return state.game.dial;
  });

  return { dial };
};

const useDispatchProps = () => {
  const dispatch = useDispatch();

  const initializeGameRule = useCallback(
    (dialLength, maxNumber, hasDuplicable) => {
      dispatch(initializeGameruleEvent(dialLength, maxNumber, hasDuplicable));
    },
    [dispatch]
  );

  const setNumber = useCallback(
    (number, position) => {
      dispatch(setNumberEvent(number, position));
    },
    [dispatch]
  );

  const checkNumbers = useCallback(
    (numbers) => {
      dispatch(checkNumbersEvent(numbers));
    },
    [dispatch]
  );

  return {
    initializeGameRule,
    setNumber,
    checkNumbers,
  };
};

const GameScreenContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <GameScreen {..._props} />;
};

export default GameScreenContainer;
