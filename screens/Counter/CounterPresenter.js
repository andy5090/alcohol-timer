import React, { useState } from "react";
import PropTypes from "prop-types";
import { Platform, Modal, TouchableWithoutFeedback } from "react-native";
import Loader from "../../components/Loader";
import styled from "styled-components";
import TextButton from "../../components/TextButton";
import ImageButton from "../../components/ImageButton";
import { BG_COLOR, TINT_COLOR, SELECTED_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const midTextSize = Layout.defaultFontSize * 2;
const bigTextSize = Layout.defaultFontSize * 5;

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
  font-family: "Montserrat-Thin";
  font-size: ${midTextSize};
  font-weight: 200;
`;

const Counter = styled.Text`
  color: ${TINT_COLOR};
  font-family: "Montserrat-Light";
  font-size: ${bigTextSize};
  font-weight: 200;
`;

const PickerBox = styled.View`
  background-color: white;
  border-radius: 20px;
`;

const PickerContainer = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const EmptyContainer = styled.View`
  flex: 1;
`;

const TouchableContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  flex-direction: row;
  justify-content: center;
  flex: 1;
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
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerPosition, setpickerPosition] = useState(0);

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
      <Modal transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={event => {
            setModalVisible(false);
          }}
        >
          <TouchableContainer>
            <EmptyContainer></EmptyContainer>
            <PickerContainer>
              <PickerBox>
                {drinks.map(drink => (
                  <TextButton
                    key={drink.id}
                    name={drink.name}
                    color={drink.id === drinkId ? SELECTED_COLOR : TINT_COLOR}
                    fontColor={drink.id === drinkId ? TINT_COLOR : BG_COLOR}
                    onPress={() => {
                      changeDrink(drink.id);
                      setModalVisible(false);
                    }}
                  />
                ))}
              </PickerBox>
            </PickerContainer>
          </TouchableContainer>
        </TouchableWithoutFeedback>
      </Modal>
      <Upper>
        <TextButton name="다마심" onPress={resetCount} />
        <TextButton
          name={chosenDrink.name}
          onPress={() => {
            setModalVisible(true);
          }}
        />
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
