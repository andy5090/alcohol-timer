import React from "react";
import PropTypes from "prop-types";
import { Picker } from "react-native";
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

const AlcoholRate = styled.Text`
  color: ${TINT_COLOR};
  font-size: 40;
  font-weight: 200;
`;

const Counter = styled.Text`
  color: ${TINT_COLOR};
  font-size: 100;
  font-weight: 200;
`;

const DrinkPicker = styled.Picker`
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  width: 80;
  height: 50;
`;

const CounterPresenter = ({
  loaded,
  increaseCount,
  resetCount,
  drinkCount,
  drinkId,
  changeDrink,
  drinks,
  sex,
  weight
}) => {
  let chosenDrink, amount, degree;

  if (drinkId === null) {
    changeDrink(drinks[0].id);
    chosenDrink = drinks[0];
    amount = parseInt(chosenDrink.amount);
    degree = parseInt(chosenDrink.degree);
  } else {
    chosenDrink = drinks.filter(drink => drink.id === drinkId).pop();
    amount = parseInt(chosenDrink.amount);
    degree = parseInt(chosenDrink.degree);
  }

  const weightP = parseInt(weight);
  const sexR = sex === "male" ? 0.86 : 0.64;
  const bac =
    Math.round(
      ((amount * drinkCount * (degree / 100) * 0.7894 * 0.7) /
        (weightP * sexR * 10)) *
        1000
    ) / 1000;
  return loaded ? (
    <Loader />
  ) : (
    <Container>
      <Upper>
        <TextButton name="다마심" onPress={resetCount} />
        <DrinkPicker
          selectedValue={drinkId}
          onValueChange={itemValue => changeDrink(itemValue)}
          mode="dropdown"
          itemStyle={{ color: BG_COLOR }}
        >
          {drinks.map(drink => (
            <Picker.Item key={drink.id} label={drink.name} value={drink.id} />
          ))}
        </DrinkPicker>
      </Upper>
      <Middle>
        <AlcoholRate>{`${bac}%`}</AlcoholRate>
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
};

CounterPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default CounterPresenter;
