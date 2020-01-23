import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import TextButton from "../../components/TextButton";
import ImageButton from "../../components/ImageButton";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const Upper = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const Middle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Lower = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Counter = styled.Text`
  color: ${TINT_COLOR};
  font-size: 120;
  font-weight: 200;
`;

const CounterPresenter = ({
  loaded,
  increaseCount,
  resetCount,
  drinkCount,
  drinkType,
  changeDrink
}) =>
  loaded ? (
    <Loader />
  ) : (
    <Container>
      <Upper>
        <TextButton name="Reset" onPress={resetCount} />
        {drinkType === "Beer" ? (
          <TextButton
            name="Beer"
            onPress={() => changeDrink("Beer")}
            color="red"
          />
        ) : (
          <TextButton
            name="Beer"
            onPress={() => changeDrink("Beer")}
            color="white"
          />
        )}
        {drinkType === "Soju" ? (
          <TextButton
            name="Soju"
            onPress={() => changeDrink("Soju")}
            color="red"
          />
        ) : (
          <TextButton
            name="Soju"
            onPress={() => changeDrink("Soju")}
            color="white"
          />
        )}
      </Upper>
      <Middle>
        <Counter>{drinkCount}</Counter>
      </Middle>
      <Lower>
        <ImageButton
          iconName="plus-circle"
          size={120}
          onPress={increaseCount}
        />
      </Lower>
    </Container>
  );

CounterPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default CounterPresenter;
