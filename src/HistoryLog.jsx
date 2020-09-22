import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({});

const HistoryLog = (props) => {
  const { history } = props;

  return (
    <ScrollView>
      {history.map((value) => {
        return (
          <Text key={value.key}>
            {value.numbers} : {value.hit}H{value.blow}B
          </Text>
        );
      })}
    </ScrollView>
  );
};

const useStateProps = () => {
  const history = useSelector((state) => {
    return state.game.history;
  });

  return {
    history,
  };
};

const useDispatchProps = () => {
  return {};
};

const HistoryLogContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <HistoryLog {..._props} />;
};

export default HistoryLogContainer;
